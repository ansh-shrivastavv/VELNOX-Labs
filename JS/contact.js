/* =========================================================
   VELNOX — CONTACT SYSTEM
   Google Apps Script Form Submission
========================================================= */

(() => {

    "use strict";


    const form =
        document.getElementById("contactForm");

    const submitButton =
        document.getElementById("contactSubmit");

    const status =
        document.getElementById("contactStatus");


    if (!form || !submitButton || !status) {

        console.log(
            "⚠ VELNOX Contact: Elements not found"
        );

        return;
    }


    form.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            const originalText =
                submitButton.innerHTML;


            submitButton.disabled = true;

            submitButton.innerHTML =
                "<span>Sending...</span><span>↗</span>";

            status.textContent = "";

            status.className =
                "contact-status";


            try {

                const formData =
                    new FormData(form);


                await fetch(
                    form.action,
                    {
                        method: "POST",
                        body: formData,
                        mode: "no-cors"
                    }
                );


                status.textContent =
                    "Your enquiry has been sent successfully.";

                status.classList.add(
                    "success"
                );


                form.reset();


            } catch (error) {

                console.error(
                    "Contact form error:",
                    error
                );


                status.textContent =
                    "Something went wrong. Please try again.";

                status.classList.add(
                    "error"
                );

            }


            submitButton.disabled = false;

            submitButton.innerHTML =
                originalText;

        }
    );


    console.log(
        "✓ VELNOX Contact Loaded"
    );

})();