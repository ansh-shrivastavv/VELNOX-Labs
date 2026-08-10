document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;

    /* =========================
       THEME
    ========================= */

    const savedTheme = localStorage.getItem("velnox-theme");

    if (savedTheme === "light") {
        body.classList.add("light-theme");
    } else {
        body.classList.remove("light-theme");
    }


    /* =========================
       THEME BUTTON
    ========================= */

    document.addEventListener("click", (e) => {

        const themeButton = e.target.closest("#themeBtn");

        if (!themeButton) return;

        body.classList.toggle("light-theme");

        const isLight =
            body.classList.contains("light-theme");

        localStorage.setItem(
            "velnox-theme",
            isLight ? "light" : "dark"
        );

        themeButton.textContent =
            isLight ? "☾" : "☼";

    });


    /* =========================
       MOBILE MENU
    ========================= */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.querySelector(".navbar-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            menuBtn.classList.toggle("open");
            navLinks.classList.toggle("open");

        });

    }


    /* =========================
       NAVBAR SCROLL
    ========================= */

    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

});