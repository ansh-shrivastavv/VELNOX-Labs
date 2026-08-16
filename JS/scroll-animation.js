/* =========================================================
   VELNOX WEB LABS
   PREMIUM SCROLL MOTION SYSTEM
   GSAP + ScrollTrigger
========================================================= */

(() => {

    "use strict";


    /* =========================================================
       CHECK GSAP
    ========================================================= */

    if (typeof gsap === "undefined") {
        console.error("VELNOX Motion: GSAP not loaded.");
        return;
    }

    if (typeof ScrollTrigger === "undefined") {
        console.error("VELNOX Motion: ScrollTrigger not loaded.");
        return;
    }


    gsap.registerPlugin(ScrollTrigger);


    /* =========================================================
       REDUCED MOTION
    ========================================================= */

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
        console.log("VELNOX Motion: Reduced motion enabled.");
        return;
    }


    /* =========================================================
       GLOBAL SETTINGS
    ========================================================= */

    gsap.defaults({
        ease: "power3.out",
        duration: 1
    });


    /* =========================================================
       MAIN SECTIONS
    ========================================================= */

    const sections = [
        "#hero-section",
        "#about-section",
        "#services-section",
        "#works-section",
        "#team-section",
        "#estimator-section",
        "#contact-section",
        "#location-section",
        "#footer-section"
    ];


    /* =========================================================
       HERO — CINEMATIC INTRO
    ========================================================= */

    const hero = document.querySelector("#hero-section");

    if (hero) {

        const heroElements = hero.querySelectorAll(
            "h1, h2, h3, p, .hero-label, .hero-content, " +
            ".hero-buttons, .hero-image, .hero-visual"
        );

        if (heroElements.length) {

            gsap.from(heroElements, {
                opacity: 0,
                y: 45,
                duration: 1.1,
                stagger: 0.1,
                ease: "power4.out",
                delay: 0.15
            });

        }


        /* Hero visual */

        const heroVisual = hero.querySelector(
            ".hero-image, .hero-visual"
        );

        if (heroVisual) {

            gsap.fromTo(
                heroVisual,
                {
                    opacity: 0,
                    scale: 0.92,
                    y: 25
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.4,
                    ease: "power3.out",
                    delay: 0.25
                }
            );

        }

    }


    /* =========================================================
       SECTION REVEAL
    ========================================================= */

    sections.slice(1).forEach((selector) => {

        const section = document.querySelector(selector);

        if (!section) return;


        gsap.fromTo(
            section,
            {
                opacity: 0,
                y: 45
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.1,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: section,
                    start: "top 88%",
                    once: true
                }
            }
        );

    });


    /* =========================================================
       SECTION LABELS
    ========================================================= */

    document.querySelectorAll(
        `
        .section-label,
        .estimator-label,
        .about-label,
        .services-label,
        .works-label,
        .team-label,
        .contact-label,
        .location-label
        `
    ).forEach((label) => {

        gsap.fromTo(
            label,
            {
                opacity: 0,
                x: -25
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: label,
                    start: "top 90%",
                    once: true
                }
            }
        );

    });


    /* =========================================================
       HEADINGS — PREMIUM REVEAL
    ========================================================= */

    document.querySelectorAll(
        `
        #about-section h1,
        #about-section h2,
        #services-section h1,
        #services-section h2,
        #works-section h1,
        #works-section h2,
        #team-section h1,
        #team-section h2,
        #estimator-section h1,
        #estimator-section h2,
        #contact-section h1,
        #contact-section h2,
        #location-section h1,
        #location-section h2
        `
    ).forEach((heading) => {

        gsap.fromTo(
            heading,
            {
                opacity: 0,
                y: 55,
                clipPath: "inset(100% 0% 0% 0%)"
            },
            {
                opacity: 1,
                y: 0,
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1.05,
                ease: "power4.out",

                scrollTrigger: {
                    trigger: heading,
                    start: "top 86%",
                    once: true
                }
            }
        );

    });


    /* =========================================================
       PARAGRAPHS
    ========================================================= */

    document.querySelectorAll(
        `
        #about-section p,
        #services-section p,
        #works-section p,
        #team-section p,
        #estimator-section p,
        #contact-section p,
        #location-section p
        `
    ).forEach((paragraph) => {

        gsap.fromTo(
            paragraph,
            {
                opacity: 0,
                y: 25
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: paragraph,
                    start: "top 90%",
                    once: true
                }
            }
        );

    });


    /* =========================================================
       SERVICE CARDS
    ========================================================= */

    const serviceCards = document.querySelectorAll(
        "#services-section .service-card"
    );

    if (serviceCards.length) {

        gsap.fromTo(
            serviceCards,
            {
                opacity: 0,
                y: 65,
                scale: 0.97
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.9,
                stagger: 0.12,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: "#services-section",
                    start: "top 78%",
                    once: true
                }
            }
        );

    }


    /* =========================================================
       WORK CARDS
    ========================================================= */

    const workCards = document.querySelectorAll(
        `
        #works-section .work-card,
        #works-section .project-card
        `
    );

    if (workCards.length) {

        gsap.fromTo(
            workCards,
            {
                opacity: 0,
                y: 70,
                scale: 0.95
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                stagger: 0.14,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: "#works-section",
                    start: "top 78%",
                    once: true
                }
            }
        );

    }


    /* =========================================================
       TEAM
    ========================================================= */

    const teamItems = document.querySelectorAll(
        `
        #team-section .team-card,
        #team-section .team-member,
        #team-section img
        `
    );

    if (teamItems.length) {

        gsap.fromTo(
            teamItems,
            {
                opacity: 0,
                y: 55
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.13,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: "#team-section",
                    start: "top 80%",
                    once: true
                }
            }
        );

    }


    /* =========================================================
       ESTIMATOR
    ========================================================= */

    const estimator = document.querySelector(
        "#estimator-section"
    );

    if (estimator) {

        const estimatorItems = estimator.querySelectorAll(
            `
            h1,
            h2,
            h3,
            p,
            label,
            input,
            select,
            textarea,
            button
            `
        );

        gsap.fromTo(
            estimatorItems,
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.06,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: estimator,
                    start: "top 78%",
                    once: true
                }
            }
        );

    }


    /* =========================================================
       CONTACT
    ========================================================= */

    const contact = document.querySelector(
        "#contact-section"
    );

    if (contact) {

        const contactItems = contact.querySelectorAll(
            `
            h1,
            h2,
            h3,
            p,
            a,
            button,
            .contact-card
            `
        );

        gsap.fromTo(
            contactItems,
            {
                opacity: 0,
                y: 35
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.08,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: contact,
                    start: "top 80%",
                    once: true
                }
            }
        );

    }


    /* =========================================================
       LOCATION
    ========================================================= */

    const location = document.querySelector(
        "#location-section"
    );

    if (location) {

        const locationItems = location.querySelectorAll(
            `
            h1,
            h2,
            h3,
            p,
            img,
            iframe,
            .location-card
            `
        );

        gsap.fromTo(
            locationItems,
            {
                opacity: 0,
                y: 40
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.85,
                stagger: 0.08,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: location,
                    start: "top 80%",
                    once: true
                }
            }
        );

    }


    /* =========================================================
       IMAGE REVEAL
    ========================================================= */

    document.querySelectorAll(
        `
        #about-section img,
        #works-section img,
        #team-section img,
        #location-section img
        `
    ).forEach((image) => {

        gsap.fromTo(
            image,
            {
                opacity: 0,
                scale: 0.94,
                y: 30
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: image,
                    start: "top 88%",
                    once: true
                }
            }
        );

    });


    /* =========================================================
       IMAGE PARALLAX
    ========================================================= */

    document.querySelectorAll(
        "[data-parallax]"
    ).forEach((element) => {

        gsap.to(
            element,
            {
                yPercent: -10,
                ease: "none",

                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.2
                }
            }
        );

    });


    /* =========================================================
       CARD HOVER
    ========================================================= */

    document.querySelectorAll(
        `
        .service-card,
        .work-card,
        .project-card,
        .team-card
        `
    ).forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {

                gsap.to(card, {
                    y: -6,
                    scale: 1.015,
                    duration: 0.35,
                    ease: "power2.out",
                    overwrite: true
                });

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                gsap.to(card, {
                    y: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: "power3.out",
                    overwrite: true
                });

            }
        );

    });


    /* =========================================================
       FOOTER
    ========================================================= */

    const footer = document.querySelector(
        "#footer-section"
    );

    if (footer) {

        gsap.fromTo(
            footer.querySelectorAll(
                "h2, h3, p, a, li"
            ),
            {
                opacity: 0,
                y: 25
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.65,
                stagger: 0.05,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: footer,
                    start: "top 90%",
                    once: true
                }
            }
        );

    }


    /* =========================================================
       REFRESH
    ========================================================= */

    requestAnimationFrame(() => {

        ScrollTrigger.refresh();

    });


    window.addEventListener(
        "load",
        () => {

            ScrollTrigger.refresh();

        }
    );


    console.log(
        "✓ VELNOX Premium Motion System Active"
    );

})();