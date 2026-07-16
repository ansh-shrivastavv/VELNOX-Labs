/* =========================================
   NEXORA — FOOTER JS
========================================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        const footer =

            document.querySelector(

                ".nx-footer"

            );


        if (!footer) return;


        /* =========================
           SCROLL REVEAL
        ========================= */

        const footerElements =

            footer.querySelectorAll(

                ".nx-footer-top, " +

                ".nx-footer-main, " +

                ".nx-footer-bottom"

            );


        const observer =

            new IntersectionObserver(

                entries => {


                    entries.forEach(

                        entry => {


                            if (

                                entry.isIntersecting

                            ) {

                                entry.target.classList.add(

                                    "nx-footer-visible"

                                );

                                observer.unobserve(

                                    entry.target

                                );

                            }

                        }

                    );

                },

                {

                    threshold: 0.15

                }

            );


        footerElements.forEach(

            (element, index) => {


                element.style.transitionDelay =

                    `${index * 0.12}s`;


                observer.observe(element);

            }

        );


        /* =========================
           BACK TO TOP
        ========================= */

        const backToTop =

            footer.querySelector(

                'a[href="#home"]'

            );


        if (backToTop) {

            backToTop.addEventListener(

                "click",

                event => {


                    event.preventDefault();


                    window.scrollTo({

                        top: 0,

                        behavior: "smooth"

                    });

                }

            );

        }


        /* =========================
           FOOTER YEAR
        ========================= */

        const yearText =

            footer.querySelector(

                ".nx-footer-bottom span"

            );


        if (yearText) {

            yearText.innerHTML =

                `© ${new Date().getFullYear()} NEXORA. ALL RIGHTS RESERVED.`;

        }

    }

);