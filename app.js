// MASTER REGISTRY (Auto-detecting All Posts)
const subjectDataList = [hindiData, mathsData, reasoningData, gkData, gsData];
const fullMockRegistry = fullMockData;

// Global State
let currentSubKey = null;
let currentChapKey = null;
let currentTestKey = null;
let activeQuestions = [];
let currentQIdx = 0;
let qStatus = {};
let userAnswers = {};
let timerInterval = null;
let timeLeft = 0;

let timeSpentPerQ = {};
let qTimeInterval = null;

let userHistory = {};
let currentReviewDataset = [];
let isCurrentTestReattempt = false;
let currentActiveView = 'view-home';

function formatSeconds(secs) {
  let m = Math.floor(secs / 60);
  let s = secs % 60;
  return `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
}

// Drawer Controller
function toggleDrawer(open) {
  const overlay = document.getElementById("drawer-overlay");
  const panel = document.getElementById("drawer-panel");
  if (open) {
    overlay.classList.add("active");
    panel.classList.add("active");
  } else {
    overlay.classList.remove("active");
    panel.classList.remove("active");
  }
}

function drawerGoHome() {
  toggleDrawer(false);
  navigateTo("view-home");
}

// Navigation & Screen View Controller
function navigateTo(viewId, pushState = true) {
  if (pushState) {
    history.pushState({ page: viewId, sub: currentSubKey, chap: currentChapKey, test: currentTestKey }, "");
  }
  renderView(viewId);
}

function renderView(viewId) {
  currentActiveView = viewId;
  ["view-home", "view-chapters", "view-tests", "view-result"].forEach(id => {
    document.getElementById(id).classList.add("hidden");
  });
  document.getElementById("view-arena").classList.add("hidden");
  document.getElementById("main-header").classList.remove("hidden");
  document.getElementById("main-content-wrap").classList.remove("hidden");

  if (viewId === "view-arena") {
    document.getElementById("main-header").classList.add("hidden");
    document.getElementById("main-content-wrap").classList.add("hidden");
    document.getElementById("view-arena").classList.remove("hidden");
  } else {
    document.getElementById(viewId).classList.remove("hidden");
  }
}

// Mobile Hardware Back Button Handling
window.addEventListener("popstate", function (e) {
  if (currentActiveView === "view-arena") {
    const leave = confirm("Exam progress me hai! Agar aap back jayenge toh test cancel ho sakta hai. Kya aap sure hain?");
    if (!leave) {
      history.pushState({ page: "view-arena" }, "");
      return;
    }
    clearInterval(timerInterval);
    clearInterval(qTimeInterval);
  }

  if (!e.state || e.state.page === "view-home") {
    if (currentActiveView === "view-home") {
      document.getElementById("exit-modal").classList.remove("hidden");
      history.pushState({ page: "view-home" }, "");
      return;
    } else {
      renderView("view-home");
      return;
    }
  }

  currentSubKey = e.state.sub || currentSubKey;
  currentChapKey = e.state.chap || currentChapKey;
  currentTestKey = e.state.test || currentTestKey;
  renderView(e.state.page);
});

function closeExitModal() {
  document.getElementById("exit-modal").classList.add("hidden");
}

function confirmExitApp() {
  closeExitModal();
  window.history.go(-2);
  window.close();
}

// 1. RENDER HOME SCREEN: 2 DISTINCT SECTIONS
function renderHomeScreen() {
  // Section 1: Subject / Chapter Tests Grid
  const subContainer = document.getElementById("subject-grid");
  subContainer.innerHTML = "";
  subjectDataList.forEach(sub => {
    let totalChapters = sub.chapters ? sub.chapters.length : 0;
    subContainer.innerHTML += `
      <div class="card" onclick="openSubject('${sub.id}')">
        <h3>${sub.icon || '📘'} ${sub.title}</h3>
        <p>${totalChapters} Chapters Available</p>
      </div>
    `;
  });

  // Section 2: Full Mock Test Categories Grid
  const mockContainer = document.getElementById("full-mock-grid");
  mockContainer.innerHTML = "";
  fullMockRegistry.categories.forEach(cat => {
    let totalMocks = cat.tests ? cat.tests.length : 0;
    mockContainer.innerHTML += `
      <div class="card card-mock-accent" onclick="openMockCategory('${cat.id}')">
        <h3>🏆 ${cat.name}</h3>
        <p>${totalMocks} Full Mock Tests Available</p>
      </div>
    `;
  });
}

// 2. CHAPTER LEVEL VIEW
function openSubject(subId) {
  currentSubKey = subId;
  const sub = subjectDataList.find(s => s.id === subId);
  document.getElementById("bc-subject").innerText = sub.title;
  document.getElementById("chap-page-title").innerText = sub.title;

  const container = document.getElementById("chapter-grid");
  container.innerHTML = "";
  sub.chapters.forEach(chap => {
    container.innerHTML += `
      <div class="card" onclick="openChapter('${chap.id}')">
        <h3>📂 ${chap.name}</h3>
        <p>${chap.tests.length} Mock Tests Available</p>
      </div>
    `;
  });
  navigateTo("view-chapters");
}

// 3. TESTS LIST VIEW (FOR CHAPTERS)
function openChapter(chapId) {
  currentChapKey = chapId;
  const sub = subjectDataList.find(s => s.id === currentSubKey);
  const chap = sub.chapters.find(c => c.id === chapId);

  document.getElementById("bc-sub-link").innerText = sub.title;
  document.getElementById("bc-sub-link").onclick = () => openSubject(currentSubKey);
  document.getElementById("bc-chapter").innerText = chap.name;
  document.getElementById("tests-page-title").innerText = `${chap.name} - Tests`;

  renderTestListCards(chap.tests, false);
}

// 3B. TESTS LIST VIEW (FOR FULL MOCK TEST)
function openMockCategory(catId) {
  currentSubKey = "full_mock";
  currentChapKey = catId;
  const cat = fullMockRegistry.categories.find(c => c.id === catId);

  document.getElementById("bc-sub-link").innerText = "Full Mock Tests";
  document.getElementById("bc-sub-link").onclick = () => navigateTo('view-home');
  document.getElementById("bc-chapter").innerText = cat.name;
  document.getElementById("tests-page-title").innerText = `${cat.name} - Mock Tests`;

  renderTestListCards(cat.tests, true);
}

function renderTestListCards(testsArray, isFullMock) {
  const container = document.getElementById("tests-grid");
  container.innerHTML = "";
  testsArray.forEach(test => {
    const isAttempted = !!userHistory[test.id];
    container.innerHTML += `
      <div class="card" onclick="handleTestCardClick('${test.id}', ${isFullMock})">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <h3>📝 ${test.name}</h3>
          ${isAttempted ? `<span class="attempt-badge">Attempted ✅</span>` : ''}
        </div>
        <p>Questions: ${test.questions.length} | Time: ${test.timeMinutes} Min</p>
        <button class="btn-ssc ${isAttempted ? 'btn-clear' : 'btn-save-next'}" style="margin-top: 12px; width: 100%;">
          ${isAttempted ? 'View Options' : 'Start Exam'}
        </button>
      </div>
    `;
  });
  navigateTo("view-tests");
}

function backToTests() {
  if (currentSubKey === "full_mock") {
    openMockCategory(currentChapKey);
  } else {
    openChapter(currentChapKey);
  }
}

// Click Test Card -> Show Options or Start
let currentTestObj = null;
function handleTestCardClick(testId, isFullMock) {
  currentTestKey = testId;

  if (isFullMock) {
    const cat = fullMockRegistry.categories.find(c => c.id === currentChapKey);
    currentTestObj = cat.tests.find(t => t.id === testId);
  } else {
    const sub = subjectDataList.find(s => s.id === currentSubKey);
    const chap = sub.chapters.find(c => c.id === currentChapKey);
    currentTestObj = chap.tests.find(t => t.id === testId);
  }

  if (userHistory[testId]) {
    document.getElementById("action-modal").classList.remove("hidden");
  } else {
    confirmStartExam(false);
  }
}

function closeModal() {
  document.getElementById("action-modal").classList.add("hidden");
}

function viewSavedResult() {
  closeModal();
  showResultDashboard();
}

// 4. START EXAM ARENA
function confirmStartExam(isReattempt) {
  closeModal();
  isCurrentTestReattempt = isReattempt;
  activeQuestions = currentTestObj.questions;
  currentQIdx = 0;
  userAnswers = {};
  qStatus = {};
  timeSpentPerQ = {};

  activeQuestions.forEach((_, i) => {
    qStatus[i] = "not-visited";
    timeSpentPerQ[i] = 0;
  });
  qStatus[0] = "not-answered";

  document.getElementById("exam-title-text").innerText = `${currentTestObj.name} - Official Mock Portal`;
  timeLeft = (currentTestObj.timeMinutes || 5) * 60;

  navigateTo("view-arena");
  loadQuestion(0);
  startTimer();
  startQuestionTimer();
}

function loadQuestion(idx) {
  currentQIdx = idx;
  if (qStatus[idx] === "not-visited") qStatus[idx] = "not-answered";

  const q = activeQuestions[idx];
  document.getElementById("q-label").innerText = `Question No. ${idx + 1}`;
  document.getElementById("q-text").innerText = q.q;
  document.getElementById("q-time-spent").innerText = formatSeconds(timeSpentPerQ[currentQIdx]);

  const optsBox = document.getElementById("options-box");
  optsBox.innerHTML = "";
  q.options.forEach((opt, oIdx) => {
    const isChecked = userAnswers[idx] === oIdx ? "checked" : "";
    optsBox.innerHTML += `
      <label>
        <input type="radio" name="opt" value="${oIdx}" ${isChecked}>
        <span>${opt}</span>
      </label>
    `;
  });
  renderPalette();
}

function startQuestionTimer() {
  clearInterval(qTimeInterval);
  qTimeInterval = setInterval(() => {
    if (currentActiveView === 'view-arena') {
      timeSpentPerQ[currentQIdx] = (timeSpentPerQ[currentQIdx] || 0) + 1;
      const display = document.getElementById("q-time-spent");
      if (display) {
        display.innerText = formatSeconds(timeSpentPerQ[currentQIdx]);
      }
    }
  }, 1000);
}

function saveAndNext() {
  const selected = document.querySelector('input[name="opt"]:checked');
  if (selected) {
    userAnswers[currentQIdx] = parseInt(selected.value);
    qStatus[currentQIdx] = "answered";
  } else {
    if (qStatus[currentQIdx] !== "review") qStatus[currentQIdx] = "not-answered";
  }
  goToNext();
}

function markForReview() {
  const selected = document.querySelector('input[name="opt"]:checked');
  if (selected) userAnswers[currentQIdx] = parseInt(selected.value);
  qStatus[currentQIdx] = "review";
  goToNext();
}

function clearResponse() {
  const selected = document.querySelector('input[name="opt"]:checked');
  if (selected) selected.checked = false;
  delete userAnswers[currentQIdx];
  qStatus[currentQIdx] = "not-answered";
  renderPalette();
}

function prevQuestion() {
  if (currentQIdx > 0) loadQuestion(currentQIdx - 1);
}

function goToNext() {
  if (currentQIdx < activeQuestions.length - 1) {
    loadQuestion(currentQIdx + 1);
  } else {
    renderPalette();
    setTimeout(() => {
      submitTest("Yeh aakhiri sawal tha! Kya aap apna Test Submit karna chahte hain?");
    }, 150);
  }
}

function renderPalette() {
  const grid = document.getElementById("palette-grid");
  grid.innerHTML = "";
  activeQuestions.forEach((_, idx) => {
    let cls = "p-btn " + qStatus[idx];
    if (idx === currentQIdx) cls += " current";
    grid.innerHTML += `<div class="${cls}" onclick="loadQuestion(${idx})">${idx + 1}</div>`;
  });
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      clearInterval(qTimeInterval);
      submitTest("Time khatam ho gaya! Test automatically submit ho raha hai.");
      return;
    }
    timeLeft--;
    document.getElementById("timer-count").innerText = formatSeconds(timeLeft);
  }, 1000);
}

// 5. SUBMIT & HISTORY SCORE
function submitTest(customMessage) {
  const alertMsg = customMessage || "Kya aap sach me exam submit karna chahte hain?";
  if (!confirm(alertMsg)) return;

  clearInterval(timerInterval);
  clearInterval(qTimeInterval);

  let right = 0, wrong = 0, skip = 0;
  let details = [];

  activeQuestions.forEach((q, idx) => {
    const userAns = userAnswers[idx];
    let status = "skipped";

    if (userAns !== undefined) {
      if (userAns === q.ans) {
        right++; status = "right";
      } else {
        wrong++; status = "wrong";
      }
    } else {
      skip++;
    }

    details.push({
      q: q.q,
      options: q.options,
      correct: q.ans,
      userAns: userAns,
      status: status,
      exp: q.exp || "Is sawal ki vyakhya uplabdh nahi hai.",
      timeSpent: timeSpentPerQ[idx] || 0
    });
  });

  const marks = (right * 2) - (wrong * 0.5);
  const outcome = {
    total: activeQuestions.length,
    right, wrong, skip, marks,
    details: details
  };

  if (!userHistory[currentTestKey]) {
    userHistory[currentTestKey] = { first: outcome, hasReattempted: false };
  } else if (isCurrentTestReattempt) {
    userHistory[currentTestKey].latest = outcome;
    userHistory[currentTestKey].hasReattempted = true;
  }

  showResultDashboard();
}

// 6. RESULT DASHBOARD
function showResultDashboard() {
  navigateTo("view-result");
  const record = userHistory[currentTestKey];
  const reattemptBtn = document.getElementById("tab-attempt-latest");

  if (record && record.hasReattempted) {
    reattemptBtn.classList.remove("hidden");
    switchResultTab('latest');
  } else {
    reattemptBtn.classList.add("hidden");
    switchResultTab('first');
  }
}

function switchResultTab(type) {
  const btn1 = document.getElementById("tab-attempt-1");
  const btnLatest = document.getElementById("tab-attempt-latest");

  if (type === 'first') {
    btn1.className = "tab-btn tab-active";
    btnLatest.className = "tab-btn tab-inactive";
  } else {
    btnLatest.className = "tab-btn tab-active";
    btn1.className = "tab-btn tab-inactive";
  }

  const data = (type === 'first') ? userHistory[currentTestKey].first : userHistory[currentTestKey].latest;
  document.getElementById("stat-right").innerText = data.right;
  document.getElementById("stat-wrong").innerText = data.wrong;
  document.getElementById("stat-skip").innerText = data.skip;
  document.getElementById("graph-score").innerText = `${data.right}/${data.total}`;
  document.getElementById("total-marks-label").innerText = `${data.marks} pts`;

  let correctPct = (data.right / data.total) * 100;
  let wrongPct = (data.wrong / data.total) * 100;

  const pie = document.getElementById("result-pie");
  pie.style.setProperty("--correct-pct", `${correctPct}%`);
  pie.style.setProperty("--wrong-pct", `${wrongPct}%`);

  currentReviewDataset = data.details;
  filterQuestions('all');
}

function filterQuestions(filterType) {
  document.querySelectorAll(".pill-btn").forEach(btn => {
    btn.className = "pill-btn pill-inactive";
  });
  document.getElementById(`flt-${filterType}`).className = "pill-btn pill-active";

  const container = document.getElementById("review-container");
  container.innerHTML = "";

  let filtered = currentReviewDataset;
  if (filterType !== 'all') {
    filtered = currentReviewDataset.filter(item => item.status === filterType);
  }

  if (filtered.length === 0) {
    container.innerHTML = `<p style="color: #64748b; text-align: center; padding: 20px;">Koi question nahi hai is category me.</p>`;
    return;
  }

  filtered.forEach((item, i) => {
    let badgeColor = "#475569", badgeText = "Skipped", borderLeft = "#94a3b8";
    if (item.status === 'right') { badgeColor = "#16a34a"; badgeText = "Correct (+2)"; borderLeft = "#16a34a"; }
    if (item.status === 'wrong') { badgeColor = "#dc2626"; badgeText = "Incorrect (-0.5)"; borderLeft = "#dc2626"; }

    let optsHtml = "";
    item.options.forEach((opt, oIdx) => {
      let style = "background: #fff; border: 1px solid #e2e8f0;";
      let icon = "";

      if (oIdx === item.correct) {
        style = "background: #dcfce7; border: 1px solid #86efac; color: #166534; font-weight: bold;";
        icon = "✔️ (Correct Answer)";
      } else if (oIdx === item.userAns && item.status === 'wrong') {
        style = "background: #fee2e2; border: 1px solid #fca5a5; color: #991b1b; font-weight: bold;";
        icon = "✖️ (Your Answer)";
      }

      optsHtml += `<div class="review-opt" style="${style}">${oIdx + 1}. ${opt} ${icon}</div>`;
    });

    container.innerHTML += `
      <div class="review-item" style="border-left-color: ${borderLeft};">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <strong style="font-size: 15px; color: #0f172a;">${item.q}</strong>
          <div style="text-align: right;">
            <span style="font-size: 12px; font-weight: bold; color: ${badgeColor};">${badgeText}</span>
            <div style="font-size: 11px; color: #0284c7; font-weight: bold; margin-top: 3px;">⏱️ Time Taken: ${item.timeSpent}s</div>
          </div>
        </div>
        <div>${optsHtml}</div>
        <div class="explanation-box">
          <div class="explanation-title">📘 व्याख्या (Detailed Solution):</div>
          <div>${item.exp}</div>
        </div>
      </div>
    `;
  });
}

function downloadResultPDF() {
  window.print();
}

// INITIAL START
history.replaceState({ page: 'view-home' }, "");
renderHomeScreen();
