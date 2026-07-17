/* ================= SERVICES ANIMATION ================= */

const serviceCards = document.querySelectorAll(".service-card");

const serviceObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            serviceObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


serviceCards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    serviceObserver.observe(card);

});