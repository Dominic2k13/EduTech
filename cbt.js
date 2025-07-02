// cbt.js - Updated with 40 JAMB-style questions
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const examTimerEl = document.getElementById('exam-timer');
    const currentQuestionEl = document.getElementById('current-question');
    const totalQuestionsEl = document.getElementById('total-questions');
    const questionTextEl = document.getElementById('question-text');
    const optionsContainerEl = document.getElementById('options-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const flagBtn = document.getElementById('flag-btn');

    // Exam Data - 40 JAMB-style questions
    const examQuestions = [
        // Mathematics (Questions 1-10)
        {
            id: 1,
            subject: "Mathematics",
            text: "If the 2nd and 5th terms of a G.P are 6 and 48 respectively, find the sum of the first four terms.",
            options: {
                A: "28",
                B: "40",
                C: "48",
                D: "60"
            },
            correctAnswer: "B"
        },
        {
            id: 2,
            subject: "Mathematics",
            text: "Find the value of x for which 3(2x - 1) = 4(x + 2).",
            options: {
                A: "5.5",
                B: "4.5",
                C: "3.5",
                D: "2.5"
            },
            correctAnswer: "A"
        },
        {
            id: 3,
            subject: "Mathematics",
            text: "Simplify: √27 + √75 - √48",
            options: {
                A: "4√3",
                B: "5√3",
                C: "6√3",
                D: "7√3"
            },
            correctAnswer: "A"
        },
        {
            id: 4,
            subject: "Mathematics",
            text: "If y varies directly as x and y = 12 when x = 4, find y when x = 7.",
            options: {
                A: "18",
                B: "21",
                C: "24",
                D: "28"
            },
            correctAnswer: "B"
        },
        {
            id: 5,
            subject: "Mathematics",
            text: "Calculate the median of these numbers: 3, 5, 7, 9, 11, 13, 15",
            options: {
                A: "7",
                B: "9",
                C: "11",
                D: "13"
            },
            correctAnswer: "B"
        },
        {
            id: 6,
            subject: "Mathematics",
            text: "Solve for x: 2x² - 5x - 3 = 0",
            options: {
                A: "x = -0.5 or 3",
                B: "x = 0.5 or -3",
                C: "x = 1 or -1.5",
                D: "x = -1 or 1.5"
            },
            correctAnswer: "A"
        },
        {
            id: 7,
            subject: "Mathematics",
            text: "If tan θ = 3/4, find sin θ",
            options: {
                A: "3/5",
                B: "4/5",
                C: "5/3",
                D: "5/4"
            },
            correctAnswer: "A"
        },
        {
            id: 8,
            subject: "Mathematics",
            text: "Convert 45° to radians",
            options: {
                A: "π/2",
                B: "π/3",
                C: "π/4",
                D: "π/6"
            },
            correctAnswer: "C"
        },
        {
            id: 9,
            subject: "Mathematics",
            text: "Find the derivative of y = 3x² + 2x - 5",
            options: {
                A: "6x + 2",
                B: "3x + 2",
                C: "6x - 5",
                D: "3x² + 2"
            },
            correctAnswer: "A"
        },
        {
            id: 10,
            subject: "Mathematics",
            text: "What is the probability of getting an even number when a fair die is rolled?",
            options: {
                A: "1/6",
                B: "1/3",
                C: "1/2",
                D: "2/3"
            },
            correctAnswer: "C"
        },

        // English (Questions 11-20)
        {
            id: 11,
            subject: "English",
            text: "Choose the word nearest in meaning to 'BENEVOLENT'",
            options: {
                A: "Kind",
                B: "Wealthy",
                C: "Powerful",
                D: "Cruel"
            },
            correctAnswer: "A"
        },
        {
            id: 12,
            subject: "English",
            text: "Identify the odd word in terms of pronunciation:",
            options: {
                A: "Key",
                B: "Knee",
                C: "Knit",
                D: "Knew"
            },
            correctAnswer: "A"
        },
        {
            id: 13,
            subject: "English",
            text: "Choose the correct interpretation: 'She threw in the towel' means",
            options: {
                A: "She took a bath",
                B: "She gave up",
                C: "She was angry",
                D: "She was cleaning"
            },
            correctAnswer: "B"
        },
        {
            id: 14,
            subject: "English",
            text: "Select the correct stress pattern for 'EDUCATION'",
            options: {
                A: "E-du-CA-tion",
                B: "e-DU-ca-tion",
                C: "e-du-CA-tion",
                D: "E-du-ca-TION"
            },
            correctAnswer: "C"
        },
        {
            id: 15,
            subject: "English",
            text: "Choose the grammatically correct sentence:",
            options: {
                A: "Neither the teacher nor the students was present",
                B: "Neither the teacher nor the students were present",
                C: "Neither the teacher or the students was present",
                D: "Neither the teacher or the students were present"
            },
            correctAnswer: "B"
        },
        {
            id: 16,
            subject: "English",
            text: "Select the word that does not belong to the group:",
            options: {
                A: "Novel",
                B: "Poetry",
                C: "Drama",
                D: "Grammar"
            },
            correctAnswer: "D"
        },
        {
            id: 17,
            subject: "English",
            text: "Choose the appropriate word: The ___ of the new hospital will be next month.",
            options: {
                A: "Commission",
                B: "Commissioning",
                C: "Committed",
                D: "Commissioner"
            },
            correctAnswer: "B"
        },
        {
            id: 18,
            subject: "English",
            text: "Identify the sentence with the correct punctuation:",
            options: {
                A: "The man said, 'I am tired.'",
                B: "The man said 'I am tired.'",
                C: "The man said, I am tired.",
                D: "The man said 'I am tired'."
            },
            correctAnswer: "A"
        },
        {
            id: 19,
            subject: "English",
            text: "Choose the word opposite in meaning to 'MISERLY'",
            options: {
                A: "Generous",
                B: "Stingy",
                C: "Frugal",
                D: "Selfish"
            },
            correctAnswer: "A"
        },
        {
            id: 20,
            subject: "English",
            text: "Select the correct spelling:",
            options: {
                A: "Accomodate",
                B: "Acommodate",
                C: "Accommodate",
                D: "Acomodate"
            },
            correctAnswer: "C"
        },

        // Physics (Questions 21-30)
        {
            id: 21,
            subject: "Physics",
            text: "Which of the following is NOT a vector quantity?",
            options: {
                A: "Velocity",
                B: "Force",
                C: "Speed",
                D: "Acceleration"
            },
            correctAnswer: "C"
        },
        {
            id: 22,
            subject: "Physics",
            text: "The S.I unit of work is?",
            options: {
                A: "Joule",
                B: "Newton",
                C: "Watt",
                D: "Pascal"
            },
            correctAnswer: "A"
        },
        {
            id: 23,
            subject: "Physics",
            text: "A car accelerates uniformly from rest at 4 m/s². Its velocity after 5 seconds is?",
            options: {
                A: "5 m/s",
                B: "10 m/s",
                C: "20 m/s",
                D: "25 m/s"
            },
            correctAnswer: "C"
        },
        {
            id: 24,
            subject: "Physics",
            text: "Which of the following electromagnetic waves has the longest wavelength?",
            options: {
                A: "Gamma rays",
                B: "X-rays",
                C: "Radio waves",
                D: "Ultraviolet rays"
            },
            correctAnswer: "C"
        },
        {
            id: 25,
            subject: "Physics",
            text: "The principle of conservation of energy states that energy cannot be:",
            options: {
                A: "Created but can be destroyed",
                B: "Created nor destroyed",
                C: "Destroyed but can be created",
                D: "Transformed from one form to another"
            },
            correctAnswer: "B"
        },
        {
            id: 26,
            subject: "Physics",
            text: "A wave with frequency 50 Hz has a period of:",
            options: {
                A: "0.02 s",
                B: "0.05 s",
                C: "0.2 s",
                D: "0.5 s"
            },
            correctAnswer: "A"
        },
        {
            id: 27,
            subject: "Physics",
            text: "Which of the following materials is a good conductor of electricity?",
            options: {
                A: "Rubber",
                B: "Glass",
                C: "Copper",
                D: "Plastic"
            },
            correctAnswer: "C"
        },
        {
            id: 28,
            subject: "Physics",
            text: "The instrument used to measure atmospheric pressure is called:",
            options: {
                A: "Hydrometer",
                B: "Barometer",
                C: "Hygrometer",
                D: "Thermometer"
            },
            correctAnswer: "B"
        },
        {
            id: 29,
            subject: "Physics",
            text: "A body of mass 5 kg moving at 10 m/s collides with a stationary body of mass 10 kg. If they stick together after collision, their common velocity is:",
            options: {
                A: "3.33 m/s",
                B: "5.0 m/s",
                C: "7.5 m/s",
                D: "10.0 m/s"
            },
            correctAnswer: "A"
        },
        {
            id: 30,
            subject: "Physics",
            text: "The refractive index of water is 1.33. What is the critical angle for water-air interface?",
            options: {
                A: "30°",
                B: "41°",
                C: "49°",
                D: "60°"
            },
            correctAnswer: "C"
        },

        // Chemistry (Questions 31-40)
        {
            id: 31,
            subject: "Chemistry",
            text: "Which of the following elements is a halogen?",
            options: {
                A: "Sodium",
                B: "Chlorine",
                C: "Calcium",
                D: "Aluminum"
            },
            correctAnswer: "B"
        },
        {
            id: 32,
            subject: "Chemistry",
            text: "The process by which solid changes directly to vapor is called:",
            options: {
                A: "Evaporation",
                B: "Sublimation",
                C: "Condensation",
                D: "Freezing"
            },
            correctAnswer: "B"
        },
        {
            id: 33,
            subject: "Chemistry",
            text: "What is the pH of a neutral solution at 25°C?",
            options: {
                A: "0",
                B: "7",
                C: "10",
                D: "14"
            },
            correctAnswer: "B"
        },
        {
            id: 34,
            subject: "Chemistry",
            text: "Which of the following gases is monoatomic?",
            options: {
                A: "Oxygen",
                B: "Nitrogen",
                C: "Helium",
                D: "Chlorine"
            },
            correctAnswer: "C"
        },
        {
            id: 35,
            subject: "Chemistry",
            text: "The chemical formula for sodium hydroxide is:",
            options: {
                A: "NaCl",
                B: "NaOH",
                C: "NaHCO₃",
                D: "Na₂CO₃"
            },
            correctAnswer: "B"
        },
        {
            id: 36,
            subject: "Chemistry",
            text: "In the periodic table, elements are arranged in order of:",
            options: {
                A: "Atomic mass",
                B: "Atomic number",
                C: "Density",
                D: "Melting point"
            },
            correctAnswer: "B"
        },
        {
            id: 37,
            subject: "Chemistry",
            text: "Which of the following is a property of acids?",
            options: {
                A: "Turn litmus paper blue",
                B: "Taste bitter",
                C: "Feel slippery",
                D: "React with metals to produce hydrogen gas"
            },
            correctAnswer: "D"
        },
        {
            id: 38,
            subject: "Chemistry",
            text: "The number of electrons in the outermost shell of a neutral oxygen atom is:",
            options: {
                A: "2",
                B: "4",
                C: "6",
                D: "8"
            },
            correctAnswer: "C"
        },
        {
            id: 39,
            subject: "Chemistry",
            text: "Which of the following is NOT an organic compound?",
            options: {
                A: "Methane",
                B: "Ethanol",
                C: "Sodium chloride",
                D: "Glucose"
            },
            correctAnswer: "C"
        },
        {
            id: 40,
            subject: "Chemistry",
            text: "The process that occurs at the anode during electrolysis is:",
            options: {
                A: "Reduction",
                B: "Oxidation",
                C: "Neutralization",
                D: "Distillation"
            },
            correctAnswer: "B"
        }
    ];

    // Exam State
    let currentQuestionIndex = 0;
    let userAnswers = {};
    let flaggedQuestions = [];
    let examDuration = 7200; // 2 hours in seconds
    let timerInterval;

    // Initialize Exam
    function initExam() {
        // Set total questions
        totalQuestionsEl.textContent = examQuestions.length;
        
        // Start timer
        startTimer();
        
        // Load first question
        loadQuestion(currentQuestionIndex);
    }

    // Start Timer
    function startTimer() {
        clearInterval(timerInterval);
        
        timerInterval = setInterval(() => {
            examDuration--;
            
            if (examDuration <= 0) {
                clearInterval(timerInterval);
                submitExam();
                return;
            }
            
            const hours = Math.floor(examDuration / 3600);
            const minutes = Math.floor((examDuration % 3600) / 60);
            const seconds = examDuration % 60;
            
            examTimerEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    // Load Question
    function loadQuestion(index) {
        if (index < 0 || index >= examQuestions.length) return;
        
        currentQuestionIndex = index;
        const question = examQuestions[index];
        
        // Update current question display
        currentQuestionEl.textContent = question.id;
        questionTextEl.textContent = question.text;
        
        // Clear previous options
        optionsContainerEl.innerHTML = '';
        
        // Create new options
        for (const [key, value] of Object.entries(question.options)) {
            const option = document.createElement('div');
            option.className = `option${userAnswers[question.id] === key ? ' selected' : ''}`;
            option.dataset.option = key;
            option.innerHTML = `
                <span class="option-letter">${key}</span>
                <span class="option-text">${value}</span>
            `;
            
            // Add click event
            option.addEventListener('click', () => {
                selectOption(question.id, key);
            });
            
            optionsContainerEl.appendChild(option);
        }
        
        // Update flag button
        flagBtn.classList.toggle('flagged', flaggedQuestions.includes(question.id));
        
        // Update navigation buttons
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === examQuestions.length - 1;
    }

    // Select Option
    function selectOption(questionId, option) {
        userAnswers[questionId] = option;
        loadQuestion(currentQuestionIndex); // Refresh to show selection
    }

    // Flag Question
    function toggleFlagQuestion() {
        const questionId = examQuestions[currentQuestionIndex].id;
        
        if (flaggedQuestions.includes(questionId)) {
            flaggedQuestions = flaggedQuestions.filter(id => id !== questionId);
            flagBtn.classList.remove('flagged');
        } else {
            flaggedQuestions.push(questionId);
            flagBtn.classList.add('flagged');
        }
    }

    // Submit Exam
    function submitExam() {
        clearInterval(timerInterval);
        
        // Calculate score
        let score = 0;
        examQuestions.forEach(question => {
            if (userAnswers[question.id] === question.correctAnswer) {
                score++;
            }
        });
        
        // Show results (in a real app, you would send to server)
        alert(`Exam submitted!\nYour score: ${score}/${examQuestions.length}`);
        
        // In a real app, you would redirect or show detailed results
    }

    // Event Listeners
    prevBtn.addEventListener('click', () => loadQuestion(currentQuestionIndex - 1));
    nextBtn.addEventListener('click', () => loadQuestion(currentQuestionIndex + 1));
    flagBtn.addEventListener('click', toggleFlagQuestion);

    // Start the exam
    initExam();
});