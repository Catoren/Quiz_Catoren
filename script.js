// Quiz Pilihan Ganda - 50+ Soal (for loop & if-else)
const quizData = [
    // MATEMATIKA (15 soal)
    {id: 1, category: 'Matematika', question: '2 + 2 × 3 = ?', options: ['12', '8', '10', '6'], correct: 1},
    {id: 2, category: 'Matematika', question: '25% dari 200 = ?', options: ['25', '50', '75', '100'], correct: 1},
    {id: 3, category: 'Matematika', question: 'Luas persegi panjang 5×8 = ?', options: ['40', '26', '32', '45'], correct: 0},
    {id: 4, category: 'Matematika', question: '1/2 + 1/4 = ?', options: ['1/6', '3/4', '1/2', '3/8'], correct: 1},
    {id: 5, category: 'Matematika', question: '√16 = ?', options: ['2', '4', '8', '16'], correct: 1},
    {id: 6, category: 'Matematika', question: '10! dibagi 9! = ?', options: ['9', '10', '1', '90'], correct: 1},
    {id: 7, category: 'Matematika', question: 'sin 90° = ?', options: ['0', '1', '0.5', '√2/2'], correct: 1},
    {id: 8, category: 'Matematika', question: 'Mean dari 2,4,6,8 = ?', options: ['4', '5', '6', '20'], correct: 1},
    {id: 9, category: 'Matematika', question: 'Log₂8 = ?', options: ['2', '3', '4', '8'], correct: 1},
    {id: 10, category: 'Matematika', question: 'Volume kubus sisi 3 = ?', options: ['9', '18', '27', '36'], correct: 2},
    {id: 11, category: 'Matematika', question: 'x² - 5x + 6 = 0, akar = ?', options: ['1,6', '2,3', '3,2', '-2,-3'], correct: 1},
    {id: 12, category: 'Matematika', question: 'Median 1,3,3,6,7,8,9 = ?', options: ['3', '6', '7', '5'], correct: 1},
    {id: 13, category: 'Matematika', question: 'cos 60° = ?', options: ['1', '0', '0.5', '√3/2'], correct: 2},
    {id: 14, category: 'Matematika', question: '1000 ÷ 25 = ?', options: ['25', '40', '50', '30'], correct: 1},
    {id: 15, category: 'Matematika', question: 'π ≈ ?', options: ['2.14', '3.14', '4.14', '1.14'], correct: 1},

    // BAHASA INGGRIS (10 soal)
    {id: 16, category: 'Bahasa Inggris', question: '"The cat is ___ the table." ?', options: ['in', 'on', 'at', 'to'], correct: 1},
    {id: 17, category: 'Bahasa Inggris', question: 'Past tense of "go" ?', options: ['go', 'goes', 'went', 'gone'], correct: 2},
    {id: 18, category: 'Bahasa Inggris', question: 'Plural of "child" ?', options: ['childs', 'childes', 'children', 'child'], correct: 2},
    {id: 19, category: 'Bahasa Inggris', question: '"She ___ TV now." ?', options: ['watch', 'watches', 'is watching', 'watched'], correct: 2},
    {id: 20, category: 'Bahasa Inggris', question: 'Synonym "happy" ?', options: ['sad', 'angry', 'joyful', 'tired'], correct: 2},
    {id: 21, category: 'Bahasa Inggris', question: 'Antonym "hot" ?', options: ['warm', 'cold', 'boiling', 'heat'], correct: 1},
    {id: 22, category: 'Bahasa Inggris', question: '"I ___ a student." ?', options: ['am', 'is', 'are', 'be'], correct: 0},
    {id: 23, category: 'Bahasa Inggris', question: 'Future tense "eat" ?', options: ['ate', 'eating', 'will eat', 'eats'], correct: 2},
    {id: 24, category: 'Bahasa Inggris', question: 'Choose correct: "___ book is mine." ?', options: ['A', 'An', 'The', 'No article'], correct: 2},
    {id: 25, category: 'Bahasa Inggris', question: 'Passive voice: "She writes a letter." ?', options: ['A letter is written by her.', 'She is writing a letter.', 'A letter was written.', 'She wrote a letter.'], correct: 0},

    // NEGARA (10 soal)
    {id: 26, category: 'Negara', question: 'Ibu kota Indonesia ?', options: ['Bandung', 'Surabaya', 'Jakarta', 'Medan'], correct: 2},
    {id: 27, category: 'Negara', question: 'Ibu kota Jepang ?', options: ['Osaka', 'Tokyo', 'Kyoto', 'Hiroshima'], correct: 1},
    {id: 28, category: 'Negara', question: 'Negara terluas di dunia ?', options: ['China', 'USA', 'Russia', 'Canada'], correct: 2},
    {id: 29, category: 'Negara', question: 'Ibu kota Prancis ?', options: ['London', 'Paris', 'Berlin', 'Madrid'], correct: 1},
    {id: 30, category: 'Negara', question: 'Bahasa resmi Brasil ?', options: ['Spanish', 'Portuguese', 'English', 'French'], correct: 1},
    {id: 31, category: 'Negara', question: 'Negara kepulauan terbesar ?', options: ['Filiphina', 'Indonesia', 'Jepang', 'Australia'], correct: 1},
    {id: 32, category: 'Negara', question: 'Ibu kota Mesir ?', options: ['Alexandria', 'Cairo', 'Giza', 'Luxor'], correct: 1},
    {id: 33, category: 'Negara', question: 'Mata uang Inggris ?', options: ['Dollar', 'Euro', 'Pound', 'Yen'], correct: 2},
    {id: 34, category: 'Negara', question: 'Negara dengan populasi terbesar ?', options: ['India', 'USA', 'China', 'Indonesia'], correct: 2},
    {id: 35, category: 'Negara', question: 'Ibu kota Australia ?', options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'], correct: 2},

    // CODING (10 soal)
{id: 36, category: 'Logika', question: 'Semua kucing adalah hewan. Mimi adalah kucing. Mimi adalah?', options: ['Burung', 'Hewan', 'Ikan', 'Tumbuhan'], correct: 1},
    {id: 37, category: 'Logika', question: 'Jika hujan maka basah. Tidak basah. Maka?', options: ['Tidak hujan', 'Hujan deras', 'Ban jalan licin', 'Matahari terbit'], correct: 0},
    {id: 38, category: 'Logika', question: 'Semua dokter pintar. Budi pintar. Budi?', options: ['Dokter', 'Guru', 'Insinyur', 'Tidak pasti dokter'], correct: 3},
    {id: 39, category: 'Logika', question: 'Ayah anak Ani adalah bapak Ani. Ani saudara laki-laki Budi?', options: ['Ya', 'Tidak', 'Ayah Budi = Ayah Ani', 'Ayah Ani = Bapak Budi'], correct: 2},
    {id: 40, category: 'Logika', question: 'Semua X adalah Y. Beberapa Y adalah Z. Maka?', options: ['Semua X Z', 'Beberapa X Z', 'Tidak ada hubungan', 'Semua Z X'], correct: 2},
    {id: 41, category: 'Logika', question: 'P = Q maka ~P =?', options: ['~Q', 'Q', 'P', 'Tidak pasti'], correct: 0},
    {id: 42, category: 'Logika', question: 'A → B, B → C maka?', options: ['A → C', 'C → A', 'B → A', 'Tidak ada'], correct: 0},
    {id: 43, category: 'Logika', question: 'Mari kita ke dokter jika sakit. Sakit?', options: ['Ke dokter', 'Tidak ke dokter', 'Tidak sakit', 'Kondisional'], correct: 0},
    {id: 44, category: 'Logika', question: 'Semua kuda punya 4 kaki. Zebra?', options: ['4 kaki', '2 kaki', '6 kaki', 'Tidak semua kuda'], correct: 0},
    {id: 45, category: 'Logika', question: 'Jika A benar dan B salah maka A atau B?', options: ['Benar', 'Salah', 'Kondisional', 'Kontradiksi'], correct: 0},

    // HEWAN (5 soal)
    {id: 46, category: 'Hewan', question: 'Hewan tercepat di darat ?', options: ['Singa', 'Cheetah', 'Kuda', 'Anjing'], correct: 1},
    {id: 47, category: 'Hewan', question: 'Hewan terbesar ?', options: ['Gajah', 'Paus biru', 'Jerapah', 'Hiu'], correct: 1},
    {id: 48, category: 'Hewan', question: 'Burung tak bisa terbang ?', options: ['Elang', 'Burung kolibri', 'Kasuari', 'Merpati'], correct: 2},
    {id: 49, category: 'Hewan', question: 'Mamalia bertelur ?', options: ['Kucing', 'Platipus', 'Anjing', 'Sapi'], correct: 1},
    {id: 50, category: 'Hewan', question: 'Hewan nokturnal ?', options: ['Burung', 'Kelelawar', 'Ikan', 'Semute'], correct: 1}
];

// Quiz State
let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill(-1); // -1 = belum dijawab
let attempts = new Array(quizData.length).fill(0); // 0=first, 1=retry
let totalPenaltyPoints = 0; // -2 per first wrong
let totalTimeSec = 0; // total elapsed seconds for score
let startTimes = [];
let quizStartTime = 0;
let isQuizSubmitted = false;

// Init
// Init - welcome screen ready, no auto-start
document.addEventListener('DOMContentLoaded', function() {
    // Welcome screen stays active
});

function startQuiz() {
    // Loading transition
    document.getElementById('welcomeScreen').classList.remove('active');
    document.getElementById('loadingScreen').classList.add('active');
    
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.remove('active');
        document.getElementById('quizScreen').classList.add('active');
        
        // Reset quiz
        currentQuestionIndex = 0;
        userAnswers.fill(-1);
        attempts.fill(0);
        totalPenaltyPoints = 0;
        totalTimeSec = 0;
        startTimes = [];
        isQuizSubmitted = false;
        quizStartTime = Date.now();
        
        showQuestion();
        updateProgress();
    }, 1200);
}

