/*======================================
        VELNOX CONTACT
======================================*/

const contactCards = document.querySelectorAll(".contact-card");
const contactLeft = document.querySelector(".contact-left");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

observer.observe(contactLeft);

contactCards.forEach((card) => {
    observer.observe(card);
});


/*======================================
        CARD TILT EFFECT
======================================*/

contactCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = ((y / rect.height) - 0.5) * -8;

        card.style.transform = `
            perspective(900px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateX(12px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});