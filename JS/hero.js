// =========================
// THEME TOGGLE
// =========================

const themeBtn = document.getElementById("themeBtn");
const body = document.body;
const icon = themeBtn.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
    icon.className = "ri-moon-line";
}

themeBtn.addEventListener("click", () => {

    body.classList.toggle("light");

    if (body.classList.contains("light")) {

        icon.className = "ri-moon-line";
        localStorage.setItem("theme", "light");

    } else {

        icon.className = "ri-sun-line";
        localStorage.setItem("theme", "dark");

    }

});

// =========================
// NAVBAR SHADOW ON SCROLL
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "none";

    }

});

// =========================
// HERO FADE ANIMATION
// =========================

const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.style.opacity = "0";
left.style.transform = "translateX(-60px)";

right.style.opacity = "0";
right.style.transform = "translateX(60px)";

setTimeout(() => {

    left.style.transition = ".9s";
    right.style.transition = ".9s";

    left.style.opacity = "1";
    right.style.opacity = "1";

    left.style.transform = "translateX(0)";
    right.style.transform = "translateX(0)";

}, 200);

// =========================
// PARALLAX EFFECT
// =========================

document.addEventListener("mousemove", (e) => {

    const cube = document.querySelector(".cube");

    const x = (window.innerWidth / 2 - e.clientX) / 35;
    const y = (window.innerHeight / 2 - e.clientY) / 35;

    cube.style.transform =
        `rotateX(${y}deg) rotateY(${-x}deg)`;

});

// =========================
// BUTTON RIPPLE EFFECT
// =========================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px) scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0) scale(1)";

    });

});

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// =========================
// FLOATING EXPERIENCE CARD
// =========================

const card = document.querySelector(".experience");

setInterval(() => {

    card.animate(
        [
            { transform: "translateY(0px)" },
            { transform: "translateY(-8px)" },
            { transform: "translateY(0px)" }
        ],
        {
            duration: 2500,
            iterations: 1
        }
    );

}, 2500);