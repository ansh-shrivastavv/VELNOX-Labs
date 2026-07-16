/* =========================================
   NEXORA — SERVICES JS
========================================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {


        const services =

            document.querySelectorAll(

                ".nx-service-item"

            );


        services.forEach(

            service => {


                const main =

                    service.querySelector(

                        ".nx-service-main"

                    );


                main.addEventListener(

                    "click",

                    () => {


                        const isActive =

                            service.classList.contains(

                                "active"

                            );


                        services.forEach(

                            item => {

                                item.classList.remove(

                                    "active"

                                );

                            }

                        );


                        if (!isActive) {

                            service.classList.add(

                                "active"

                            );

                        }

                    }

                );

            }

        );


        /* =========================
           SCROLL REVEAL
        ========================= */

        const items =

            document.querySelectorAll(

                ".nx-service-item"

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

                                    "service-visible"

                                );


                                observer.unobserve(

                                    entry.target

                                );

                            }

                        }

                    );

                },

                {

                    threshold: .1

                }

            );


        items.forEach(

            (item, index) => {


                item.style.opacity = "0";

                item.style.transform =

                    "translateY(20px)";


                item.style.transition =

                    `opacity .7s ease ${index * .08}s,

                     transform .7s ease ${index * .08}s`;


                observer.observe(item);

            }

        );

    }

);


/* =========================
   REVEAL
========================= */

const serviceRevealStyle =

    document.createElement("style");


serviceRevealStyle.textContent = `

    .nx-service-item.service-visible {

        opacity: 1 !important;

        transform: translateY(0) !important;

    }

`;


document.head.appendChild(

    serviceRevealStyle

);