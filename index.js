// ===== Fade & Zoom Animation Observer =====
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fadeItems = entry.target.querySelectorAll(".fade-item");
            fadeItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add("visible");
                }, index * 150);
            });
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    const children = section.querySelectorAll("*");
    children.forEach(child => {
        if (child.tagName.toLowerCase() === "img") {
            child.classList.add("fade-item", "img-zoom");
        } else {
            child.classList.add("fade-item");
        }
    });
    observer.observe(section);
});

// ===== Navbar Scroll Gradient Effect =====
document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        navbar.style.background = "linear-gradient(90deg, var(--color-blue), var(--color-purple))";
    } else {
        navbar.classList.remove("scrolled");
        navbar.style.background = "rgba(41, 128, 185, 0.85)";
    }
});

// ===== Button Hover Ripple Effect (Green / Orange) =====
document.querySelectorAll(".btn-primary, .btn-secondary, .hero-btn").forEach(button => {
    button.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        ripple.style.left = `${e.clientX - e.target.offsetLeft}px`;
        ripple.style.top = `${e.clientY - e.target.offsetTop}px`;

        // Ripple color matches theme
        if (this.classList.contains("btn-primary")) {
            ripple.style.backgroundColor = "var(--color-green)";
        } else if (this.classList.contains("btn-secondary")) {
            ripple.style.backgroundColor = "var(--color-orange)";
        } else {
            ripple.style.backgroundColor = "var(--color-pink)";
        }

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});
