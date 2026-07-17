/* ================= ABOUT SECTION JS ================= */

const aboutSection = document.querySelector(".about-section");

const aboutObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            aboutSection.classList.add("about-visible");

        }

    });

}, {
    threshold: 0.2
});

if (aboutSection) {

    aboutObserver.observe(aboutSection);

}