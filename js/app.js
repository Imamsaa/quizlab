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
    startTime: 0,
    durationSeconds: 0,
    remainingSeconds: 0,
    timerId: null,
    finished: false
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
    return `${minutes}:${seconds}`;
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
      const raw = localStorage.getItem(`quizlab-best-${config.id || 'default'}`);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  }

  function updateBestScore(score) {
    const current = getBestScore();
    if (!current || score > current.score) {
      try {
        localStorage.setItem(`quizlab-best-${config.id || 'default'}`, JSON.stringify({ score, player: state.player, date: new Date().toISOString() }));
      } catch (error) {
        // Kuis tetap berjalan meskipun penyimpanan browser tidak tersedia.
      }
    }
    renderBestScore();
  }

  function renderBestScore() {
    const best = getBestScore();
    $('best-score-home').textContent = best ? `REKOR: ${best.score}/100` : 'REKOR: —';
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
      countSelect.innerHTML = `<option value="all">Semua soal (${questionBank.length})</option>`;
    }
    updateTimeEstimate();
    renderBestScore();
  }

  function updateTimeEstimate() {
    const chosen = $('question-count').value;
    const count = chosen === 'all' ? questionBank.length : Math.min(Number(chosen), questionBank.length);
    const minutes = Math.ceil((count * (config.secondsPerQuestion || 60)) / 60);
    $('time-estimate').textContent = `${minutes} menit`;
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
    state.finished = false;
    state.startTime = Date.now();
    state.durationSeconds = amount * (config.secondsPerQuestion || 60);
    state.remainingSeconds = state.durationSeconds;
    $('player-label').textContent = `PESERTA: ${state.player.toUpperCase()}`;
    $('side-total').textContent = amount;
    $('timer-box').classList.remove('warning');
    $('timer').textContent = formatTime(state.remainingSeconds);
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
    $('progress-text').textContent = `SOAL ${current} DARI ${total}`;
    $('progress-percent').textContent = `${progress}%`;
    $('progress-fill').style.width = `${progress}%`;
    $('question-number').textContent = `PERTANYAAN ${String(current).padStart(2, '0')}`;
    $('question-category').textContent = question.category || 'KUIS';
    $('question-text').textContent = question.question;

    const selectedIndex = state.answers.get(question.id);
    const options = $('options-list');
    options.innerHTML = '';
    question.choices.forEach((choice, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `option-button${selectedIndex === index ? ' selected' : ''}`;
      button.setAttribute('aria-pressed', selectedIndex === index ? 'true' : 'false');
      button.innerHTML = `<span class="option-key">${String.fromCharCode(65 + index)}</span><span>${escapeHTML(choice.text)}</span>`;
      button.addEventListener('click', () => selectAnswer(question.id, index));
      options.appendChild(button);
    });

    $('prev-button').disabled = state.currentIndex === 0;
    const isLast = state.currentIndex === total - 1;
    $('next-button').innerHTML = isLast ? 'Selesaikan Kuis <span aria-hidden="true">✓</span>' : 'Selanjutnya <span aria-hidden="true">→</span>';
    $('next-button').disabled = selectedIndex === undefined;
    updateAnsweredProgress();
  }

  function selectAnswer(questionId, optionIndex) {
    state.answers.set(questionId, optionIndex);
    renderQuestion();
  }

  function updateAnsweredProgress() {
    const answered = state.answers.size;
    const total = state.questions.length;
    const percent = total ? (answered / total) * 100 : 0;
    $('answered-count').textContent = answered;
    $('mini-progress-fill').style.width = `${percent}%`;
  }

  function goNext() {
    if (state.answers.get(state.questions[state.currentIndex].id) === undefined) return;
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
    if (!timeExpired && unanswered > 0) {
      const shouldFinish = window.confirm(`Masih ada ${unanswered} soal yang belum dijawab. Tetap akhiri kuis?`);
      if (!shouldFinish) return;
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
    $('result-heading').textContent = result.timeExpired ? 'Waktu habis!' : 'Kuis selesai!';
    $('result-subtitle').textContent = `${state.player}, berikut hasil pengerjaan kuismu.`;
    $('review-summary').textContent = `${result.correct} benar dari ${total} soal`;

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
      summary.innerHTML = `<span class="review-index">${String(index + 1).padStart(2, '0')}</span><span class="review-question">${escapeHTML(question.question)}</span><span class="review-status ${isCorrect ? 'good' : 'bad'}">${isCorrect ? '✓ BENAR' : '× PERLU DIPERBAIKI'}</span>`;
      const content = document.createElement('div');
      content.className = 'review-content';
      const answerLine = document.createElement('p');
      answerLine.className = 'review-answer';
      answerLine.innerHTML = `<strong>Jawabanmu:</strong> ${selectedChoice ? escapeHTML(selectedChoice.text) : '<em>Tidak dijawab</em>'}<br><strong>Jawaban benar:</strong> ${escapeHTML(correctChoice.text)}`;
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
  $('exit-button').addEventListener('click', () => {
    if (window.confirm('Akhiri kuis sekarang? Progres jawabanmu akan dihitung sebagai hasil akhir.')) finishQuiz(false);
  });
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
  $('player-name').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') startQuiz();
  });

  setupHome();
})();