function showQuestion() {
    const qData = quizData[currentQuestionIndex];
    document.getElementById('questionNumber').textContent = qData.id;
    document.getElementById('categoryBadge').textContent = qData.category;
    document.getElementById('questionText').textContent = qData.question;
    
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    
    // FOR LOOP options (silent)
    for (let i = 0; i < qData.options.length; i++) {
        const option = document.createElement('div');
        option.className = 'option';
        option.innerHTML = `
            <input type="radio" name="answer" id="opt${i}" value="${i}">
            <label for="opt${i}">${String.fromCharCode(65+i)}. ${qData.options[i]}</label>
        `;
        
        option.addEventListener('click', () => selectOption(i));
        container.appendChild(option);
    }
    
    // Apply previous feedback and highlight
    const currentAttempts = attempts[currentQuestionIndex];
    if (userAnswers[currentQuestionIndex] !== -1) {
        const selectedOpt = document.querySelector(`input[value="${userAnswers[currentQuestionIndex]}"]`).parentElement;
        selectedOpt.classList.add('selected');
        if (currentAttempts === 1) {
            // Show correct/wrong for retry attempt
            const qData = quizData[currentQuestionIndex];
            if (userAnswers[currentQuestionIndex] === qData.correct) {
                selectedOpt.classList.add('correct');
            } else {
                selectedOpt.classList.add('wrong');
            }
        }
    }
    
    updateNavButtons();
    startQuestionTimer();
    updateTimerDisplay();
}

