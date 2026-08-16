/* =========================================================
   VELNOX — NAVBAR SYSTEM
   Theme + Mobile Menu + Scroll
========================================================= */

(() => {

    "use strict";


    /* =========================================================
       ELEMENTS
    ========================================================= */

    const body = document.body;

    const navbar =
        document.getElementById("navbar");


    /* =========================================================
       THEME
    ========================================================= */

    function applyTheme(theme) {

        if (theme === "light") {

            body.classList.add("light-theme");

        } else {

            body.classList.remove("light-theme");

        }

        updateThemeButton();

    }


    function updateThemeButton() {

        const button =
            document.getElementById("themeBtn");

        if (!button) return;

        const isLight =
            body.classList.contains("light-theme");

        button.textContent =
            isLight ? "☾" : "☼";

        button.setAttribute(
            "aria-label",
            isLight
                ? "Switch to dark theme"
                : "Switch to light theme"
        );

    }


    /* =========================================================
       RESTORE SAVED THEME
    ========================================================= */

    const savedTheme =
        localStorage.getItem("velnox-theme");

    applyTheme(
        savedTheme === "light"
            ? "light"
            : "dark"
    );


    /* =========================================================
       THEME BUTTON
       Event delegation = safe for dynamic navbar
    ========================================================= */

    document.addEventListener(
        "click",
        (event) => {

            const button =
                event.target.closest("#themeBtn");

            if (!button) return;


            const isLight =
                body.classList.contains(
                    "light-theme"
                );


            const nextTheme =
                isLight ? "dark" : "light";


            applyTheme(nextTheme);


            localStorage.setItem(
                "velnox-theme",
                nextTheme
            );

        }
    );


    /* =========================================================
       MOBILE MENU
    ========================================================= */

    function setupMobileMenu() {

        const menuBtn =
            document.getElementById("menuBtn");

        const navLinks =
            document.querySelector(".navbar-links");


        if (!menuBtn || !navLinks) return;


        if (
            menuBtn.dataset.initialized === "true"
        ) {
            return;
        }


        menuBtn.dataset.initialized = "true";


        menuBtn.addEventListener(
            "click",
            () => {

                menuBtn.classList.toggle("open");

                navLinks.classList.toggle("open");

            }
        );


        navLinks
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        menuBtn.classList.remove(
                            "open"
                        );

                        navLinks.classList.remove(
                            "open"
                        );

                    }
                );

            });

    }


    setupMobileMenu();


    /* =========================================================
       NAVBAR SCROLL
    ========================================================= */

    function handleNavbarScroll() {

        if (!navbar) return;


        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        handleNavbarScroll,
        {
            passive: true
        }
    );


    handleNavbarScroll();


    /* =========================================================
       FINAL
    ========================================================= */

    console.log(
        "✓ VELNOX Navbar Loaded"
    );

})();