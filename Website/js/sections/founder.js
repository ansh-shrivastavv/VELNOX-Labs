/* ===================================================
   FOUNDER SECTION JS
=================================================== */

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCounter = () => {

        const increment = target / 60;

        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCounter, 25);
        } else {
            counter.innerText = target;
        }

    };

    updateCounter();
};


const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            counters.forEach(counter => {
                startCounter(counter);
            });

            observer.disconnect();

        }

    });

}, {
    threshold: 0.4
});


const founderSection = document.querySelector(".founder-section");

if (founderSection) {
    observer.observe(founderSection);
}