function selectOption(optionIndex) {
    const qData = quizData[currentQuestionIndex];
    const currentAttempts = attempts[currentQuestionIndex];
    
    if (currentAttempts === 0) {
        // First attempt
        userAnswers[currentQuestionIndex] = optionIndex;
        attempts[currentQuestionIndex] = 1;
        
        if (optionIndex === qData.correct) {
            // Correct - green, auto next on ANY attempt
            event.currentTarget.classList.add('correct');
            updateProgress();
            updateNavButtons();
            if (currentQuestionIndex < quizData.length - 1) {
                setTimeout(() => {
                    currentQuestionIndex++;
                    showQuestion();
                }, 800);
            }
            return;
        } else {
            // Wrong on first try - red, penalty -2, enable retry
            totalPenaltyPoints += 2;
            event.currentTarget.classList.add('wrong');
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            event.currentTarget.classList.add('selected');
            updateProgress();
            updateNavButtons();
            // Change next button to "Coba Lagi"
            document.getElementById('nextBtn').innerHTML = 'Coba Lagi <i class="fas fa-redo"></i>';
            return;
        }
    } else {
        // Second attempt - final check
        userAnswers[currentQuestionIndex] = optionIndex;
        if (optionIndex === qData.correct) {
            // Correct on retry - green, auto next, but penalty already deducted
            event.currentTarget.classList.add('correct');
            updateProgress();
            updateNavButtons();
            if (currentQuestionIndex < quizData.length - 1) {
                setTimeout(() => {
                    currentQuestionIndex++;
                    showQuestion();
                }, 800);
            }
            return;
        } else {
            event.currentTarget.classList.add('wrong');
        }
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        event.currentTarget.classList.add('selected');
        updateProgress();
        updateNavButtons();
        return;
    }
}

