/* =========================================
   VELNOX HERO INTERACTION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const ecosystem =
        document.querySelector(".ecosystem");

    const core =
        document.querySelector(".eco-core");

    const services =
        document.querySelectorAll(".eco-service");

    const glow =
        document.querySelector(".ecosystem-glow");

    if (!ecosystem) return;


    /* =====================================
       MOUSE 3D
    ===================================== */

    ecosystem.addEventListener("mousemove", (e) => {

        const rect =
            ecosystem.getBoundingClientRect();

        const x =
            (e.clientX - rect.left) /
            rect.width - 0.5;

        const y =
            (e.clientY - rect.top) /
            rect.height - 0.5;

        const rotateX = y * -4;
        const rotateY = x * 4;

        ecosystem.style.transform = `
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;


        /* Mouse glow */

        if (glow) {

            glow.style.left =
                `${e.clientX - rect.left - 240}px`;

            glow.style.top =
                `${e.clientY - rect.top - 240}px`;

        }

    });


    ecosystem.addEventListener("mouseleave", () => {

        ecosystem.style.transform = `
            perspective(1200px)
            rotateX(0deg)
            rotateY(0deg)
        `;

    });


    /* =====================================
       SERVICE HOVER
    ===================================== */

    services.forEach(service => {

        service.addEventListener("mouseenter", () => {

            services.forEach(item => {

                item.style.opacity =
                    item === service
                        ? "1"
                        : ".35";

            });

            core.style.transform =
                "translate(-50%, -50%) scale(1.08)";

        });


        service.addEventListener("mouseleave", () => {

            services.forEach(item => {

                item.style.opacity = "1";

            });

            core.style.transform =
                "translate(-50%, -50%) scale(1)";

        });

    });


    /* =====================================
       RANDOM MICRO MOVEMENT
    ===================================== */

    let start = performance.now();

    function animate(time) {

        const elapsed =
            (time - start) / 1000;

        const floating =
            Math.sin(elapsed * 1.2) * 3;

        if (!ecosystem.matches(":hover")) {

            ecosystem.style.marginTop =
                `${floating}px`;

        }

        requestAnimationFrame(animate);

    }

    requestAnimationFrame(animate);


    /* =====================================
       SERVICE REVEAL
    ===================================== */

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            entry.target.classList.contains(
                                "service-ai"
                            )
                            ? "translateX(-50%)"
                            : "translateY(0)";

                    }

                });

            },
            {
                threshold: .2
            }
        );


    services.forEach(service => {

        service.style.opacity = "0";

        service.style.transform =
            service.classList.contains("service-ai")
            ? "translateX(-50%) translateY(15px)"
            : "translateY(15px)";

        observer.observe(service);

    });

});