const scienceQuestions = [
    {
        question: "Which cell organelle is responsible for producing most ATP during aerobic respiration?",
        options: [
            "Golgi apparatus",
            "Mitochondrion",
            "Lysosome",
            "Ribosome"
        ],
        answer: 1
    },
    {
        question: "What happens to the frequency of a wave when it enters a different medium?",
        options: [
            "It increases",
            "It decreases",
            "It remains the same",
            "It becomes zero"
        ],
        answer: 2
    },
    {
        question: "Which of these materials has the highest electrical resistance for equal dimensions and temperature?",
        options: [
            "Copper",
            "Silver",
            "Aluminium",
            "Nichrome"
        ],
        answer: 3
    },
    {
        question: "Which gas is released when zinc reacts with dilute hydrochloric acid?",
        options: [
            "Oxygen",
            "Hydrogen",
            "Nitrogen",
            "Carbon dioxide"
        ],
        answer: 1
    },
    {
        question: "What is the main role of decomposers in an ecosystem?",
        options: [
            "Producing sunlight",
            "Fixing all atmospheric nitrogen",
            "Recycling nutrients from dead organisms",
            "Consuming only living plants"
        ],
        answer: 2
    },
    {
        question: "Which part of the brain helps coordinate balance and voluntary movement?",
        options: [
            "Cerebellum",
            "Medulla oblongata",
            "Hypothalamus",
            "Cerebrum"
        ],
        answer: 0
    },
    {
        question: "Why does a metal spoon feel colder than a wooden spoon at the same room temperature?",
        options: [
            "Metal has a lower temperature",
            "Wood generates heat",
            "Metal conducts heat away from your hand faster",
            "Metal contains no thermal energy"
        ],
        answer: 2
    },
    {
        question: "In a genetic cross Tt × Tt, what is the probability of an offspring having genotype tt?",
        options: [
            "0%",
            "25%",
            "50%",
            "75%"
        ],
        answer: 1
    },
    {
        question: "What is the process by which plants lose water vapour mainly through their leaves?",
        options: [
            "Translocation",
            "Respiration",
            "Transpiration",
            "Photosynthesis"
        ],
        answer: 2
    },
    {
        question: "If a solution's pH changes from 3 to 5, how does its hydrogen ion concentration change?",
        options: [
            "It becomes 100 times greater",
            "It becomes 10 times greater",
            "It becomes 100 times smaller",
            "It remains unchanged"
        ],
        answer: 2
    }
];


const mathematicsQuestions = [
    {
        question: "If x² - 7x + 12 = 0, what are its roots?",
        options: ["2 and 6", "3 and 4", "1 and 12", "2 and 5"],
        answer: 1
    },
    {
        question: "What is the probability of getting a sum of 7 when two fair dice are rolled?",
        options: ["1/12", "1/6", "1/4", "1/3"],
        answer: 1
    },
    {
        question: "What is the derivative of x³ + 2x² - 5x?",
        options: ["3x² + 4x - 5", "3x² + 2x - 5", "x² + 4x - 5", "3x + 4x²"],
        answer: 0
    },
    {
        question: "What is the sum of the interior angles of a hexagon?",
        options: ["540°", "600°", "720°", "900°"],
        answer: 2
    },
    {
        question: "If 25% of a number is 80, what is the number?",
        options: ["200", "240", "300", "320"],
        answer: 3
    },
    {
        question: "What is the value of log₁₀(1000)?",
        options: ["2", "3", "10", "100"],
        answer: 1
    },
    {
        question: "An arithmetic sequence starts at 5 with a common difference of 3. What is its 10th term?",
        options: ["27", "30", "32", "35"],
        answer: 2
    },
    {
        question: "What is the distance between points (1, 2) and (4, 6)?",
        options: ["4", "5", "6", "7"],
        answer: 1
    },
    {
        question: "A circle has a radius of 7 cm. What is its area?",
        options: ["14π cm²", "28π cm²", "49π cm²", "98π cm²"],
        answer: 2
    },
    {
        question: "Solve: 2x + 5 = 3x - 7.",
        options: ["-12", "2", "7", "12"],
        answer: 3
    }
];

