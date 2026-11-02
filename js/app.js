(() => {
  'use strict';

  const config = window.QUIZ_CONFIG || {};
  const questionBank = Array.isArray(window.QUIZ_QUESTIONS) ? window.QUIZ_QUESTIONS : [];
  const $ = (id) => document.getElementById(id);

  const screens = {
    home: $('home-screen'),
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
    questionFontSize: 21
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
    document.body.classList.toggle('exam-mode', name === 'quiz');
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
    showToast.timeoutId = window.setTimeout(() => toast.classList.remove('show'), 2400);
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
        // Kuis tetap berjalan meskipun penyimpanan browser tidak tersedia.
      }
    }
    renderBestScore();
  }

  function renderBestScore() {
    const best = getBestScore();
    $('best-score-home').textContent = best ? 'REKOR: ' + best.score + '/100' : 'REKOR: —';
  }

  function setupHome() {
    $('quiz-title').textContent = config.title || 'Kuis Interaktif';
    $('active-quiz-title').textContent = config.title || 'Kuis Interaktif';
    $('quiz-description').textContent = config.description || 'Uji pemahamanmu melalui kuis interaktif.';
    $('total-questions').textContent = questionBank.length;
    const countSelect = $('question-count');
    [...countSelect.options].forEach((option) => {
      if (option.value !== 'all' && Number(option.value) > questionBank.length) option.disabled = true;
    });
    if (questionBank.length < 10 && questionBank.length >= 5) countSelect.value = '5';
    if (questionBank.length < 5) {
      countSelect.innerHTML = '<option value="all">Semua soal (' + questionBank.length + ')</option>';
    }
    updateTimeEstimate();
    renderBestScore();
  }

  function updateTimeEstimate() {
    const chosen = $('question-count').value;
    const count = chosen === 'all' ? questionBank.length : Math.min(Number(chosen), questionBank.length);
    const minutes = Math.ceil((count * (config.secondsPerQuestion || 60)) / 60);
    $('time-estimate').textContent = minutes + ' menit';
  }

  function startQuiz() {
    if (!questionBank.length) {
      showToast('Bank soal masih kosong. Tambahkan soal di js/questions.js.');
      return;
    }
    const requested = $('question-count').value;
    const amount = requested === 'all' ? questionBank.length : Math.min(Number(requested), questionBank.length);
    state.player = $('player-name').value.trim() || 'Peserta';
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
    state.questionFontSize = 21;
    state.startTime = Date.now();
    state.durationSeconds = amount * (config.secondsPerQuestion || 60);
    state.remainingSeconds = state.durationSeconds;
    $('player-label').textContent = state.player;
    $('side-total').textContent = amount;
    $('timer-box').classList.remove('warning');
    $('timer').textContent = formatTime(state.remainingSeconds);
    $('question-list-panel').classList.remove('mobile-open');
    $('question-list-panel').classList.remove('is-collapsed');
    $('instruction-modal').hidden = true;
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
      if (state.remainingSeconds <= 0) finishQuiz(true);
    }, 1000);
  }

  function renderQuestion() {
    const question = state.questions[state.currentIndex];
    const total = state.questions.length;
    const current = state.currentIndex + 1;
    const progress = Math.round((current / total) * 100);
    const selectedIndex = state.answers.get(question.id);

    $('progress-text').textContent = 'SOAL ' + current + ' DARI ' + total;
    $('progress-percent').textContent = progress + '%';
    $('progress-fill').style.width = progress + '%';
    $('question-number').textContent = 'Soal nomor ' + current;
    $('question-category').textContent = question.category || 'KUIS';
    $('question-text').textContent = question.question;
    $('question-text').style.fontSize = state.questionFontSize + 'px';

    const options = $('options-list');
    options.innerHTML = '';
    question.choices.forEach((choice, index) => {
      const label = document.createElement('label');
      label.className = 'exam-option' + (selectedIndex === index ? ' selected' : '');
      label.setAttribute('role', 'radio');
      label.setAttribute('aria-checked', selectedIndex === index ? 'true' : 'false');
      label.tabIndex = 0;
      const input = document.createElement('span');
      input.className = 'exam-radio' + (selectedIndex === index ? ' checked' : '');
      input.setAttribute('aria-hidden', 'true');
      const key = document.createElement('span');
      key.className = 'exam-option-key';
      key.textContent = String.fromCharCode(65 + index) + '.';
      const text = document.createElement('span');
      text.className = 'exam-option-text';
      text.textContent = choice.text;
      label.append(input, key, text);
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
    $('next-button').innerHTML = isLast ? 'Selesaikan Ujian <span aria-hidden="true">›</span>' : 'Soal berikutnya <span aria-hidden="true">›</span>';
    $('doubt-button').classList.toggle('active', state.doubtful.has(question.id));
    $('doubt-button').setAttribute('aria-pressed', state.doubtful.has(question.id) ? 'true' : 'false');
    $('doubt-button').innerHTML = '<span class="doubt-square" aria-hidden="true"></span> ' +
      (state.doubtful.has(question.id) ? 'Hapus tanda ragu' : 'Ragu-ragu');
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
    const unanswered = total - answered;
    const percent = total ? (answered / total) * 100 : 0;
    $('count-answered').textContent = answered;
    $('count-unanswered').textContent = unanswered;
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
      button.setAttribute('aria-label', 'Buka soal nomor ' + (index + 1) + (isAnswered ? ', sudah dijawab' : ', belum dijawab') + (isDoubtful ? ', ragu-ragu' : ''));
      button.setAttribute('aria-current', isCurrent ? 'step' : 'false');
      button.addEventListener('click', () => {
        state.currentIndex = index;
        renderQuestion();
        if (window.matchMedia('(max-width: 820px)').matches) {
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
    finishQuiz(false);
  }

  function goPrevious() {
    if (state.currentIndex > 0) {
      state.currentIndex -= 1;
      renderQuestion();
    }
  }

  function finishQuiz(timeExpired) {
    if (state.finished) return;
    const unanswered = state.questions.length - state.answers.size;
    if (!timeExpired) {
      const message = unanswered > 0
        ? 'Masih ada ' + unanswered + ' soal yang belum dijawab. Tetap akhiri ujian dan lihat hasil?'
        : 'Semua soal sudah dijawab. Akhiri ujian dan lihat hasil?';
      if (!window.confirm(message)) return;
    }
    state.finished = true;
    window.clearInterval(state.timerId);
    const elapsedSeconds = Math.min(state.durationSeconds, Math.max(0, Math.floor((Date.now() - state.startTime) / 1000)));
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
    $('correct-count').textContent = result.correct;
    $('wrong-count').textContent = wrong;
    $('time-used').textContent = formatTime(result.elapsedSeconds);
    $('result-heading').textContent = result.timeExpired ? 'Waktu habis!' : 'Ujian selesai!';
    $('result-subtitle').textContent = state.player + ', berikut hasil pengerjaan kuismu.';
    $('review-summary').textContent = result.correct + ' benar dari ' + total + ' soal';

    let rank = 'TERUS BERLATIH';
    let title = 'Perjalanan belajarmu berlanjut.';
    let message = 'Setiap latihan adalah kesempatan untuk menjadi lebih baik. Pelajari pembahasannya dan coba lagi.';
    if (result.score >= 90) {
      rank = 'LUAR BIASA'; title = 'Pemahaman yang hebat!';
      message = 'Hasil yang sangat baik. Pertahankan rasa ingin tahu dan terus tantang kemampuanmu.';
    } else if (result.score >= 75) {
      rank = 'KERJA BAGUS'; title = 'Kamu sudah berada di jalur yang tepat.';
      message = 'Sebagian besar materi sudah kamu kuasai. Pelajari beberapa bagian yang masih keliru.';
    } else if (result.score >= 60) {
      rank = 'CUKUP BAIK'; title = 'Sedikit lagi menuju hasil lebih baik.';
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
      summary.innerHTML = '<span class="review-index">' + String(index + 1).padStart(2, '0') + '</span><span class="review-question">' + escapeHTML(question.question) + '</span><span class="review-status ' + (isCorrect ? 'good' : 'bad') + '">' + (isCorrect ? '✓ BENAR' : '× PERLU DIPERBAIKI') + '</span>';
      const content = document.createElement('div');
      content.className = 'review-content';
      const answerLine = document.createElement('p');
      answerLine.className = 'review-answer';
      answerLine.innerHTML = '<strong>Jawabanmu:</strong> ' + (selectedChoice ? escapeHTML(selectedChoice.text) : '<em>Tidak dijawab</em>') + '<br><strong>Jawaban benar:</strong> ' + escapeHTML(correctChoice.text);
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

  function resetToHome() {
    window.clearInterval(state.timerId);
    state.finished = true;
    $('review-section').hidden = true;
    showScreen('home');
  }

  $('question-count').addEventListener('change', updateTimeEstimate);
  $('start-button').addEventListener('click', startQuiz);
  $('next-button').addEventListener('click', goNext);
  $('prev-button').addEventListener('click', goPrevious);
  $('doubt-button').addEventListener('click', toggleDoubt);
  $('finish-button').addEventListener('click', () => finishQuiz(false));
  $('retry-button').addEventListener('click', () => {
    $('review-section').hidden = true;
    startQuiz();
  });
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
  $('question-list-toggle').addEventListener('click', () => {
    const panel = $('question-list-panel');
    if (window.matchMedia('(max-width: 820px)').matches) {
      panel.classList.toggle('mobile-open');
    } else {
      panel.classList.toggle('is-collapsed');
    }
  });
  $('list-close-button').addEventListener('click', () => $('question-list-panel').classList.remove('mobile-open'));
  $('font-smaller').addEventListener('click', () => {
    state.questionFontSize = Math.max(17, state.questionFontSize - 2);
    $('question-text').style.fontSize = state.questionFontSize + 'px';
  });
  $('font-larger').addEventListener('click', () => {
    state.questionFontSize = Math.min(31, state.questionFontSize + 2);
    $('question-text').style.fontSize = state.questionFontSize + 'px';
  });
  $('font-reset').addEventListener('click', () => {
    state.questionFontSize = 21;
    $('question-text').style.fontSize = state.questionFontSize + 'px';
  });
  $('player-name').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') startQuiz();
  });
  document.addEventListener('keydown', (event) => {
    if (!document.body.classList.contains('exam-mode') || state.finished) return;
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