function nextQuestion() {
    // Reset button text for retry
    document.getElementById('nextBtn').innerHTML = 'Selanjutnya <i class="fas fa-arrow-right"></i>';
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    submitBtn.style.display = 'none';
    
    // Reset button text if coming back to question
    const currentAttempts = attempts[currentQuestionIndex];
    if (currentAttempts === 0 || currentAttempts === 1 && userAnswers[currentQuestionIndex] === -1) {
        nextBtn.innerHTML = 'Selanjutnya <i class="fas fa-arrow-right"></i>';
    }
    
    const answeredCount = userAnswers.filter(ans => ans !== -1).length;
    if (currentQuestionIndex === quizData.length - 1 && answeredCount === quizData.length) {
        submitBtn.style.display = 'flex';
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'flex';
    }
}

function updateProgress() {
    const answered = userAnswers.filter(ans => ans !== -1).length;
    const progress = (answered / quizData.length) * 100;
    
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = quizData.length;
}

function submitQuiz() {
    isQuizSubmitted = true;
    showResults();
}

function showResults() {
    totalTimeSec = Math.floor((Date.now() - quizStartTime) / 1000);
    let correctCount = 0;
    
    // FOR LOOP count correct
    for (let i = 0; i < quizData.length; i++) {
        const userAns = userAnswers[i];
        if (userAns === quizData[i].correct && userAns !== -1) {
            correctCount++;
        }
    }
    
    // New score formula: (correct x 20) - total_seconds - total_penalties
    let score = (correctCount * 20) - totalTimeSec - totalPenaltyPoints;
    
    const percent = Math.round((correctCount / quizData.length) * 100);
    const avgTime = totalTimeSec / quizData.length;
    
    document.getElementById('finalScore').textContent = score;
    document.getElementById('scoreFill').style.width = (correctCount / quizData.length * 100) + '%';  
    
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('wrongCount').textContent = quizData.length - correctCount;
    document.getElementById('percentScore').textContent = percent;
    document.getElementById('avgTime').textContent = avgTime.toFixed(1);
    
    // Update score label to show formula
    document.querySelector('.score-label').textContent = `Skor: (${correctCount}x20) - ${totalTimeSec}s - ${totalPenaltyPoints}pts`;
    
    setGrade(percent);
    document.getElementById('quizScreen').classList.remove('active');
    document.getElementById('resultsScreen').classList.add('active');
}

function setGrade(percent) {
    const emoji = document.getElementById('gradeEmoji');
    const text = document.getElementById('gradeText');
    
    // IF-ELSE grading (silent)
    if (percent >= 90) {
        emoji.textContent = '🥇';
        text.textContent = 'Sangat Istimewa!';
    } else if (percent >= 80) {
        emoji.textContent = '🥈';
        text.textContent = 'Hebat!';
    } else if (percent >= 70) {
        emoji.textContent = '🥉';
        text.textContent = 'Baik Sekali';
    } else if (percent >= 60) {
        emoji.textContent = '👍';
        text.textContent = 'Baik';
    } else {
        emoji.textContent = '📚';
        text.textContent = 'Belajar Lagi!';
    }
}

function startQuestionTimer() {
    if (!startTimes[currentQuestionIndex]) {
        startTimes[currentQuestionIndex] = Date.now();
    }
}

function updateTimerDisplay() {
    const elapsed = Math.floor((Date.now() - quizStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('timerText').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

setInterval(updateTimerDisplay, 100);

function reviewAnswers() {
    document.getElementById('resultsScreen').classList.remove('active');
    document.getElementById('reviewScreen').classList.add('active');
    showReviewQuestion(0);
}

function showReviewQuestion(index) {
    const qData = quizData[index];
    const userAns = userAnswers[index];
    const isCorrect = userAns === qData.correct;
    
    document.getElementById('reviewProgress').textContent = `${index + 1}/${quizData.length}`;
    document.getElementById('reviewContent').innerHTML = `
        <div class="review-question">
            <div class="question-header">
                <span class="question-number">${qData.id}</span>
                <span class="category-badge">${qData.category}</span>
            </div>
            <h3>${qData.question}</h3>
            <div class="review-options">
                ${qData.options.map((opt, i) => {
                    const classes = ['review-option'];
                    if (i === qData.correct) classes.push('correct');
                    if (userAns === i && i !== qData.correct) classes.push('wrong');
                    return `<div class="${classes.join(' ')}">
                        ${String.fromCharCode(65+i)}. ${opt}
                    </div>`;
                }).join('')}
            </div>
            <div class="review-result ${isCorrect ? 'correct' : 'wrong'}">
                <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                ${isCorrect ? '✅ Jawaban benar!' : '❌ Jawaban salah. Benar: ' + String.fromCharCode(65 + qData.correct)}
            </div>
        </div>
    `;
}

function nextReview() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        showReviewQuestion(currentQuestionIndex);
    }
}

function previousReview() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showReviewQuestion(currentQuestionIndex);
    }
}
