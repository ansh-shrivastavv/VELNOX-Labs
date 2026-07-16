/* =========================================
   NEXORA — ABOUT JS
========================================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        const about =

            document.querySelector(

                ".nx-about"

            );


        if (!about) return;


        const elements =

            about.querySelectorAll(

                ".nx-about-content, " +

                ".nx-about-founder, " +

                ".nx-about-stats"

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

                                    "nx-about-visible"

                                );

                            }

                        }

                    );

                },

                {

                    threshold: .15

                }

            );


        elements.forEach(

            (element, index) => {

                element.style.transitionDelay =

                    `${index * .12}s`;

                observer.observe(element);

            }

        );

    }

);