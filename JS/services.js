/*=========================================
        VELNOX SERVICES ANIMATION
=========================================*/

const serviceCards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

serviceCards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(60px)";
    card.style.transition =
        `all .8s ease ${index * 0.12}s`;

    observer.observe(card);

});

serviceCards.forEach(card => {

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
            translateY(-12px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

document.addEventListener("scroll", () => {

    document.querySelectorAll(".service-card.show").forEach(card => {

        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    });

});