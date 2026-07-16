/* =========================================
   NEXORA — PORTFOLIO JS
========================================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {


        const portfolio =

            document.querySelector(

                ".nx-portfolio"

            );


        if (!portfolio) return;


        const elements =

            portfolio.querySelectorAll(

                ".nx-portfolio-content, " +

                ".nx-portfolio-bottom"

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

                                    "portfolio-visible"

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

                    `${index * .15}s`;


                observer.observe(element);

            }

        );

    }

);