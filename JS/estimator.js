document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       ELEMENTS
    ========================================= */

    const typeOptions = document.querySelectorAll(
        ".estimate-options:not(.estimate-pages) .estimate-option"
    );

    const pageOptions = document.querySelectorAll(
        ".estimate-pages .estimate-option"
    );

    const featureInputs = document.querySelectorAll(
        ".estimate-check input"
    );

    const priceElement = document.getElementById(
        "estimatedPrice"
    );

    const summaryType = document.getElementById(
        "summaryType"
    );

    const summaryExtras = document.getElementById(
        "summaryExtras"
    );


    /* =========================================
       DEFAULT VALUES
    ========================================= */

    let basePrice = 8000;
    let pagePrice = 0;

    let selectedType = "Business Website";


    /* =========================================
       FORMAT PRICE
    ========================================= */

    function formatPrice(price) {

        return `₹${Number(price).toLocaleString("en-IN")}`;

    }


    /* =========================================
       CALCULATE PRICE
    ========================================= */

    function calculatePrice() {

        let total = basePrice + pagePrice;

        const selectedFeatures = [];


        /* FEATURES */

        featureInputs.forEach(input => {

            if (!input.checked) return;


            const featurePrice =
                Number(input.value) || 0;


            total += featurePrice;


            const featureName =
                input.dataset.feature ||
                input.closest(".estimate-check")
                    ?.querySelector("label")
                    ?.textContent
                    ?.trim();


            if (featureName) {

                selectedFeatures.push(
                    featureName
                );

            }

        });


        /* PRICE */

        if (priceElement) {

            priceElement.textContent =
                formatPrice(total);

        }


        /* SUMMARY TYPE */

        if (summaryType) {

            summaryType.textContent =
                selectedType;

        }


        /* SUMMARY EXTRAS */

        if (summaryExtras) {

            summaryExtras.textContent =
                selectedFeatures.length
                    ? selectedFeatures.join(", ")
                    : "None";

        }

    }


    /* =========================================
       WEBSITE TYPE
    ========================================= */

    typeOptions.forEach(option => {

        option.addEventListener("click", () => {


            /* Remove old active */

            typeOptions.forEach(item => {

                item.classList.remove("active");

            });


            /* Add active */

            option.classList.add("active");


            /* Get price */

            basePrice =
                Number(option.dataset.price) || 8000;


            /* Get title */

            const title =
                option.querySelector("strong");


            if (title) {

                selectedType =
                    title.textContent.trim();

            }


            calculatePrice();

        });

    });


    /* =========================================
       NUMBER OF PAGES
    ========================================= */

    pageOptions.forEach(option => {

        option.addEventListener("click", () => {


            /* Remove old active */

            pageOptions.forEach(item => {

                item.classList.remove("active");

            });


            /* Add active */

            option.classList.add("active");


            /* Get page price */

            pagePrice =
                Number(option.dataset.price) || 0;


            calculatePrice();

        });

    });


    /* =========================================
       FEATURES
    ========================================= */

    featureInputs.forEach(input => {

        input.addEventListener(
            "change",
            calculatePrice
        );

    });


    /* =========================================
       INITIAL ACTIVE OPTIONS
    ========================================= */

    const activeType =
        document.querySelector(
            ".estimate-options:not(.estimate-pages) .estimate-option.active"
        );


    if (activeType) {

        basePrice =
            Number(activeType.dataset.price) || 8000;


        const title =
            activeType.querySelector("strong");


        if (title) {

            selectedType =
                title.textContent.trim();

        }

    }


    const activePage =
        document.querySelector(
            ".estimate-pages .estimate-option.active"
        );


    if (activePage) {

        pagePrice =
            Number(activePage.dataset.price) || 0;

    }


    /* =========================================
       INITIAL CALCULATION
    ========================================= */

    calculatePrice();

});