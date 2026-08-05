/*=========================================
        VELNOX WORKS SECTION
=========================================*/

const workCards = document.querySelectorAll(".work-card");


/*=========================================
        SCROLL REVEAL
=========================================*/

const workObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            entry.target.style.opacity = "1";
            entry.target.style.transform =
                "translateY(0)";

            workObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


/*=========================================
        INITIAL CARD STATE
=========================================*/

workCards.forEach((card, index) => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(70px)";

    card.style.transition =
        `opacity .8s ease ${index * 0.12}s,
         transform .8s cubic-bezier(.2,.8,.2,1) ${index * 0.12}s,
         border-color .4s ease,
         box-shadow .4s ease`;

    workObserver.observe(card);

});


/*=========================================
        MOUSE TILT EFFECT
=========================================*/

workCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;


        const rotateY =
            ((x / rect.width) - 0.5) * 7;

        const rotateX =
            ((y / rect.height) - 0.5) * -7;


        /*
            Hardware card gets slightly
            softer movement because it
            already has a 3D object.
        */

        if (
            card.classList.contains(
                "work-upcoming"
            )
        ) {

            card.style.transform = `
                perspective(1200px)
                rotateX(${rotateX * .45}deg)
                rotateY(${rotateY * .45}deg)
                translateY(-8px)
            `;

        } else {

            card.style.transform = `
                perspective(1200px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
            `;

        }

    });


    /*=====================================
          MOUSE LEAVE
    =====================================*/

    card.addEventListener("mouseleave", () => {

        if (
            card.classList.contains("show")
        ) {

            card.style.transform =
                "translateY(-0px)";

        } else {

            card.style.transform =
                "translateY(70px)";

        }

    });

});


/*=========================================
        HARDWARE WATCH
=========================================*/

const miniWatch =
    document.querySelector(".mini-watch");


if (miniWatch) {

    let watchTime = 0;

    function animateWatch() {

        watchTime += 0.02;

        /*
            Small floating movement.
            CSS also handles the rotation.
        */

        const floating =
            Math.sin(watchTime) * 5;

        miniWatch.style.marginTop =
            `${floating}px`;

        requestAnimationFrame(
            animateWatch
        );

    }

    animateWatch();

}


/*=========================================
        HARDWARE CARD MOUSE PARALLAX
=========================================*/

const hardwareCard =
    document.querySelector(
        ".work-upcoming"
    );


if (hardwareCard && miniWatch) {

    hardwareCard.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                hardwareCard.getBoundingClientRect();

            const x =
                (e.clientX - rect.left)
                / rect.width - 0.5;

            const y =
                (e.clientY - rect.top)
                / rect.height - 0.5;


            const moveX =
                x * 12;

            const moveY =
                y * 12;


            miniWatch.style.marginLeft =
                `${moveX}px`;

            miniWatch.style.marginTop =
                `${moveY}px`;

        }
    );


    hardwareCard.addEventListener(
        "mouseleave",
        () => {

            miniWatch.style.marginLeft =
                "0px";

            miniWatch.style.marginTop =
                "0px";

        }
    );

}


/*=========================================
        STATUS DOT
=========================================*/

const statusDot =
    document.querySelector(
        ".status-dot"
    );


if (statusDot) {

    setInterval(() => {

        statusDot.style.opacity =
            statusDot.style.opacity === "0.35"
                ? "1"
                : "0.35";

    }, 1000);

}


/*=========================================
        MOBILE PERFORMANCE
=========================================*/

if (window.matchMedia(
    "(max-width: 600px)"
).matches) {

    workCards.forEach(card => {

        card.style.transition =
            `opacity .7s ease,
             transform .7s ease`;

        card.addEventListener(
            "mousemove",
            () => {}
        );

    });

}