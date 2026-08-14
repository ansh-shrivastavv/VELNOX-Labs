/* =========================================
   VELNOX FLOATING CONTACT
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const contactWidget =
            document.querySelector(
                ".floating-contact"
            );


        if (!contactWidget) {

            console.warn(
                "VELNOX floating contact not found."
            );

            return;
        }


        /* =====================================
           INSTAGRAM
        ===================================== */

        const instagramButton =
            contactWidget.querySelector(
                ".instagram-btn"
            );


        /* =====================================
           EMAIL
        ===================================== */

        const emailButton =
            contactWidget.querySelector(
                ".email-btn"
            );


        /* =====================================
           CLICK EFFECT
        ===================================== */

        [instagramButton, emailButton]
            .forEach(button => {

                if (!button) return;


                button.addEventListener(
                    "click",
                    () => {

                        button.classList.add(
                            "contact-clicked"
                        );


                        setTimeout(() => {

                            button.classList.remove(
                                "contact-clicked"
                            );

                        }, 300);

                    }
                );

            });

    }
);