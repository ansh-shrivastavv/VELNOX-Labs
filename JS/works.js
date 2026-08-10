document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".build-card");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("works-visible");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );


    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(35px)";

        card.style.transition =
            `opacity .7s ease ${index * 120}ms,
             transform .7s ease ${index * 120}ms,
             border-color .35s ease,
             background .35s ease`;

        observer.observe(card);

    });


    const style = document.createElement("style");

    style.textContent = `
        .build-card.works-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;

    document.head.appendChild(style);

});