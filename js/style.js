// Loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("fade-out");
    }, 1000);
    // setTimeout(() => {
    //     loader.style.display = "none";
    // }, 2000);
});

// Dark Mode Light Mode
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelectorAll("#switch-mode");
    const body = document.body;

    const Icon = () => {
        themeToggle.forEach(btn => {
            if (body.classList.contains("dark")) {
                btn.classList.remove("bx-sun");
                btn.classList.add("bx-moon");
            } else {
                btn.classList.remove("bx-moon");
                btn.classList.add("bx-sun");
            }
        });
    };

    themeToggle.forEach(toggle => {
        toggle.addEventListener("click", () => {
            body.classList.toggle("dark");
            Icon();
        });
    });
    Icon();
});