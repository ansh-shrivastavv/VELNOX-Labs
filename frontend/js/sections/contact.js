const contactForm = document.getElementById("contactForm");

const successPopup = document.getElementById("successPopup");


contactForm.addEventListener("submit", function (e) {

    e.preventDefault();


    successPopup.classList.add("active");


    contactForm.reset();

});


function closePopup() {

    successPopup.classList.remove("active");

}