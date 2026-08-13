/* =========================================================
   VELNOX — CONTACT FORM
   Google Sheets / Apps Script Submission
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("velnoxContactForm");
    const submitBtn = document.getElementById("submitBtn");
    const submitText = document.getElementById("submitText");
    const formStatus = document.getElementById("formStatus");
    const iframe = document.getElementById("hidden_iframe");

    // Form doesn't exist on this page
    if (!form) return;

    let isSubmitting = false;


    /* =====================================================
       SUBMIT FORM
    ===================================================== */

    form.addEventListener("submit", () => {

        if (isSubmitting) {
            return;
        }

        isSubmitting = true;

        // Button state
        if (submitBtn) {
            submitBtn.disabled = true;
        }

        if (submitText) {
            submitText.textContent = "Sending...";
        }

        // Clear previous status
        if (formStatus) {
            formStatus.textContent = "";
            formStatus.className = "form-status";
        }


        /*
         * The form is submitted directly to
         * Google Apps Script using POST.
         *
         * hidden_iframe prevents the page
         * from redirecting to Google.
         */


        /* =================================================
           SUCCESS STATE
        ================================================= */

        setTimeout(() => {

            if (submitText) {
                submitText.textContent = "Request Sent ✓";
            }

            if (formStatus) {

                formStatus.textContent =
                    "Thanks! Your project request has been received.";

                formStatus.className =
                    "form-status success";
            }

            // Clear form
            form.reset();


            /* =============================================
               RESET BUTTON
            ============================================= */

            setTimeout(() => {

                if (submitText) {
                    submitText.textContent =
                        "Send Project Request";
                }

                if (formStatus) {
                    formStatus.textContent = "";
                    formStatus.className = "form-status";
                }

                if (submitBtn) {
                    submitBtn.disabled = false;
                }

                isSubmitting = false;

            }, 3500);

        }, 1500);

    });


    /* =====================================================
       INPUT FOCUS EFFECT
    ===================================================== */

    const inputs = form.querySelectorAll(
        "input, select, textarea"
    );

    inputs.forEach((input) => {

        input.addEventListener("focus", () => {
            input.parentElement.classList.add("is-focused");
        });

        input.addEventListener("blur", () => {
            input.parentElement.classList.remove("is-focused");
        });

    });


    /* =====================================================
       MESSAGE CHARACTER LIMIT
    ===================================================== */

    const message = document.getElementById("message");

    if (message) {

        message.setAttribute("maxlength", "2000");

        message.addEventListener("input", () => {

            if (message.value.length >= 2000) {

                if (formStatus) {

                    formStatus.textContent =
                        "Message limit reached.";

                    formStatus.className =
                        "form-status error";
                }

            } else {

                if (
                    formStatus &&
                    formStatus.classList.contains("error")
                ) {
                    formStatus.textContent = "";
                    formStatus.className = "form-status";
                }

            }

        });

    }


    /* =====================================================
       PHONE — BASIC CLEANUP
    ===================================================== */

    const phone = document.getElementById("phone");

    if (phone) {

        phone.addEventListener("input", () => {

            phone.value = phone.value.replace(
                /[^0-9+\-\s()]/g,
                ""
            );

        });

    }


    /* =====================================================
       GOOGLE IFRAME LOAD
    ===================================================== */

    if (iframe) {

        iframe.addEventListener("load", () => {

            /*
             * Google Apps Script response is loaded
             * inside the hidden iframe.
             *
             * We don't redirect the user.
             */

        });

    }

});