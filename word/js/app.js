(() => {
  'use strict';

  const config = window.QUIZ_CONFIG || {};
  const questionBank = Array.isArray(window.QUIZ_QUESTIONS) ? window.QUIZ_QUESTIONS : [];
  const SESSION_STORAGE_KEY = 'quizlab-active-session-' + (config.id || 'default');
  const VIOLATION_PENALTY_SECONDS = 5 * 60;
  const TAB_SWITCH_MIN_DURATION_MS = 700;
  let awaySince = null;
  let lastSecurityViolation = { type: '', at: 0 };
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
    endTime: 0,
    durationSeconds: 0,
    remainingSeconds: 0,
    timerId: null,
    finished: false,
    violationCount: 0,
    pendingWarningType: '',
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

  function persistSession() {
    if (state.finished || !state.questions.length || !state.endTime) return;

    const snapshot = {
      version: 1,
      player: state.player,
      questions: state.questions,
      currentIndex: state.currentIndex,
      answers: Array.from(state.answers.entries()),
      doubtful: Array.from(state.doubtful),
      startTime: state.startTime,
      endTime: state.endTime,
      durationSeconds: state.durationSeconds,
      questionFontSize: state.questionFontSize,
      violationCount: state.violationCount,
      pendingWarningType: state.pendingWarningType,
      savedAt: Date.now()
    };

    try {
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(snapshot));
    } catch (error) {
      console.warn('QuizLab: sesi tidak dapat disimpan ke localStorage.', error);
    }
  }

  function clearSessionDraft() {
    try {
      localStorage.removeItem(SESSION_STORAGE_KEY);
    } catch (error) {
      console.warn('QuizLab: sesi tersimpan tidak dapat dihapus.', error);
    }
  }

  function readSessionDraft() {
    try {
      const raw = localStorage.getItem(SESSION_STORAGE_KEY);
      if (!raw) return null;

      const snapshot = JSON.parse(raw);
      const validQuestions = Array.isArray(snapshot.questions) &&
        snapshot.questions.length === (config.questionsPerSession || 30) &&
        snapshot.questions.every((question) =>
          question &&
          typeof question.id === 'string' &&
          typeof question.question === 'string' &&
          Array.isArray(question.choices) &&
          question.choices.length === 4 &&
          question.choices.every((choice) =>
            choice && typeof choice.text === 'string' && typeof choice.correct === 'boolean'
          ) &&
          question.choices.filter((choice) => choice.correct).length === 1
        );

      if (
        snapshot.version !== 1 ||
        typeof snapshot.player !== 'string' ||
        !snapshot.player.trim() ||
        !validQuestions ||
        !Number.isInteger(snapshot.currentIndex) ||
        snapshot.currentIndex < 0 ||
        snapshot.currentIndex >= snapshot.questions.length ||
        !Array.isArray(snapshot.answers) ||
        !Array.isArray(snapshot.doubtful) ||
        !Number.isFinite(snapshot.startTime) ||
        !Number.isFinite(snapshot.endTime) ||
        !Number.isFinite(snapshot.durationSeconds)
      ) {
        clearSessionDraft();
        return null;
      }

      const questionIds = new Set(snapshot.questions.map((question) => question.id));
      const answers = snapshot.answers.filter(([questionId, optionIndex]) =>
        questionIds.has(questionId) &&
        Number.isInteger(optionIndex) &&
        optionIndex >= 0 &&
        optionIndex < 4
      );
      const doubtful = snapshot.doubtful.filter((questionId) => questionIds.has(questionId));

      return {
        ...snapshot,
        answers,
        doubtful: [...new Set(doubtful)]
      };
    } catch (error) {
      clearSessionDraft();
      return null;
    }
  }

  function restoreActiveSession() {
    const snapshot = readSessionDraft();
    if (!snapshot) return false;

    state.player = snapshot.player;
    state.questions = snapshot.questions;
    state.currentIndex = snapshot.currentIndex;
    state.answers = new Map(snapshot.answers);
    state.doubtful = new Set(snapshot.doubtful);
    state.startTime = snapshot.startTime;
    state.endTime = snapshot.endTime;
    state.durationSeconds = snapshot.durationSeconds;
    state.remainingSeconds = Math.max(0, Math.ceil((state.endTime - Date.now()) / 1000));
    state.violationCount = Number.isInteger(snapshot.violationCount) && snapshot.violationCount >= 0
      ? snapshot.violationCount
      : 0;
    state.pendingWarningType = ['copy', 'cut', 'paste', 'tab'].includes(snapshot.pendingWarningType)
      ? snapshot.pendingWarningType
      : '';
    state.questionFontSize = Number.isFinite(snapshot.questionFontSize)
      ? Math.min(30, Math.max(16, snapshot.questionFontSize))
      : 19;
    state.finished = false;

    $('player-name').value = state.player;
    $('player-label').textContent = state.player;
    $('question-list-panel').classList.remove('mobile-open', 'is-collapsed');
    $('exam-layout').style.gridTemplateColumns = '';
    $('instruction-modal').hidden = true;
    $('finish-modal').hidden = true;
    $('review-section').hidden = true;
    $('timer-box').classList.toggle('warning', state.remainingSeconds <= 60);
    $('timer').textContent = formatTime(state.remainingSeconds);

    showScreen('quiz');
    renderQuestion();

    if (state.remainingSeconds <= 0 && !state.pendingWarningType) {
      submitQuiz(true);
    } else {
      if (state.pendingWarningType) {
        showSecurityWarning(state.pendingWarningType);
      }
      startTimer();
      if (!state.pendingWarningType) {
        showToast('Sesi sebelumnya berhasil dipulihkan. Lanjutkan dari soal terakhir.');
      }
    }

    return true;
  }

  function isQuizActive() {
    return !state.finished && state.questions.length > 0 && !screens.quiz.hidden;
  }

  function showSecurityWarning(type) {
    const messages = {
      copy: 'Percobaan menyalin teks terdeteksi. Menyalin materi atau soal selama ujian tidak diperbolehkan.',
      cut: 'Percobaan memotong teks terdeteksi. Tindakan ini tidak diperbolehkan selama ujian.',
      paste: 'Percobaan menempelkan teks terdeteksi. Menempelkan jawaban atau teks dari luar tidak diperbolehkan.',
      tab: 'Kamu terdeteksi berpindah tab, membuka jendela lain, atau meninggalkan jendela ujian.'
    };
    $('security-warning-message').textContent = messages[type] || 'Aktivitas yang tidak diizinkan terdeteksi selama ujian.';
    $('security-warning-count').textContent = 'Jumlah pelanggaran: ' + state.violationCount;
    $('security-warning-penalty').textContent = 'Sisa waktu dikurangi 05:00.';
    $('security-warning-modal').hidden = false;
    $('security-warning-ack').focus();
  }

  function registerSecurityViolation(type) {
    if (!isQuizActive()) return;

    const now = Date.now();
    if (lastSecurityViolation.type === type && now - lastSecurityViolation.at < 300) return;
    lastSecurityViolation = { type, at: now };

    state.violationCount += 1;
    state.pendingWarningType = type;
    state.endTime -= VIOLATION_PENALTY_SECONDS * 1000;
    state.remainingSeconds = Math.max(0, Math.ceil((state.endTime - now) / 1000));
    $('timer').textContent = formatTime(state.remainingSeconds);
    $('timer-box').classList.toggle('warning', state.remainingSeconds <= 60);
    persistSession();
    showSecurityWarning(type);
  }

  function acknowledgeSecurityWarning() {
    $('security-warning-modal').hidden = true;
    state.pendingWarningType = '';
    persistSession();
    if (state.remainingSeconds <= 0 && isQuizActive()) submitQuiz(true);
  }

  function beginAwayPeriod() {
    if (!isQuizActive() || awaySince !== null) return;
    awaySince = Date.now();
    persistSession();
  }

  function endAwayPeriod() {
    if (awaySince === null || document.visibilityState === 'hidden') return;
    const awayDuration = Date.now() - awaySince;
    awaySince = null;
    if (awayDuration >= TAB_SWITCH_MIN_DURATION_MS) registerSecurityViolation('tab');
  }

  function handleClipboardAttempt(event) {
    if (!isQuizActive()) return;
    event.preventDefault();
    registerSecurityViolation(event.type);
  }

  function canFinishManually() {
    return state.questions.length > 0 &&
      state.answers.size === state.questions.length &&
      state.doubtful.size === 0;
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
    $('total-questions').textContent = questionBank.length;
    $('start-button').disabled = Boolean(getQuestionSelectionIssue());
    updateTimeEstimate();
    renderBestScore();
  }

  function getSelectedQuestionCount() {
    return config.questionsPerSession || 30;
  }

  function getQuestionSelectionIssue() {
    const amount = getSelectedQuestionCount();
    const plan = config.selectionPlan;

    if (!Array.isArray(plan) || !plan.length) {
      return questionBank.length < amount
        ? 'Bank soal belum mencukupi. Dibutuhkan ' + amount + ' soal.'
        : '';
    }

    const plannedTotal = plan.reduce((total, rule) => {
      const values = rule && rule.difficulties ? Object.values(rule.difficulties) : [];
      return total + values.reduce((sum, value) => sum + (Number.isInteger(value) && value > 0 ? value : 0), 0);
    }, 0);

    if (plannedTotal !== amount) {
      return 'Konfigurasi komposisi soal tidak sesuai dengan jumlah soal per sesi.';
    }

    for (const rule of plan) {
      if (!rule || typeof rule.topicId !== 'string' || !rule.difficulties) {
        return 'Konfigurasi bank soal tidak lengkap. Periksa selectionPlan.';
      }

      for (const [difficulty, required] of Object.entries(rule.difficulties)) {
        if (!Number.isInteger(required) || required < 0) {
          return 'Jumlah soal pada selectionPlan harus berupa bilangan bulat positif.';
        }
        const available = questionBank.filter((question) =>
          question.topicId === rule.topicId && question.difficulty === difficulty
        ).length;

        if (available < required) {
          return 'Bank soal topik ' + rule.topicId + ' untuk tingkat ' + difficulty +
            ' belum mencukupi. Tersedia ' + available + ', dibutuhkan ' + required + '.';
        }
      }
    }

    return '';
  }

  function selectQuestionsForSession() {
    const plan = config.selectionPlan;
    if (!Array.isArray(plan) || !plan.length) {
      const pool = config.shuffleQuestions === false ? [...questionBank] : shuffle(questionBank);
      return pool.slice(0, getSelectedQuestionCount());
    }

    const selected = [];
    plan.forEach((rule) => {
      Object.entries(rule.difficulties).forEach(([difficulty, required]) => {
        const pool = questionBank.filter((question) =>
          question.topicId === rule.topicId && question.difficulty === difficulty
        );
        const randomizedPool = config.shuffleQuestions === false ? pool : shuffle(pool);
        selected.push(...randomizedPool.slice(0, required));
      });
    });

    return config.shuffleQuestions === false ? selected : shuffle(selected);
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
    const selectionIssue = getQuestionSelectionIssue();
    if (selectionIssue) {
      showToast(selectionIssue);
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
    const selectionIssue = getQuestionSelectionIssue();
    if (selectionIssue) {
      showToast(selectionIssue);
      return;
    }
    state.player = $('player-name').value.trim();
    const selected = selectQuestionsForSession();

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
    state.violationCount = 0;
    state.pendingWarningType = '';
    state.questionFontSize = 19;
    state.startTime = Date.now();
    state.durationSeconds = (config.sessionDurationMinutes || 45) * 60;
    state.endTime = state.startTime + state.durationSeconds * 1000;
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

    const updateClock = () => {
      if (state.finished) return;
      state.remainingSeconds = Math.max(0, Math.ceil((state.endTime - Date.now()) / 1000));
      $('timer').textContent = formatTime(state.remainingSeconds);
      $('timer-box').classList.toggle('warning', state.remainingSeconds <= 60);

      if (state.remainingSeconds <= 0 && $('security-warning-modal').hidden) {
        submitQuiz(true);
      }
    };

    updateClock();
    if (!state.finished) {
      state.timerId = window.setInterval(updateClock, 1000);
    }
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
    persistSession();
  }

  function selectAnswer(questionId, optionIndex) {
    state.answers.set(questionId, optionIndex);
    renderQuestion();
  }

  function updateExamSummary() {
    const total = state.questions.length;
    const answered = state.answers.size;
    const unanswered = total - answered;
    const doubtful = state.doubtful.size;
    const canFinish = unanswered === 0 && doubtful === 0;

    $('count-answered').textContent = answered;
    $('count-unanswered').textContent = unanswered;
    $('count-doubt').textContent = doubtful;
    $('finish-button').disabled = !canFinish;
    $('finish-button').setAttribute('aria-disabled', canFinish ? 'false' : 'true');
    $('finish-requirement').hidden = canFinish;

    if (unanswered > 0 && doubtful > 0) {
      $('finish-requirement').textContent =
        'Jawab ' + unanswered + ' soal yang kosong dan hapus ' + doubtful + ' tanda ragu-ragu.';
    } else if (unanswered > 0) {
      $('finish-requirement').textContent = 'Masih ada ' + unanswered + ' soal yang belum dijawab.';
    } else if (doubtful > 0) {
      $('finish-requirement').textContent = 'Hapus tanda ragu-ragu pada ' + doubtful + ' soal sebelum selesai.';
    }
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

    const unanswered = state.questions.filter((question) => !state.answers.has(question.id));
    const doubtful = state.questions.filter((question) => state.doubtful.has(question.id));

    if (unanswered.length > 0 || doubtful.length > 0) {
      const firstIncomplete = unanswered[0] || doubtful[0];
      state.currentIndex = state.questions.findIndex((question) => question.id === firstIncomplete.id);
      renderQuestion();

      if (window.matchMedia('(max-width: 1023px)').matches) {
        $('question-list-panel').classList.remove('mobile-open');
      }

      const messages = [];
      if (unanswered.length) messages.push(unanswered.length + ' soal belum dijawab');
      if (doubtful.length) messages.push(doubtful.length + ' soal masih ragu-ragu');
      showToast('Belum bisa selesai tes: ' + messages.join(' dan ') + '.');
      return;
    }

    $('finish-confirm-message').textContent =
      'Semua soal sudah dijawab dan tidak ada tanda ragu-ragu. Akhiri tes dan lihat hasil pengerjaanmu?';
    $('finish-modal').hidden = false;
    $('finish-cancel-button').focus();
  }

  function sendResultToGoogleSheets(name, score) {
    const endpoint = String(config.googleAppsScriptUrl || '').trim();
    const status = $('sheet-sync-status');

    if (!endpoint) {
      status.hidden = true;
      return;
    }

    if (!/^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec(?:\?.*)?$/.test(endpoint)) {
      status.hidden = false;
      status.textContent = 'URL Google Apps Script belum valid. Hasil hanya tersimpan di perangkat ini.';
      return;
    }

    status.hidden = false;
    status.textContent = 'Mengirim nama, waktu submit, dan nilai akhir ke Google Sheets…';

    const frameName = 'quizlab-sheet-submit-' + Date.now();
    const frame = document.createElement('iframe');
    frame.name = frameName;
    frame.title = 'Pengiriman hasil QuizLab';
    frame.style.display = 'none';

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = endpoint;
    form.target = frameName;
    form.style.display = 'none';

    const fields = { name, score: String(score) };
    Object.entries(fields).forEach(([fieldName, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = fieldName;
      input.value = String(value);
      form.appendChild(input);
    });

    document.body.append(frame, form);

    try {
      form.submit();
      status.textContent = 'Permintaan rekap sudah dikirim. Periksa Google Sheets untuk memastikan hasil tercatat.';
    } catch (error) {
      status.textContent = 'Pengiriman hasil gagal dimulai. Nilai tetap tersedia pada layar ini.';
      console.error('QuizLab: gagal mengirim hasil ke Google Sheets.', error);
    } finally {
      form.remove();
      window.setTimeout(() => frame.remove(), 120000);
    }
  }

  function submitQuiz(timeExpired) {
    if (state.finished) return;
    if (!timeExpired && !canFinishManually()) {
      $('finish-modal').hidden = true;
      requestFinish();
      return;
    }

    state.finished = true;
    window.clearInterval(state.timerId);
    $('finish-modal').hidden = true;
    clearSessionDraft();

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
    sendResultToGoogleSheets(state.player, score);
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
    persistSession();
  });
  $('font-larger').addEventListener('click', () => {
    state.questionFontSize = Math.min(30, state.questionFontSize + 2);
    $('question-text').style.fontSize = state.questionFontSize + 'px';
    persistSession();
  });
  $('font-reset').addEventListener('click', () => {
    state.questionFontSize = 19;
    $('question-text').style.fontSize = state.questionFontSize + 'px';
    persistSession();
  });

  $('player-name').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') prepareSummary();
  });

  document.addEventListener('keydown', (event) => {
    if ($('instruction-modal').hidden === false && event.key === 'Escape') closeInfo();
    if ($('finish-modal').hidden === false && event.key === 'Escape') $('finish-modal').hidden = true;

    if ($('quiz-screen').hidden || state.finished) return;

    const key = event.key.toLowerCase();
    if ((event.ctrlKey || event.metaKey) && ['c', 'x', 'v'].includes(key)) {
      event.preventDefault();
      const violationType = key === 'c' ? 'copy' : key === 'x' ? 'cut' : 'paste';
      registerSecurityViolation(violationType);
      return;
    }

    if (event.altKey || event.ctrlKey || event.metaKey) return;

    const active = document.activeElement;
    if (active && ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(active.tagName)) return;
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

  ['copy', 'cut', 'paste'].forEach((eventName) => {
    document.addEventListener(eventName, handleClipboardAttempt, true);
  });

  document.addEventListener('contextmenu', (event) => {
    if (isQuizActive()) event.preventDefault();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      beginAwayPeriod();
      persistSession();
    } else {
      endAwayPeriod();
    }
  });

  window.addEventListener('blur', beginAwayPeriod);
  window.addEventListener('focus', endAwayPeriod);
  window.addEventListener('pagehide', persistSession);
  $('security-warning-ack').addEventListener('click', acknowledgeSecurityWarning);

  const DEADLINE_TIMESTAMP = new Date('2026-11-03T13:00:00+07:00').getTime();

  function updateDeadlineCountdown() {
    const remainingMs = DEADLINE_TIMESTAMP - Date.now();
    const totalSeconds = Math.max(0, Math.floor(remainingMs / 1000));
    const values = {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60
    };

    Object.entries(values).forEach(([unit, value]) => {
      const element = $('deadline-' + unit);
      if (element) element.textContent = String(value).padStart(2, '0');
    });

    if (remainingMs <= 0) {
      const container = $('deadline-countdown');
      const status = $('deadline-status');
      if (container) container.classList.add('expired');
      if (status) status.textContent = 'Batas akhir pengerjaan telah lewat.';
      return false;
    }

    return true;
  }

  function startDeadlineCountdown() {
    if (!$('deadline-countdown')) return;
    if (!updateDeadlineCountdown()) return;

    const intervalId = window.setInterval(() => {
      if (!updateDeadlineCountdown()) window.clearInterval(intervalId);
    }, 1000);
  }

  startDeadlineCountdown();
  setupHome();
  restoreActiveSession();
})();