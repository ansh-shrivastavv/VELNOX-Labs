/* ===================================================
   NEXORA TESTIMONIAL SLIDER
=================================================== */

const testimonialCards =
    document.querySelectorAll(".testimonial-card");

const testimonialDots =
    document.querySelectorAll(".dot");

const nextButton =
    document.querySelector(".next-btn");

const prevButton =
    document.querySelector(".prev-btn");


let currentTestimonial = 0;


/* SHOW TESTIMONIAL */

function showTestimonial(index) {

    testimonialCards.forEach((card, i) => {

        card.classList.toggle(
            "active",
            i === index
        );

    });


    testimonialDots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === index
        );

    });

}


/* NEXT */

nextButton.addEventListener("click", () => {

    currentTestimonial++;

    if (
        currentTestimonial >=
        testimonialCards.length
    ) {

        currentTestimonial = 0;

    }

    showTestimonial(currentTestimonial);

});


/* PREVIOUS */

prevButton.addEventListener("click", () => {

    currentTestimonial--;

    if (currentTestimonial < 0) {

        currentTestimonial =
            testimonialCards.length - 1;

    }

    showTestimonial(currentTestimonial);

});


/* DOT NAVIGATION */

testimonialDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentTestimonial = index;

        showTestimonial(currentTestimonial);

    });

});


/* AUTO SLIDER */

setInterval(() => {

    currentTestimonial++;

    if (
        currentTestimonial >=
        testimonialCards.length
    ) {

        currentTestimonial = 0;

    }

    showTestimonial(currentTestimonial);

}, 5000);