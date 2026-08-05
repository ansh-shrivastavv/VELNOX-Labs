/* =========================================
   VELNOX NAVBAR JS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const navbar =
        document.querySelector(".navbar");

    const menuToggle =
        document.querySelector(".menu-toggle");

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const mobileLinks =
        document.querySelectorAll(".mobile-menu a");

    const navLinks =
        document.querySelectorAll(".nav-links a");


    /* =====================================
       SCROLL EFFECT
    ===================================== */

    function handleNavbarScroll() {

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        handleNavbarScroll
    );

    handleNavbarScroll();


    /* =====================================
       MOBILE MENU
    ===================================== */

    if (menuToggle) {

        menuToggle.addEventListener("click", () => {

            document.body.classList.toggle(
                "menu-open"
            );

        });

    }


    /* Close mobile menu */

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            document.body.classList.remove(
                "menu-open"
            );

        });

    });


    /* =====================================
       ACTIVE NAV LINK
    ===================================== */

    const sections =
        document.querySelectorAll("section[id]");


    function updateActiveLink() {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveLink
    );

    updateActiveLink();


    /* =====================================
       ESC CLOSE
    ===================================== */

    document.addEventListener("keydown", e => {

        if (
            e.key === "Escape" &&
            document.body.classList.contains(
                "menu-open"
            )
        ) {

            document.body.classList.remove(
                "menu-open"
            );

        }

    });

});