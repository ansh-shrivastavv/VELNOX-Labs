/* ================= PROCESS ANIMATION ================= */

const processItems = document.querySelectorAll(".process-item");

const processObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("process-visible");

            processObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.2
});


processItems.forEach(item => {

    processObserver.observe(item);

});