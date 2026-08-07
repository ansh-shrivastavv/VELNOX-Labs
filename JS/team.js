//=============================
// TEAM SECTION ANIMATION
//=============================

const teamCards = document.querySelectorAll(".team-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });
  },
  {
    threshold: 0.2,
  }
);

teamCards.forEach((card, index) => {

  card.style.transitionDelay = `${index * 0.15}s`;

  observer.observe(card);

});