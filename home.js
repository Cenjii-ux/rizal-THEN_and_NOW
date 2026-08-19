/* ========================================
GET ELEMENTS
======================================== */

const showSimilarities =
document.getElementById("showSimilarities");

const similaritiesTable =
document.getElementById("similaritiesTable");

const showDifferences =
document.getElementById("showDifferences");

const differencesTable =
document.getElementById("differencesTable");

/* ========================================
SIMILARITIES BUTTON
======================================== */

showSimilarities.addEventListener(
"click",
function () {


    similaritiesTable.classList.toggle("hidden");


    if (similaritiesTable.classList.contains("hidden")) {

        showSimilarities.textContent =
            "SHOW COMPARISON";

    } else {

        showSimilarities.textContent =
            "HIDE COMPARISON";

    }

}


);

/* ========================================
DIFFERENCES BUTTON
======================================== */

showDifferences.addEventListener(
"click",
function () {


    differencesTable.classList.toggle("hidden");


    if (differencesTable.classList.contains("hidden")) {

        showDifferences.textContent =
            "SHOW COMPARISON";

    } else {

        showDifferences.textContent =
            "HIDE COMPARISON";

    }

}


);

// ========================================
// START SURVEY
// ========================================

const surveyButton =
    document.getElementById("surveyButton");

const surveyModal =
    document.getElementById("surveyModal");

const closeSurvey =
    document.getElementById("closeSurvey");

const surveyLogin =
    document.getElementById("surveyLogin");

const surveyScreen =
    document.getElementById("surveyScreen");

const surveyUsername =
    document.getElementById("surveyUsername");

const surveyPassword =
    document.getElementById("surveyPassword");

const surveyLoginButton =
    document.getElementById("surveyLoginButton");

const surveyLoginMessage =
    document.getElementById("surveyLoginMessage");

const surveyText =
    document.getElementById("surveyText");

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const glitch =
    document.getElementById("glitch");


// ========================================
// OPEN SURVEY
// ========================================

surveyButton.addEventListener(
    "click",
    function () {

        surveyModal.style.display = "flex";

    }
);


// ========================================
// CLOSE SURVEY
// ========================================

closeSurvey.addEventListener(
    "click",
    function () {

        surveyModal.style.display = "none";

    }
);


// ========================================
// QUESTIONS
// ========================================

let startTime = Date.now();

let questionIndex = 0;

let finalIndex = 0;

let typingInterval;

let noCounter = 0;


const questions = [
    "START SURVEY?",
    "Are you alone right now?",
    "Do you believe this survey is harmless?",
    "Do you feel watched when using a screen?",
    "If you stopped now, would it bother you?",
    "Do you trust what is asking these questions?",
    "Would you like to continue?",
    "Are you completely sure you are real right now?",
    "Do you believe your thoughts belong only to you?",
    "Have you ever questioned whether this moment has happened before?",
    "If your memories were altered, would you notice?",
    "Do you trust your mind to tell you the truth?",
    "Have you answered honestly so far?",
    "Are you certain you chose to be who you are today?",
    "Do you think reality exists when you're not observing it?",
    "Have you ever felt like you were watching yourself from inside?",
    "Would you recognize yourself without your memories?",
    "Do you believe you have full control over your decisions?",
    "If you disappeared, would the world feel different?",
    "Are you sure your awareness ends when you sleep?",
    "Do you believe time is moving forward right now?",
    "Have you ever felt like something was subtly 'off' about the world?",
    "Would you know if you were being guided toward certain choices?",
    "Are you confident that this is your first time answering these questions?",
    "Do you believe your identity is permanent?",
    "If reality depended on you, would you feel it?",
    "Do you trust your senses completely?",
    "After answering these questions, do you feel exactly the same as before?"
];


const finalQuestions = [
    "Before this survey, did you feel real?",
    "What makes you certain you exist?",
    "If no one observes you, do your choices matter?",
    "Are your thoughts truly yours?",
    "Or are they responses to something unseen?",
    "This survey did not change you.",
    "It only revealed you.",
    "Your answers were expected.",
    "You were honest.",
    "You may close this now.",
    "The survey is complete.",
    "The system will not stop thinking about you."
];


