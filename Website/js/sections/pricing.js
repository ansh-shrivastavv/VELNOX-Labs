/* =====================================================
   NEXORA — MISSION PRICING JS
===================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {


        const items =

            document.querySelectorAll(

                ".nx-mission-item"

            );


        items.forEach(

            item => {


                const main =

                    item.querySelector(

                        ".nx-mission-main"

                    );


                main.addEventListener(

                    "click",

                    () => {


                        const isActive =

                            item.classList.contains(

                                "active"

                            );


                        items.forEach(

                            other => {

                                other.classList.remove(

                                    "active"

                                );

                            }

                        );


                        if (!isActive) {

                            item.classList.add(

                                "active"

                            );

                        }

                    }

                );

            }

        );


        /* =================
           SCROLL REVEAL
        ================= */


        const pricing =

            document.querySelector(

                ".nx-mission-pricing"

            );


        if (!pricing) return;


        const observer =

            new IntersectionObserver(

                entries => {


                    entries.forEach(

                        entry => {


                            if (

                                entry.isIntersecting

                            ) {


                                pricing.classList.add(

                                    "is-visible"

                                );


                                observer.unobserve(

                                    pricing

                                );

                            }

                        }

                    );

                },

                {

                    threshold: .15

                }

            );


        observer.observe(pricing);

    }

);