const geographyQuestions = [
    {
        question: "Which imaginary line divides Earth into the Northern and Southern Hemispheres?",
        options: ["Prime Meridian", "Equator", "Tropic of Cancer", "Arctic Circle"],
        answer: 1
    },
    {
        question: "Which is the largest hot desert in the world?",
        options: ["Gobi Desert", "Sahara Desert", "Arabian Desert", "Kalahari Desert"],
        answer: 1
    },
    {
        question: "Which river flows through Cairo?",
        options: ["Amazon", "Danube", "Nile", "Yangtze"],
        answer: 2
    },
    {
        question: "Which layer of Earth lies directly beneath the crust?",
        options: ["Inner core", "Outer core", "Mantle", "Atmosphere"],
        answer: 2
    },
    {
        question: "Which ocean contains the Mariana Trench?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {
        question: "What mainly causes seasons on Earth?",
        options: [
            "Changes in Earth's distance from the Sun",
            "Earth's axial tilt as it orbits the Sun",
            "Changes in the Moon's orbit",
            "Ocean currents alone"
        ],
        answer: 1
    },
    {
        question: "Which Indian state has the longest coastline?",
        options: ["Tamil Nadu", "Andhra Pradesh", "Gujarat", "Maharashtra"],
        answer: 2
    },
    {
        question: "What is the boundary between two tectonic plates moving apart called?",
        options: ["Convergent boundary", "Transform boundary", "Divergent boundary", "Collision zone"],
        answer: 2
    },
    {
        question: "Which mountain range is traditionally considered part of the boundary between Europe and Asia?",
        options: ["Andes", "Ural Mountains", "Alps", "Rocky Mountains"],
        answer: 1
    },
    {
        question: "Which instrument measures atmospheric pressure?",
        options: ["Hygrometer", "Anemometer", "Barometer", "Seismometer"],
        answer: 2
    }
];

