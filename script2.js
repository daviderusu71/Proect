// Toggle Menu Mobile
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Scroll Animation
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});

// Formular Contact - Validare Simplă
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Mulțumesc! Mesajul tău a fost trimis.");
    form.reset();
});
