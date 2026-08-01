/*=========================================
        VELNOX WORKS SECTION
=========================================*/

const workCards = document.querySelectorAll(".work-card");

const workObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            workObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.2
});

workCards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(70px)";
    card.style.transition = `all .8s ease ${index * 0.12}s`;

    workObserver.observe(card);

});

/*==============================
      Mouse Tilt Effect
==============================*/

workCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((y / rect.height) - 0.5) * -10;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.02)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

        if (card.classList.contains("show")) {

            card.style.transform = "translateY(0)";

        }

    });

});

/*==============================
      Reveal Animation
==============================*/

document.addEventListener("scroll", () => {

    document.querySelectorAll(".work-card.show").forEach(card => {

        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    });

});