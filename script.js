
// document.getElementById('contactForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent form from submitting the default way

//     // Get form values
//     var name = document.querySelector('input[name="name"]').value;
//     var email = document.querySelector('input[name="email"]').value;
//     var subject = document.querySelector('input[name="subject"]').value;
//     var message = document.querySelector('textarea[name="message"]').value;

//     // Create mailto link
//     var mailtoLink = `mailto:rajatgoswamix05@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message)}`;

//     // Open mailto link
//     window.location.href = mailtoLink;
//   });


// Utility function to get elements by ID
function get(id) {
    return document.getElementById(id);
}

// Dark and light mode
const modeBtn = get("modeBtn");
const modeText = get("modeText");
const modeIcon = get("modeIcon");
let darkMode = false;
const root = document.documentElement.style;

modeBtn.addEventListener("click", () => {
    if (darkMode === false) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});

function enableDarkMode() {
    root.setProperty("--lm-bg", "#1E2A47");
    root.setProperty("--lm-bg-content", "#000000");
    root.setProperty("--lm-text", "rgb(71, 70, 165)");
    root.setProperty("--lm-text-alt", "white");
    root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
    root.setProperty("--lm-desc-text", "#00ff80")
    root.setProperty("--lm-heading" ,"#e84949");
    modeText.innerText = "LIGHT";
    modeIcon.src = "light-mode.png";
    root.setProperty("--lm-icon-bg", "brightness(1000%)");
    darkMode = true;
    localStorage.setItem("dark-mode", true);
}

function enableLightMode() {
    root.setProperty("--lm-bg", "#F6F8FF");
    root.setProperty("--lm-bg-content", "#FEFEFE");
    root.setProperty("--lm-text", "#4B6A9B");
    root.setProperty("--lm-text-alt", "#2B3442");
    root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
    root.setProperty("--lm-desc-text", "#0037ff")
    root.setProperty("--lm-heading" ,"rgb(71, 70, 165)");



    modeText.innerText = "DARK";
    modeIcon.src = "dark-mode.png";
    root.setProperty("--lm-icon-bg", "brightness(100%)");
    darkMode = false;
    localStorage.setItem("dark-mode", false);
}

// Check if the user's device has a preference for dark mode
const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

// Check if there is a value for "dark-mode" in the user's localStorage
if (localStorage.getItem("dark-mode") === null) {
    if (prefersDarkMode) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
} else {
    if (localStorage.getItem("dark-mode") === "true") {
        enableDarkMode();
    } else {
        enableLightMode();
    }
}
