/* =====================================================
   NEXORA CONTACT PAGE JS
===================================================== */


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");
const successPopup = document.getElementById("successPopup");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        successPopup.classList.add("active");

        contactForm.reset();

    });

}


/* ================= CLOSE POPUP ================= */

function closePopup() {

    if (successPopup) {

        successPopup.classList.remove("active");

    }

}


/* ================= CLOSE POPUP OUTSIDE ================= */

if (successPopup) {

    successPopup.addEventListener("click", function (e) {

        if (e.target === successPopup) {

            closePopup();

        }

    });

}


/* ================= CURRENT YEAR ================= */

const yearElement = document.querySelector(".footer-bottom p");

if (yearElement) {

    yearElement.innerHTML =
        `© ${new Date().getFullYear()} NEXORA. All rights reserved.`;

}


/* ================= PAGE LOAD ANIMATION ================= */

document.addEventListener("DOMContentLoaded", function () {

    document.body.classList.add("page-loaded");

});