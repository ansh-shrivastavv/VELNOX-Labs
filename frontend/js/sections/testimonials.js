/* ================= TESTIMONIAL SLIDER ================= */

const testimonialTrack =
    document.getElementById("testimonialTrack");

const testimonialPrev =
    document.getElementById("testimonialPrev");

const testimonialNext =
    document.getElementById("testimonialNext");

const testimonialDots =
    document.querySelectorAll("#testimonialDots span");

const testimonialCards =
    document.querySelectorAll(".testimonial-card");

let testimonialIndex = 0;


/* GET SLIDE WIDTH */

function getSlideWidth() {

    const card = testimonialCards[0];

    const gap = 20;

    return card.offsetWidth + gap;

}


/* UPDATE SLIDER */

function updateTestimonials() {

    const slideWidth = getSlideWidth();

    testimonialTrack.style.transform =
        `translateX(-${testimonialIndex * slideWidth}px)`;


    testimonialDots.forEach(dot => {

        dot.classList.remove("active");

    });

    testimonialDots[testimonialIndex].classList.add("active");

}


/* NEXT */

testimonialNext.addEventListener("click", () => {

    const maxIndex =
        window.innerWidth <= 700
            ? testimonialCards.length - 1
            : testimonialCards.length - 2;

    if (testimonialIndex < maxIndex) {

        testimonialIndex++;

    } else {

        testimonialIndex = 0;

    }

    updateTestimonials();

});


/* PREVIOUS */

testimonialPrev.addEventListener("click", () => {

    if (testimonialIndex > 0) {

        testimonialIndex--;

    } else {

        testimonialIndex =
            window.innerWidth <= 700
                ? testimonialCards.length - 1
                : testimonialCards.length - 2;

    }

    updateTestimonials();

});


/* DOT CLICK */

testimonialDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        testimonialIndex = index;

        updateTestimonials();

    });

});


/* RESIZE */

window.addEventListener("resize", () => {

    updateTestimonials();

});