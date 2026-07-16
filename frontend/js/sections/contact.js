/* =========================================
   NEXORA — CONTACT FORM JS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SELECT ELEMENTS
    ========================= */

    const form = document.getElementById("nxContactForm");

    const popup = document.getElementById("nxSuccessPopup");

    const closeBtn = document.getElementById("nxPopupClose");

    const doneBtn = document.getElementById("nxPopupDone");


    /* =========================
       SAFETY CHECK
    ========================= */

    if (!form || !popup) return;


    /* =========================
       FORM SUBMIT
    ========================= */

    form.addEventListener("submit", function (event) {

        // Stop page refresh
        event.preventDefault();

        // Stop any other submit event
        event.stopPropagation();


        const submitBtn = form.querySelector(
            ".nx-submit-btn"
        );


        /* =========================
           LOADING STATE
        ========================= */

        if (submitBtn) {

            submitBtn.disabled = true;

            submitBtn.innerHTML = `
                SENDING...
                <span>...</span>
            `;

        }


        /* =========================
           SHOW SUCCESS POPUP
        ========================= */

        setTimeout(() => {


            // Show popup
            popup.classList.add("show");


            // Stop background scrolling
            document.body.style.overflow = "hidden";


            // Clear form
            form.reset();


            // Reset button
            if (submitBtn) {

                submitBtn.disabled = false;

                submitBtn.innerHTML = `
                    SEND MESSAGE
                    <span>↗</span>
                `;

            }


        }, 800);

    });


    /* =========================
       CLOSE POPUP FUNCTION
    ========================= */

    function closePopup() {

        popup.classList.remove("show");

        document.body.style.overflow = "";

    }


    /* =========================
       CLOSE BUTTON
    ========================= */

    if (closeBtn) {

        closeBtn.addEventListener(
            "click",
            closePopup
        );

    }


    /* =========================
       DONE BUTTON
    ========================= */

    if (doneBtn) {

        doneBtn.addEventListener(
            "click",
            closePopup
        );

    }


    /* =========================
       CLICK OUTSIDE POPUP
    ========================= */

    popup.addEventListener(
        "click",
        function (event) {


            if (event.target === popup) {

                closePopup();

            }

        }
    );


    /* =========================
       ESC KEY
    ========================= */

    document.addEventListener(
        "keydown",
        function (event) {


            if (event.key === "Escape") {

                closePopup();

            }

        }
    );


});