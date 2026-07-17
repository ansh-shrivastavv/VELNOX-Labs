/* ================= PROJECTS ANIMATION ================= */

const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("project-visible");

            projectObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


projectCards.forEach(card => {

    projectObserver.observe(card);

});