const historyQuestions = [
    {
        question: "In which year was the Battle of Plassey fought?",
        options: ["1757", "1764", "1857", "1773"],
        answer: 0
    },
    {
        question: "Who founded the Maurya Empire?",
        options: ["Ashoka", "Bindusara", "Chandragupta Maurya", "Harsha"],
        answer: 2
    },
    {
        question: "Which Mughal emperor commissioned the Taj Mahal?",
        options: ["Akbar", "Babur", "Aurangzeb", "Shah Jahan"],
        answer: 3
    },
    {
        question: "The French Revolution began in which year?",
        options: ["1776", "1789", "1815", "1848"],
        answer: 1
    },
    {
        question: "Who was the first emperor of Rome?",
        options: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
        answer: 1
    },
    {
        question: "Which movement was launched by Mahatma Gandhi in 1942?",
        options: ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Khilafat Movement"],
        answer: 2
    },
    {
        question: "Which ancient civilization developed cuneiform writing?",
        options: ["Egyptian", "Sumerian", "Roman", "Minoan"],
        answer: 1
    },
    {
        question: "Who was the first woman ruler of the Delhi Sultanate?",
        options: ["Nur Jahan", "Raziyya Sultan", "Rani Durgavati", "Chand Bibi"],
        answer: 1
    },
    {
        question: "The Magna Carta was signed in England in which year?",
        options: ["1066", "1215", "1492", "1649"],
        answer: 1
    },
    {
        question: "Who led the Salt March in 1930?",
        options: ["Subhas Chandra Bose", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel"],
        answer: 2
    }
];

const computerQuestions = [
    {
        question: "Which data structure follows the LIFO principle?",
        options: ["Queue", "Stack", "Linked list", "Tree"],
        answer: 1
    },
    {
        question: "What is the time complexity of binary search on a sorted array?",
        options: ["O(n)", "O(n²)", "O(log n)", "O(1) in every case"],
        answer: 2
    },
    {
        question: "Which protocol securely encrypts web traffic?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
        answer: 2
    },
    {
        question: "Which component executes instructions in a computer?",
        options: ["RAM", "CPU", "SSD", "Monitor"],
        answer: 1
    },
    {
        question: "Which SQL command retrieves data from a table?",
        options: ["UPDATE", "INSERT", "SELECT", "DELETE"],
        answer: 2
    },
    {
        question: "What does DNS primarily do?",
        options: [
            "Encrypts files",
            "Translates domain names into IP addresses",
            "Increases processor speed",
            "Stores website passwords"
        ],
        answer: 1
    },
    {
        question: "Which of these is volatile memory?",
        options: ["SSD", "ROM", "RAM", "DVD"],
        answer: 2
    },
    {
        question: "Which number system uses only 0 and 1?",
        options: ["Decimal", "Octal", "Hexadecimal", "Binary"],
        answer: 3
    },
    {
        question: "In object-oriented programming, which concept allows a class to acquire properties and methods from another class?",
        options: ["Encapsulation", "Inheritance", "Abstraction", "Compilation"],
        answer: 1
    },
    {
        question: "What is the main purpose of an operating system?",
        options: [
            "Only to browse the internet",
            "To manage hardware and software resources",
            "Only to create documents",
            "To replace the CPU"
        ],
        answer: 1
    }
];

const sportsQuestions = [
    {
        question: "How many players from one team are on the field in a standard football (soccer) match?",
        options: ["9", "10", "11", "12"],
        answer: 2
    },
    {
        question: "How many points is a successful shot worth from beyond the arc in basketball?",
        options: ["1", "2", "3", "4"],
        answer: 2
    },
    {
        question: "Which country won the first men's Cricket World Cup in 1975?",
        options: ["India", "Australia", "West Indies", "England"],
        answer: 2
    },
    {
        question: "In tennis, what does a score of 40–40 mean?",
        options: ["Match point", "Deuce", "Break point", "Tie-break"],
        answer: 1
    },
    {
        question: "How many rings appear on the Olympic flag?",
        options: ["Four", "Five", "Six", "Seven"],
        answer: 1
    },
    {
        question: "Which sport uses the terms 'birdie' and 'eagle'?",
        options: ["Cricket", "Golf", "Badminton", "Baseball"],
        answer: 1
    },
    {
        question: "How many legal deliveries are in a standard over in cricket?",
        options: ["4", "5", "6", "8"],
        answer: 2
    },
    {
        question: "Which chess piece moves in an L-shaped pattern?",
        options: ["Bishop", "Rook", "Knight", "Queen"],
        answer: 2
    },
    {
        question: "What is the standard marathon distance, approximately?",
        options: ["21.1 km", "40 km", "42.195 km", "50 km"],
        answer: 2
    },
    {
        question: "In badminton, what is the object hit across the net called?",
        options: ["Puck", "Shuttlecock", "Balloon", "Pellet"],
        answer: 1
    }
];

const reasoningQuestions = [
    {
        question: "Find the next number: 2, 6, 12, 20, 30, ?",
        options: ["36", "40", "42", "44"],
        answer: 2
    },
    {
        question: "If CAT is coded as DBU by shifting each letter one place forward, how is DOG coded?",
        options: ["EPH", "EOG", "FPH", "DPI"],
        answer: 0
    },
    {
        question: "Choose the odd one out.",
        options: ["Triangle", "Square", "Circle", "Cube"],
        answer: 3
    },
    {
        question: "All roses are flowers. Some flowers fade quickly. Which conclusion must be true?",
        options: [
            "All roses fade quickly",
            "Some roses fade quickly",
            "All roses are flowers",
            "No flowers are roses"
        ],
        answer: 2
    },
    {
        question: "A person faces north, turns right, then right again. Which direction are they facing?",
        options: ["North", "South", "East", "West"],
        answer: 1
    },
    {
        question: "Find the next letter: A, C, F, J, O, ?",
        options: ["S", "T", "U", "V"],
        answer: 2
    },
    {
        question: "If 5 machines make 5 items in 5 minutes, how long would 10 identical machines take to make 10 items?",
        options: ["2.5 minutes", "5 minutes", "10 minutes", "20 minutes"],
        answer: 1
    },
    {
        question: "Ravi is taller than Aman. Aman is taller than Karan. Who is the shortest?",
        options: ["Ravi", "Aman", "Karan", "Cannot be determined"],
        answer: 2
    },
    {
        question: "Find the missing number: 3, 9, 27, 81, ?",
        options: ["162", "189", "243", "324"],
        answer: 2
    },
    {
        question: "If yesterday was Monday, what day will it be the day after tomorrow?",
        options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        answer: 2
    }
];

const englishQuestions = [
    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "She have completed her work.",
            "She has completed her work.",
            "She having completed her work.",
            "She were completed her work."
        ],
        answer: 1
    },
    {
        question: "Choose the closest synonym of 'meticulous'.",
        options: ["Careless", "Thorough", "Impatient", "Ordinary"],
        answer: 1
    },
    {
        question: "Choose the antonym of 'scarce'.",
        options: ["Rare", "Limited", "Abundant", "Insufficient"],
        answer: 2
    },
    {
        question: "Identify the correct passive voice: 'The chef prepared the meal.'",
        options: [
            "The meal prepared the chef.",
            "The meal was prepared by the chef.",
            "The meal is preparing by the chef.",
            "The chef was prepared by the meal."
        ],
        answer: 1
    },
    {
        question: "Fill in the blank: Neither of the answers ___ correct.",
        options: ["are", "were", "is", "have been"],
        answer: 2
    },
    {
        question: "Which sentence uses the apostrophe correctly?",
        options: [
            "The dogs bone was missing.",
            "The dog's bone was missing.",
            "The dogs' bone was missing. (one dog)",
            "The dog's' bone was missing."
        ],
        answer: 1
    },
    {
        question: "What is the meaning of the idiom 'break the ice'?",
        options: [
            "To destroy something",
            "To start a friendly conversation in an awkward situation",
            "To end a friendship",
            "To reveal a secret accidentally"
        ],
        answer: 1
    },
    {
        question: "Choose the correctly spelled word.",
        options: ["Accomodation", "Acommodation", "Accommodation", "Accommadation"],
        answer: 2
    },
    {
        question: "Identify the adjective in: 'The brilliant student solved the puzzle.'",
        options: ["Student", "Solved", "Puzzle", "Brilliant"],
        answer: 3
    },
    {
        question: "Complete the sentence: If I ___ about the meeting, I would have attended it.",
        options: ["know", "knew", "had known", "have known"],
        answer: 2
    }
];


