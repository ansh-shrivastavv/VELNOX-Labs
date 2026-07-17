/* ================= PRICING CARD ANIMATION ================= */

const pricingCards = document.querySelectorAll(".pricing-card");

const pricingObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("pricing-visible");

            pricingObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


pricingCards.forEach(card => {

    pricingObserver.observe(card);

});