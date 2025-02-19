// Select the toggle button
const toggleBtn = document.querySelector(".toggle");
const body = document.body;

// Function to enable dark mode
function startDarkmode() {
    body.classList.add("dark-mode");
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Sun icon ☀
}

// Function to disable dark mode
function closeDarkmode() {
    body.classList.remove("dark-mode");
    toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Moon icon 🌙
}

// Always start in light mode after refresh
closeDarkmode();

// Toggle dark mode on button click
toggleBtn.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        closeDarkmode();
    } else {
       startDarkmode();
    }
});
