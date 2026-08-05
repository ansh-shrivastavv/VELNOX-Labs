/* =========================================
   VELNOX 3D ABOUT INTERACTION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const scene =
        document.querySelector(".material-scene");

    const cube =
        document.querySelector(".glass-cube");

    const orb =
        document.querySelector(".chrome-orb");

    const panels =
        document.querySelectorAll(".material-panel");

    if (!scene) return;


    scene.addEventListener("mousemove", (e) => {

        const rect =
            scene.getBoundingClientRect();

        const x =
            (e.clientX - rect.left) /
            rect.width - .5;

        const y =
            (e.clientY - rect.top) /
            rect.height - .5;


        /* Cube */

        if (cube) {

            cube.style.transform = `
                translate(-50%, -50%)
                rotateX(${-18 + y * 12}deg)
                rotateY(${-28 + x * 18}deg)
            `;

        }


        /* Orb */

        if (orb) {

            orb.style.marginLeft =
                `${x * 22}px`;

            orb.style.marginTop =
                `${y * 22}px`;

        }


        /* Glass panels */

        panels.forEach((panel, index) => {

            const depth =
                index === 0 ? 12 : -12;

            panel.style.transform = `
                translateZ(100px)
                translate(
                    ${x * depth}px,
                    ${y * depth}px
                )
            `;

        });

    });


    scene.addEventListener("mouseleave", () => {

        if (cube) {

            cube.style.transform = `
                translate(-50%, -50%)
                rotateX(-18deg)
                rotateY(-28deg)
            `;

        }

        if (orb) {

            orb.style.marginLeft = "0px";
            orb.style.marginTop = "0px";

        }

        panels.forEach((panel, index) => {

            const rotate =
                index === 0 ? "-8deg" : "8deg";

            panel.style.transform = `
                translateZ(100px)
                rotateY(${rotate})
            `;

        });

    });


    /* =====================================
       REVEAL
    ===================================== */

    const revealElements =
        document.querySelectorAll(
            ".about-3d-header, .material-scene, .about-3d-content, .about-values"
        );

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "about-3d-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .15
            }
        );


    revealElements.forEach(element => {

        element.classList.add(
            "about-3d-hidden"
        );

        observer.observe(element);

    });

});