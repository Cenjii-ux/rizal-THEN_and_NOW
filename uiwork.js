// ========================================
// CHARACTER LOGIN
// ========================================

// GET ELEMENTS
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginButton = document.getElementById("loginButton");
const eyes = document.querySelectorAll(".eye");


// ========================================
// 👁 SHOW / HIDE PASSWORD
// ========================================

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.textContent = "🙈";

        togglePassword.setAttribute(
            "aria-label",
            "Hide password"
        );

    } else {

        password.type = "password";
        togglePassword.textContent = "👁";

        togglePassword.setAttribute(
            "aria-label",
            "Show password"
        );
    }

});


// ========================================
// 👀 EYE TRACKING
// ========================================

function moveEyes(x, y) {

    eyes.forEach(function (eye) {

        const rect = eye.getBoundingClientRect();

        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const angle = Math.atan2(
            y - eyeY,
            x - eyeX
        );

        const distance = 6;

        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        eye.style.setProperty(
            "--eye-x",
            `${moveX}px`
        );

        eye.style.setProperty(
            "--eye-y",
            `${moveY}px`
        );

    });

}


// ========================================
// 🖱️ MOUSE
// ========================================

document.addEventListener("mousemove", function (event) {

    moveEyes(
        event.clientX,
        event.clientY
    );

});


// ========================================
// 📱 TOUCH
// ========================================

document.addEventListener("touchmove", function (event) {

    const touch = event.touches[0];

    moveEyes(
        touch.clientX,
        touch.clientY
    );

});


// ========================================
// 🔐 LOGIN
// ========================================

loginButton.addEventListener("click", function () {

    const enteredPassword = password.value;

    // CHANGE THIS TO YOUR DESIRED PASSWORD
    const correctPassword = "banana123";

    if (enteredPassword === correctPassword) {

        // Open the assignment page
        window.location.href = "home.html";

    } else {

        alert("Incorrect password.");

    }

});