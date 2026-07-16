/* =====================================================
   NEXORA — PREMIUM HERO JS
===================================================== */


/* ================= CURSOR ================= */

const nxCursor =
    document.querySelector(".nx-cursor");


document.addEventListener(
    "mousemove",
    (event) => {

        if (!nxCursor) return;

        nxCursor.style.left =
            `${event.clientX}px`;

        nxCursor.style.top =
            `${event.clientY}px`;

    }
);


/* ================= PARALLAX ================= */

const nxOrbit =
    document.querySelector(
        ".nx-orbit-wrapper"
    );


const nxHero =
    document.querySelector(
        ".nx-hero"
    );


if (nxHero && nxOrbit) {

    nxHero.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (window.innerWidth / 2 -
                event.clientX) / 35;

            const y =
                (window.innerHeight / 2 -
                event.clientY) / 35;

            nxOrbit.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );


    nxHero.addEventListener(
        "mouseleave",
        () => {

            nxOrbit.style.transform =
                "translate(0, 0)";

        }
    );

}


/* ================= MAGNETIC CTA ================= */

const nxCTA =
    document.querySelector(
        ".nx-hero-cta"
    );


if (nxCTA) {

    nxCTA.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                nxCTA.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left -
                rect.width / 2;

            const y =
                event.clientY -
                rect.top -
                rect.height / 2;

            nxCTA.style.transform =
                `translate(${x * .12}px, ${y * .12}px)`;

        }
    );


    nxCTA.addEventListener(
        "mouseleave",
        () => {

            nxCTA.style.transform =
                "translate(0, 0)";

        }
    );

}


/* ================= TITLE REVEAL ================= */

window.addEventListener(
    "load",
    () => {

        const titleLines =
            document.querySelectorAll(
                ".title-line"
            );

        titleLines.forEach(
            (line, index) => {

                line.style.opacity = "0";

                line.style.transform =
                    "translateY(80px)";

                setTimeout(
                    () => {

                        line.style.transition =
                            "all 1s cubic-bezier(.16,1,.3,1)";

                        line.style.opacity =
                            "1";

                        line.style.transform =
                            "translateY(0)";

                    },

                    200 + index * 180

                );

            }
        );

    }
);



/* =====================================================
   NEXORA — CLEAN MOBILE HERO JS
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        const hero =
            document.querySelector(
                ".mobile-hero"
            );


        if (!hero) return;


        const items = [

            ".mobile-hero-top",

            ".mobile-kicker",

            ".mobile-title",

            ".mobile-description",

            ".mobile-cta",

            ".mobile-hero-bottom"

        ];


        /* =================
           ENTRANCE
        ================= */

        items.forEach(
            (selector, index) => {

                const element =
                    hero.querySelector(
                        selector
                    );


                if (!element) return;


                element.style.opacity = "0";


                element.style.transform =
                    "translateY(20px)";


                setTimeout(
                    () => {

                        element.style.transition =
                            "opacity .7s ease, transform .7s ease";


                        element.style.opacity =
                            "1";


                        element.style.transform =
                            "translateY(0)";


                    },

                    150 + index * 120

                );

            }

        );


        /* =================
           SCROLL FADE
        ================= */

        const bottom =
            hero.querySelector(
                ".mobile-hero-bottom"
            );


        window.addEventListener(
            "scroll",
            () => {

                if (
                    window.innerWidth <= 650
                ) {

                    const opacity =
                        Math.max(
                            0,
                            1 -
                            window.scrollY / 150
                        );


                    if (bottom) {

                        bottom.style.opacity =
                            opacity;

                    }

                }

            },

            {
                passive: true
            }

        );


        /* =================
           CTA CLICK
        ================= */

        const cta =
            hero.querySelector(
                ".mobile-cta"
            );


        if (cta) {

            cta.addEventListener(
                "click",
                () => {

                    cta.classList.add(
                        "clicked"
                    );


                    setTimeout(
                        () => {

                            cta.classList.remove(
                                "clicked"
                            );

                        },

                        500

                    );

                }

            );

        }

    }
);