const homeScreen = document.querySelector(".main_section");
const quizScreen = document.querySelector(".quiz_section");


const scienceBtn = document.querySelector(".science_btn");
const mathematicsBtn = document.querySelector(".mathematics_btn");
const geographyBtn = document.querySelector(".geography_btn");
const historyBtn = document.querySelector(".history_btn");
const computerBtn = document.querySelector(".computer_btn");
const sportsBtn = document.querySelector(".sports_btn");
const reasoningBtn = document.querySelector(".reasoning_btn");
const englishBtn = document.querySelector(".englist_btn");


const subjectName = document.querySelector(".sub_name");
const totalQuestion = document.querySelector(".total_question");


const progressFill = document.querySelector(".progress_fill");


const questionNo = document.querySelector(".question_no");
const questionText = document.querySelector(".question_text");


const optionsContainer = document.querySelector("#optionsContainer");
const optionButtons = document.querySelectorAll(".option_btn");


const nextBtn = document.querySelector("#nextBtn");

const subjectButton = document.querySelectorAll(".subjects button");

subjectButton.forEach(function (button) {
    button.addEventListener("click", function () {
        startQuiz(button);
    });
});
const quizData = {
    Science: scienceQuestions,
    Mathematics: mathematicsQuestions,
    Geography: geographyQuestions,
    History: historyQuestions,
    Computer: computerQuestions,
    Sports: sportsQuestions,
    Reasoning: reasoningQuestions,
    English: englishQuestions
};

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

subjectButton.forEach(function (button) {
    button.addEventListener("click", function () {
        startQuiz(button);
    });
});

function startQuiz(button) {
    const sub = button.textContent.trim();
    const questions = quizData[sub];

    if (!questions) {
        console.log("No questions found for:", sub);
        return;
    }

    currentQuestion = 0;
    score = 0;

    homeScreen.hidden = true;
    quizScreen.hidden = false;
    optionsContainer.hidden = false;

    subjectName.textContent = sub + " Quiz";

    function showQuestion() {
                        progressFill.style.width =
            `${((currentQuestion ) / questions.length) * 100}%`;
        
        selectedAnswer = null;

        optionButtons.forEach(function (option) {
            option.classList.remove("selected");
            option.disabled = false;
        });

        questionNo.textContent = `Question ${currentQuestion +1}`;
        questionText.textContent = questions[currentQuestion].question;
        totalQuestion.textContent =
            `${currentQuestion }/${questions.length}`;

        optionButtons.forEach(function (option, index) {
            option.textContent = questions[currentQuestion].options[index];
        });


        nextBtn.textContent = "Next Question →";
        nextBtn.disabled = false;
    }

    optionButtons.forEach(function (option, index) {
        option.onclick = function () {
            selectedAnswer = index;

            optionButtons.forEach(function (btn) {
                btn.classList.remove("selected");
            });

            option.classList.add("selected");
        };
    });

    nextBtn.onclick = function () {
        if (currentQuestion >= questions.length) {
            quizScreen.hidden = true;
            homeScreen.hidden = false;
            optionsContainer.hidden = false;
            return;
        }

        if (selectedAnswer === null) {
            alert("Please select an answer!");
            return;
        }

        if (selectedAnswer === questions[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        }
        else {
            questionNo.textContent = "Quiz Completed!";
            questionText.textContent =
                `Your score: ${score}/${questions.length}`;

            totalQuestion.textContent =
                `${questions.length}/${questions.length}`;

            progressFill.style.width = "100%";

            
            optionsContainer.hidden = true;

            nextBtn.textContent = "Back to Subjects";
        }
    };

    showQuestion();
}