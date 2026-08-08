document.addEventListener("DOMContentLoaded", () => {

    const founder = document.querySelector(".founder");

    if (!founder) return;

    const image = founder.querySelector(".founder-image img");

    founder.addEventListener("mousemove", (e) => {

        if (window.innerWidth <= 800 || !image) return;

        const rect = founder.getBoundingClientRect();

        const x =
            ((e.clientX - rect.left) / rect.width - .5) * 5;

        const y =
            ((e.clientY - rect.top) / rect.height - .5) * 5;

        image.style.transform =
            `scale(1.04) translate(${x}px, ${y}px)`;

    });

    founder.addEventListener("mouseleave", () => {

        if (!image) return;

        image.style.transform =
            "scale(1) translate(0,0)";

    });

});