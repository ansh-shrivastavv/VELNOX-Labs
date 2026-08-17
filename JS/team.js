/* =========================================================
   VELNOX — TEAM SYSTEM
   Team Card Reveal Animation
========================================================= */

(() => {

    "use strict";


    /* =========================================================
       TEAM CARDS
    ========================================================= */

    const teamCards =
        document.querySelectorAll(".team-card");


    /* =========================================================
       CHECK
    ========================================================= */

    if (!teamCards.length) {

        console.log(
            "⚠ VELNOX Team: No team cards found"
        );

        return;
    }


    /* =========================================================
       INTERSECTION OBSERVER
    ========================================================= */

    const teamObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.classList.add(
                        "team-visible"
                    );


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.15
            }
        );


    /* =========================================================
       INITIALIZE
    ========================================================= */

    teamCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.12}s`;

        teamObserver.observe(card);

    });


    /* =========================================================
       FINAL
    ========================================================= */

    console.log(
        "✓ VELNOX Team Loaded"
    );

})();