const noQuestions = [
    "You hesitated. Why?",
    "Do you really want to refuse?",
    "Are you afraid of what this survey might reveal?",
    "Even if you say no, it will observe.",
    "Do you want to reconsider?"
];


// ========================================
// TYPE TEXT
// ========================================

function typeText(text) {

    surveyText.textContent = "";

    let i = 0;

    clearInterval(typingInterval);

    typingInterval = setInterval(
        function () {

            surveyText.textContent +=
                text.charAt(i);

            i++;

            if (i >= text.length) {

                clearInterval(typingInterval);

            }

        },
        35
    );

}


// ========================================
// GLITCH
// ========================================

function glitchEffect() {

    glitch.style.opacity = "0.25";

    setTimeout(
        function () {

            glitch.style.opacity = "0";

        },
        120
    );

}


// ========================================
// ANSWER
// ========================================

function answer(choice) {

    const now = Date.now();

    const hesitation =
        ((now - startTime) / 1000).toFixed(1);


    let history =
        JSON.parse(
            localStorage.getItem(
                "observerChoices"
            )
        ) || [];


    history.push({

        question:
            questions[questionIndex],

        answer:
            choice,

        hesitation:
            hesitation

    });


    localStorage.setItem(
        "observerChoices",
        JSON.stringify(history)
    );


    if (choice === "no") {

        noCounter++;

        if (noCounter >= 2) {

            const altQuestion =
                noQuestions[
                    Math.floor(
                        Math.random() *
                        noQuestions.length
                    )
                ];


            typeText(altQuestion);

            noCounter = 0;

            return;

        }

    }

    else {

        noCounter = 0;

    }


    setTimeout(
        nextQuestion,
        1000
    );

}


// ========================================
// NEXT QUESTION
// ========================================

function nextQuestion() {

    questionIndex++;

    startTime = Date.now();


    if (
        questionIndex <
        questions.length
    ) {

        if (
            Math.random() < 0.3
        ) {

            glitchEffect();

        }


        typeText(
            questions[questionIndex]
        );

    }

    else {

        endSurvey();

    }

}


// ========================================
// END SURVEY
// ========================================

function endSurvey() {

    document.querySelector(
        ".survey-buttons"
    ).style.display = "none";


    finalIndex = 0;

    showFinalQuestion();

}


// ========================================
// FINAL QUESTIONS
// ========================================

function showFinalQuestion() {

    if (
        finalIndex <
        finalQuestions.length
    ) {

        if (
            Math.random() < 0.4
        ) {

            glitchEffect();

        }


        typeText(
            finalQuestions[finalIndex]
        );


        finalIndex++;


        setTimeout(
            showFinalQuestion,
            2600
        );

    }

}


// ========================================
// SURVEY LOGIN
// ========================================

const SURVEY_USERNAME = "observer";

const SURVEY_PASSWORD = "0427";


surveyLoginButton.addEventListener(
    "click",
    function () {

        const user =
            surveyUsername.value;

        const pass =
            surveyPassword.value;


        if (
            user === SURVEY_USERNAME &&
            pass === SURVEY_PASSWORD
        ) {

            surveyLogin.style.display =
                "none";


            surveyScreen.style.display =
                "block";


            questionIndex = 0;

            finalIndex = 0;

            noCounter = 0;

            startTime = Date.now();


            document.querySelector(
                ".survey-buttons"
            ).style.display = "block";


            typeText(
                questions[0]
            );

        }

        else {

            surveyLoginMessage.textContent =
                "ACCESS DENIED";

        }

    }
);


// ========================================
// YES / NO
// ========================================

yesButton.addEventListener(
    "click",
    function () {

        answer("yes");

    }
);


noButton.addEventListener(
    "click",
    function () {

        answer("no");

    }
);
