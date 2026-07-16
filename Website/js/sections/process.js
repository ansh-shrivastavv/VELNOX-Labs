/* =========================================
   NEXORA — OUR PROCESS JS
========================================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {


        const items =

            document.querySelectorAll(

                ".nx-process-item"

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

                                    "nx-process-visible"

                                );

                                observer.unobserve(

                                    entry.target

                                );

                            }

                        }

                    );

                },

                {

                    threshold: .15

                }

            );


        items.forEach(

            (item, index) => {


                item.style.opacity = "0";

                item.style.transform =

                    "translateY(25px)";


                item.style.transition =

                    `opacity .7s ease ${index * .1}s,

                     transform .7s ease ${index * .1}s`;


                observer.observe(item);

            }

        );

    }

);