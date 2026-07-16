/* =========================================
   NEXORA NAVBAR — FULL WORKING JS
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =========================
           SELECT ELEMENTS
        ========================= */

        const navbar =
            document.getElementById(
                "nxNavbar"
            );


        const menuBtn =
            document.getElementById(
                "nxMenuBtn"
            );


        const mobileMenu =
            document.getElementById(
                "nxMobileMenu"
            );


        const mobileLinks =
            document.querySelectorAll(
                ".nx-mobile-links a"
            );


        const desktopLinks =
            document.querySelectorAll(
                ".nx-nav-links a"
            );


        /* =========================
           SAFETY CHECK
        ========================= */

        if (

            !navbar ||

            !menuBtn ||

            !mobileMenu

        ) {

            console.error(
                "NEXORA NAVBAR: Required elements missing."
            );

            return;

        }


        /* =========================
           OPEN / CLOSE MENU
        ========================= */

        function openMenu() {


            mobileMenu.classList.add(
                "open"
            );


            navbar.classList.add(
                "menu-open"
            );


            menuBtn.setAttribute(
                "aria-expanded",
                "true"
            );


            document.body.style.overflow =
                "hidden";

        }


        function closeMenu() {


            mobileMenu.classList.remove(
                "open"
            );


            navbar.classList.remove(
                "menu-open"
            );


            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );


            document.body.style.overflow =
                "";

        }


        function toggleMenu() {


            if (

                mobileMenu.classList.contains(
                    "open"
                )

            ) {

                closeMenu();

            } else {

                openMenu();

            }

        }


        /* =========================
           MENU BUTTON
        ========================= */

        menuBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                toggleMenu();

            }
        );


        /* =========================
           MOBILE LINKS
        ========================= */

        mobileLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        closeMenu();

                    }
                );

            }
        );


        /* =========================
           ESC KEY
        ========================= */

        document.addEventListener(
            "keydown",
            function (event) {


                if (

                    event.key === "Escape" &&

                    mobileMenu.classList.contains(
                        "open"
                    )

                ) {

                    closeMenu();

                }

            }
        );


        /* =========================
           SCROLL EFFECT
        ========================= */

        window.addEventListener(
            "scroll",
            function () {


                if (

                    window.scrollY > 40

                ) {

                    navbar.classList.add(
                        "scrolled"
                    );

                } else {

                    navbar.classList.remove(
                        "scrolled"
                    );

                }

            },
            {
                passive: true
            }
        );


        /* =========================
           ACTIVE NAV LINK
        ========================= */

        const sections =
            document.querySelectorAll(
                "section[id]"
            );


        function updateActiveLink() {


            let currentSection = "";


            sections.forEach(
                function (section) {


                    const sectionTop =
                        section.offsetTop - 250;


                    if (

                        window.scrollY >=
                        sectionTop

                    ) {

                        currentSection =
                            section.id;

                    }

                }
            );


            desktopLinks.forEach(
                function (link) {


                    link.classList.remove(
                        "active"
                    );


                    if (

                        link.getAttribute(
                            "href"
                        ) ===
                        "#" + currentSection

                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                }
            );

        }


        window.addEventListener(
            "scroll",
            updateActiveLink,
            {
                passive: true
            }
        );


    }
);