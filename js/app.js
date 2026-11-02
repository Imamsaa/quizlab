(() => {
  'use strict';

  const config = window.QUIZ_CONFIG || {};
  const questionBank = Array.isArray(window.QUIZ_QUESTIONS) ? window.QUIZ_QUESTIONS : [];
  const $ = (id) => document.getElementById(id);

  const screens = {
    home: $('home-screen'),
    summary: $('summary-screen'),
    quiz: $('quiz-screen'),
    result: $('result-screen')
  };

  const state = {
    player: '',
    questions: [],
    currentIndex: 0,
    answers: new Map(),
    doubtful: new Set(),
    startTime: 0,
    durationSeconds: 0,
    remainingSeconds: 0,
    timerId: null,
    finished: false,
    questionFontSize: 19
  };

  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);

  function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function showScreen(name) {
    Object.entries(screens).forEach(([key, element]) => {
      element.hidden = key !== name;
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function formatTime(totalSeconds) {
    const safe = Math.max(0, totalSeconds);
    const minutes = Math.floor(safe / 60).toString().padStart(2, '0');
    const seconds = (safe % 60).toString().padStart(2, '0');
    return minutes + ':' + seconds;
  }

  function showToast(message) {
    const toast = $('toast');
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(showToast.timeoutId);
    showToast.timeoutId = window.setTimeout(() => toast.classList.remove('show'), 2600);
  }

  function getBestScore() {
    try {
      const raw = localStorage.getItem('quizlab-best-' + (config.id || 'default'));
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  }

  function updateBestScore(score) {
    const current = getBestScore();
    if (!current || score > current.score) {
      try {
        localStorage.setItem('quizlab-best-' + (config.id || 'default'), JSON.stringify({
          score,
          player: state.player,
          date: new Date().toISOString()
        }));
      } catch (error) {
        // Quiz remains usable when browser storage is unavailable.
      }
    }
    renderBestScore();
  }

  function renderBestScore() {
    const best = getBestScore();
    $('best-score-home').textContent = best ? best.score + '/100' : 'Belum ada rekor';
  }

  function setupHome() {
    $('quiz-title').textContent = config.title || 'Kuis Interaktif';
    $('active-quiz-title').textContent = config.title || 'Kuis Interaktif';
    $('summary-title').textContent = config.title || 'Kuis Interaktif';
    $('quiz-description').textContent = config.description || 'Uji pemahamanmu melalui kuis interaktif.';
    const requiredCount = config.questionsPerSession || 30;
    $('total-questions').textContent = questionBank.length;
    $('start-button').disabled = questionBank.length < requiredCount;
    updateTimeEstimate();
    renderBestScore();
  }

  function getSelectedQuestionCount() {
    return config.questionsPerSession || 30;
  }

  function updateTimeEstimate() {
    const minutes = config.sessionDurationMinutes || 45;
    $('time-estimate').textContent = minutes + ' menit';
  }

  function prepareSummary() {
    if (!questionBank.length) {
      showToast('Bank soal masih kosong. Tambahkan soal di js/questions.js.');
      return;
    }

    const name = $('player-name').value.trim();
    if (!name) {
      $('player-name').focus();
      showToast('Nama peserta wajib diisi sebelum melanjutkan.');
      return;
    }

    const count = getSelectedQuestionCount();
    if (questionBank.length < count) {
      showToast('Bank soal belum mencukupi. Dibutuhkan ' + count + ' soal.');
      return;
    }
    const duration = (config.sessionDurationMinutes || 45) * 60;
    state.player = name;
    $('summary-player').textContent = name;
    $('summary-title').textContent = config.title || 'Kuis Interaktif';
    $('summary-question-count').textContent = count + ' soal';
    $('summary-duration').textContent = Math.ceil(duration / 60) + ' menit';
    showScreen('summary');
  }

  function startQuiz() {
    if (!questionBank.length) {
      showToast('Bank soal masih kosong. Tambahkan soal di js/questions.js.');
      return;
    }

    const amount = getSelectedQuestionCount();
    if (questionBank.length < amount) {
      showToast('Bank soal belum mencukupi. Dibutuhkan ' + amount + ' soal.');
      return;
    }
    state.player = $('player-name').value.trim();
    let selected = [...questionBank];
    if (config.shuffleQuestions !== false) selected = shuffle(selected);
    selected = selected.slice(0, amount);

    state.questions = selected.map((question) => {
      const choices = question.options.map((text, index) => ({ text, correct: index === question.answer }));
      return {
        ...question,
        choices: config.shuffleOptions === false ? choices : shuffle(choices)
      };
    });

    state.currentIndex = 0;
    state.answers = new Map();
    state.doubtful = new Set();
    state.finished = false;
    state.questionFontSize = 19;
    state.startTime = Date.now();
    state.durationSeconds = (config.sessionDurationMinutes || 45) * 60;
    state.remainingSeconds = state.durationSeconds;

    $('player-label').textContent = state.player;
    $('timer-box').classList.remove('warning');
    $('timer').textContent = formatTime(state.remainingSeconds);
    $('question-list-panel').classList.remove('mobile-open', 'is-collapsed');
    $('exam-layout').style.gridTemplateColumns = '';
    $('instruction-modal').hidden = true;
    $('finish-modal').hidden = true;
    $('review-section').hidden = true;

    showScreen('quiz');
    renderQuestion();
    startTimer();
  }

  function startTimer() {
    window.clearInterval(state.timerId);
    state.timerId = window.setInterval(() => {
      if (state.finished) return;
      state.remainingSeconds -= 1;
      $('timer').textContent = formatTime(state.remainingSeconds);
      if (state.remainingSeconds <= 60) $('timer-box').classList.add('warning');
      if (state.remainingSeconds <= 0) submitQuiz(true);
    }, 1000);
  }

  function renderQuestion() {
    const question = state.questions[state.currentIndex];
    if (!question) return;

    const total = state.questions.length;
    const current = state.currentIndex + 1;
    const answered = state.answers.size;
    const progress = total ? Math.round((answered / total) * 100) : 0;
    const selectedIndex = state.answers.get(question.id);

    $('progress-text').textContent = 'TERJAWAB ' + answered + ' DARI ' + total + ' SOAL';
    $('progress-percent').textContent = progress + '%';
    $('progress-fill').style.width = progress + '%';
    $('question-number').textContent = 'Soal nomor ' + current;
    $('question-category').textContent = question.category || 'KUIS';
    $('question-text').textContent = question.question;
    $('question-text').style.fontSize = state.questionFontSize + 'px';

    const contextPanel = $('question-context');
    if (question.context) {
      $('context-text').textContent = question.context;
      contextPanel.hidden = false;
    } else {
      contextPanel.hidden = true;
      $('context-text').textContent = '';
    }

    const options = $('options-list');
    options.innerHTML = '';

    question.choices.forEach((choice, index) => {
      const label = document.createElement('label');
      label.className = 'exam-option' + (selectedIndex === index ? ' selected' : '');
      label.setAttribute('role', 'radio');
      label.setAttribute('aria-checked', selectedIndex === index ? 'true' : 'false');
      label.tabIndex = 0;

      const radio = document.createElement('span');
      radio.className = 'exam-radio' + (selectedIndex === index ? ' checked' : '');
      radio.setAttribute('aria-hidden', 'true');

      const key = document.createElement('span');
      key.className = 'exam-option-key';
      key.textContent = String.fromCharCode(65 + index) + '.';

      const text = document.createElement('span');
      text.className = 'exam-option-text';
      text.textContent = choice.text;

      label.append(radio, key, text);
      label.addEventListener('click', () => selectAnswer(question.id, index));
      label.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectAnswer(question.id, index);
        }
      });
      options.appendChild(label);
    });

    $('prev-button').disabled = state.currentIndex === 0;
    const isLast = state.currentIndex === total - 1;
    $('next-button').innerHTML = isLast
      ? 'Selesaikan Tes <svg class="ui-icon text-lg" aria-hidden="true" viewBox="0 0 24 24" focusable="false"><use href="assets/icons.svg?v=local-icons-20261102-1#task-alt"></use></svg>'
      : 'Soal Berikutnya <svg class="ui-icon text-lg" aria-hidden="true" viewBox="0 0 24 24" focusable="false"><use href="assets/icons.svg?v=local-icons-20261102-1#chevron-right"></use></svg>';

    const isDoubtful = state.doubtful.has(question.id);
    $('doubt-button').classList.toggle('active', isDoubtful);
    $('doubt-button').setAttribute('aria-pressed', isDoubtful ? 'true' : 'false');
    $('doubt-button').innerHTML = '<svg class="ui-icon text-lg" aria-hidden="true" viewBox="0 0 24 24" focusable="false"><use href="assets/icons.svg?v=local-icons-20261102-1#flag"></use></svg> ' +
      (isDoubtful ? 'Hapus Ragu-ragu' : 'Ragu-ragu');

    updateExamSummary();
    renderQuestionGrid();
  }

  function selectAnswer(questionId, optionIndex) {
    state.answers.set(questionId, optionIndex);
    renderQuestion();
  }

  function updateExamSummary() {
    const total = state.questions.length;
    const answered = state.answers.size;
    const doubtful = state.doubtful.size;
    $('count-answered').textContent = answered;
    $('count-unanswered').textContent = total - answered;
    $('count-doubt').textContent = doubtful;
  }

  function renderQuestionGrid() {
    const grid = $('question-grid');
    grid.innerHTML = '';

    state.questions.forEach((question, index) => {
      const button = document.createElement('button');
      const isCurrent = index === state.currentIndex;
      const isAnswered = state.answers.has(question.id);
      const isDoubtful = state.doubtful.has(question.id);

      let status = 'unanswered';
      if (isAnswered) status = 'answered';
      if (isDoubtful) status = 'doubtful';
      if (isCurrent) status = 'current';

      button.type = 'button';
      button.className = 'question-number-button ' + status;
      button.textContent = index + 1;
      button.setAttribute('aria-label', 'Buka soal nomor ' + (index + 1) +
        (isAnswered ? ', sudah dijawab' : ', belum dijawab') +
        (isDoubtful ? ', ragu-ragu' : ''));
      button.setAttribute('aria-current', isCurrent ? 'step' : 'false');

      button.addEventListener('click', () => {
        state.currentIndex = index;
        renderQuestion();
        if (window.matchMedia('(max-width: 1023px)').matches) {
          $('question-list-panel').classList.remove('mobile-open');
        }
      });
      grid.appendChild(button);
    });
  }

  function toggleDoubt() {
    const questionId = state.questions[state.currentIndex].id;
    if (state.doubtful.has(questionId)) state.doubtful.delete(questionId);
    else state.doubtful.add(questionId);
    renderQuestion();
  }

  function goNext() {
    if (state.currentIndex < state.questions.length - 1) {
      state.currentIndex += 1;
      renderQuestion();
      return;
    }
    requestFinish();
  }

  function goPrevious() {
    if (state.currentIndex > 0) {
      state.currentIndex -= 1;
      renderQuestion();
    }
  }

  function requestFinish() {
    if (state.finished) return;
    const unanswered = state.questions.length - state.answers.size;
    $('finish-confirm-message').textContent = unanswered > 0
      ? 'Masih ada ' + unanswered + ' soal yang belum dijawab. Kamu tetap bisa mengakhiri tes, tetapi soal kosong akan dihitung salah.'
      : 'Semua soal sudah dijawab. Akhiri tes sekarang dan lihat hasil pengerjaanmu?';
    $('finish-modal').hidden = false;
    $('finish-cancel-button').focus();
  }

  function submitQuiz(timeExpired) {
    if (state.finished) return;
    state.finished = true;
    window.clearInterval(state.timerId);
    $('finish-modal').hidden = true;

    const elapsedSeconds = Math.min(
      state.durationSeconds,
      Math.max(0, Math.floor((Date.now() - state.startTime) / 1000))
    );
    const correct = state.questions.reduce((total, question) => {
      const selected = state.answers.get(question.id);
      return total + (selected !== undefined && question.choices[selected].correct ? 1 : 0);
    }, 0);
    const score = Math.round((correct / state.questions.length) * 100);

    renderResults({ correct, score, elapsedSeconds, timeExpired });
    updateBestScore(score);
    showScreen('result');
  }

  function renderResults(result) {
    const total = state.questions.length;
    const wrong = total - result.correct;

    $('score-value').textContent = result.score;
    $('score-orb').style.setProperty('--score-angle', (result.score * 3.6) + 'deg');
    $('result-exam-name').textContent = config.title || 'Kuis Interaktif';
    $('correct-count').textContent = result.correct;
    $('wrong-count').textContent = wrong;
    $('time-used').textContent = formatTime(result.elapsedSeconds);
    $('result-heading').textContent = result.timeExpired ? 'Waktu ujian habis' : 'Ujian selesai!';
    $('result-subtitle').textContent = state.player + ', berikut hasil pengerjaan ujianmu.';
    $('result-completion-status').textContent = result.timeExpired ? 'WAKTU HABIS' : 'SELESAI';
    $('review-summary').textContent = result.correct + ' benar dari ' + total + ' soal';

    let rank = 'TERUS BERLATIH';
    let title = 'Perjalanan belajarmu berlanjut.';
    let message = 'Setiap latihan adalah kesempatan untuk menjadi lebih baik. Pelajari pembahasannya dan coba lagi.';

    if (result.score >= 90) {
      rank = 'SANGAT BAIK';
      title = 'Pemahaman yang hebat!';
      message = 'Hasil yang sangat baik. Pertahankan rasa ingin tahu dan terus tantang kemampuanmu.';
    } else if (result.score >= 75) {
      rank = 'BAIK';
      title = 'Kamu sudah berada di jalur yang tepat.';
      message = 'Sebagian besar materi sudah kamu kuasai. Pelajari beberapa bagian yang masih keliru.';
    } else if (result.score >= 60) {
      rank = 'CUKUP';
      title = 'Sedikit lagi menuju hasil lebih baik.';
      message = 'Kamu sudah punya dasar. Baca pembahasan dan gunakan hasil ini untuk latihan berikutnya.';
    }

    $('result-rank').textContent = rank;
    $('result-message-title').textContent = title;
    $('result-message-text').textContent = message;
    renderReview();
  }

  function renderReview() {
    const list = $('review-list');
    list.innerHTML = '';

    state.questions.forEach((question, index) => {
      const selectedIndex = state.answers.get(question.id);
      const selectedChoice = selectedIndex === undefined ? null : question.choices[selectedIndex];
      const correctChoice = question.choices.find((choice) => choice.correct);
      const isCorrect = Boolean(selectedChoice && selectedChoice.correct);

      const details = document.createElement('details');
      details.className = 'review-item';

      const summary = document.createElement('summary');
      summary.innerHTML =
        '<span class="review-index">' + String(index + 1).padStart(2, '0') + '</span>' +
        '<span class="review-question">' + escapeHTML(question.question) + '</span>' +
        '<span class="review-status ' + (isCorrect ? 'good' : 'bad') + '">' +
        (isCorrect ? '✓ BENAR' : '× PERLU DIPERBAIKI') + '</span>';

      const content = document.createElement('div');
      content.className = 'review-content';

      const answerLine = document.createElement('p');
      answerLine.className = 'review-answer';
      answerLine.innerHTML =
        '<strong>Jawabanmu:</strong> ' +
        (selectedChoice ? escapeHTML(selectedChoice.text) : '<em>Tidak dijawab</em>') +
        '<br><strong>Jawaban benar:</strong> ' + escapeHTML(correctChoice.text);
      content.appendChild(answerLine);

      if (config.showExplanation !== false && question.explanation) {
        const explanation = document.createElement('p');
        explanation.className = 'review-explanation';
        explanation.textContent = question.explanation;
        content.appendChild(explanation);
      }

      details.append(summary, content);
      list.appendChild(details);
    });
  }

  function closeInfo() {
    $('instruction-modal').hidden = true;
  }

  function setQuestionListVisible(visible) {
    const panel = $('question-list-panel');
    const layout = $('exam-layout');
    const isMobile = window.matchMedia('(max-width: 1023px)').matches;

    if (isMobile) {
      panel.classList.remove('is-collapsed');
      layout.style.gridTemplateColumns = '';
      panel.classList.toggle('mobile-open', visible);
      return;
    }

    panel.classList.remove('mobile-open');
    panel.classList.toggle('is-collapsed', !visible);
    layout.style.gridTemplateColumns = visible ? '' : 'minmax(0, 1fr)';
  }

  function toggleQuestionList() {
    const panel = $('question-list-panel');
    const isMobile = window.matchMedia('(max-width: 1023px)').matches;
    const isVisible = isMobile
      ? panel.classList.contains('mobile-open')
      : !panel.classList.contains('is-collapsed');

    setQuestionListVisible(!isVisible);
  }

  $('start-button').addEventListener('click', prepareSummary);
  $('back-to-settings-button').addEventListener('click', () => showScreen('home'));
  $('begin-exam-button').addEventListener('click', startQuiz);

  $('next-button').addEventListener('click', goNext);
  $('prev-button').addEventListener('click', goPrevious);
  $('doubt-button').addEventListener('click', toggleDoubt);
  $('finish-button').addEventListener('click', requestFinish);
  $('finish-cancel-button').addEventListener('click', () => { $('finish-modal').hidden = true; });
  $('finish-submit-button').addEventListener('click', () => submitQuiz(false));

  $('retry-button').addEventListener('click', () => showScreen('home'));
  $('review-button').addEventListener('click', () => {
    $('review-section').hidden = false;
    $('review-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    const first = $('review-list').querySelector('details');
    if (first) first.open = true;
  });

  $('info-button').addEventListener('click', () => { $('instruction-modal').hidden = false; });
  $('info-close-button').addEventListener('click', closeInfo);
  $('info-understood-button').addEventListener('click', closeInfo);
  $('instruction-modal').addEventListener('click', (event) => {
    if (event.target === $('instruction-modal')) closeInfo();
  });
  $('finish-modal').addEventListener('click', (event) => {
    if (event.target === $('finish-modal')) $('finish-modal').hidden = true;
  });

  $('question-list-toggle').addEventListener('click', toggleQuestionList);
  $('list-close-button').addEventListener('click', () => setQuestionListVisible(false));

  $('font-smaller').addEventListener('click', () => {
    state.questionFontSize = Math.max(16, state.questionFontSize - 2);
    $('question-text').style.fontSize = state.questionFontSize + 'px';
  });
  $('font-larger').addEventListener('click', () => {
    state.questionFontSize = Math.min(30, state.questionFontSize + 2);
    $('question-text').style.fontSize = state.questionFontSize + 'px';
  });
  $('font-reset').addEventListener('click', () => {
    state.questionFontSize = 19;
    $('question-text').style.fontSize = state.questionFontSize + 'px';
  });

  $('player-name').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') prepareSummary();
  });

  document.addEventListener('keydown', (event) => {
    if ($('instruction-modal').hidden === false && event.key === 'Escape') closeInfo();
    if ($('finish-modal').hidden === false && event.key === 'Escape') $('finish-modal').hidden = true;

    if ($('quiz-screen').hidden || state.finished) return;
    if (event.altKey || event.ctrlKey || event.metaKey) return;

    const active = document.activeElement;
    if (active && ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(active.tagName)) return;

    const key = event.key.toLowerCase();
    if (['a', 'b', 'c', 'd'].includes(key)) {
      const index = key.charCodeAt(0) - 97;
      if (state.questions[state.currentIndex].choices[index]) {
        selectAnswer(state.questions[state.currentIndex].id, index);
      }
    } else if (key === 'arrowright') {
      goNext();
    } else if (key === 'arrowleft') {
      goPrevious();
    }
  });

  setupHome();
})();