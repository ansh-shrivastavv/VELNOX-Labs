/* =========================================
   VELNOX — WEBSITE PRICE ESTIMATOR
   DEPLOYMENT SAFE VERSION
========================================= */

(function () {

    "use strict";


    /* =========================================
       INITIALIZE ESTIMATOR
    ========================================= */

    function initEstimator() {

        const estimator = document.querySelector("#estimator");

        /* Estimator page/section not loaded yet */
        if (!estimator) {
            return;
        }

        /* Prevent duplicate initialization */
        if (estimator.dataset.initialized === "true") {
            return;
        }

        estimator.dataset.initialized = "true";


        /* =========================================
           ELEMENTS
        ========================================= */

        const typeOptions = estimator.querySelectorAll(
            ".estimate-options:not(.estimate-pages) .estimate-option"
        );

        const pageOptions = estimator.querySelectorAll(
            ".estimate-pages .estimate-option"
        );

        const featureInputs = estimator.querySelectorAll(
            ".estimate-check input"
        );

        const priceElement = estimator.querySelector(
            "#estimatedPrice"
        );

        const summaryType = estimator.querySelector(
            "#summaryType"
        );

        const summaryExtras = estimator.querySelector(
            "#summaryExtras"
        );


        /* =========================================
           SAFETY CHECK
        ========================================= */

        if (
            !typeOptions.length &&
            !pageOptions.length &&
            !featureInputs.length
        ) {
            console.warn(
                "VELNOX Estimator: controls not found."
            );

            estimator.dataset.initialized = "false";

            return;
        }


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

            return Number(price).toLocaleString(
                "en-IN"
            );

        }


        /* =========================================
           CALCULATE PRICE
        ========================================= */

        function calculatePrice() {

            let total = basePrice + pagePrice;

            const selectedFeatures = [];


            /* =====================================
               FEATURES
            ===================================== */

            featureInputs.forEach(function (input) {

                if (!input.checked) {
                    return;
                }


                const featurePrice =
                    Number(input.value) || 0;

                total += featurePrice;


                const featureName =
                    input.dataset.feature ||
                    input.parentElement
                        ?.querySelector("strong")
                        ?.textContent
                        ?.trim();


                if (featureName) {

                    selectedFeatures.push(
                        featureName
                    );

                }

            });


            /* =====================================
               PRICE
            ===================================== */

            if (priceElement) {

                priceElement.textContent =
                    formatPrice(total);

            }


            /* =====================================
               SUMMARY TYPE
            ===================================== */

            if (summaryType) {

                summaryType.textContent =
                    selectedType;

            }


            /* =====================================
               SUMMARY EXTRAS
            ===================================== */

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

        typeOptions.forEach(function (option) {

            option.addEventListener(
                "click",
                function () {


                    /* Remove old active */

                    typeOptions.forEach(
                        function (item) {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    /* Add active */

                    option.classList.add(
                        "active"
                    );


                    /* Get price */

                    basePrice =
                        Number(
                            option.dataset.price
                        ) || 8000;


                    /* Get title */

                    const title =
                        option.querySelector(
                            "strong"
                        );


                    if (title) {

                        selectedType =
                            title.textContent.trim();

                    }


                    calculatePrice();

                }
            );

        });


        /* =========================================
           NUMBER OF PAGES
        ========================================= */

        pageOptions.forEach(function (option) {

            option.addEventListener(
                "click",
                function () {


                    /* Remove old active */

                    pageOptions.forEach(
                        function (item) {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    /* Add active */

                    option.classList.add(
                        "active"
                    );


                    /* Get page price */

                    pagePrice =
                        Number(
                            option.dataset.price
                        ) || 0;


                    calculatePrice();

                }
            );

        });


        /* =========================================
           FEATURES
        ========================================= */

        featureInputs.forEach(function (input) {

            input.addEventListener(
                "change",
                calculatePrice
            );

        });


        /* =========================================
           INITIAL ACTIVE TYPE
        ========================================= */

        const activeType =
            estimator.querySelector(
                ".estimate-options:not(.estimate-pages) .estimate-option.active"
            );


        if (activeType) {

            basePrice =
                Number(
                    activeType.dataset.price
                ) || 8000;


            const title =
                activeType.querySelector(
                    "strong"
                );


            if (title) {

                selectedType =
                    title.textContent.trim();

            }

        }


        /* =========================================
           INITIAL ACTIVE PAGE
        ========================================= */

        const activePage =
            estimator.querySelector(
                ".estimate-pages .estimate-option.active"
            );


        if (activePage) {

            pagePrice =
                Number(
                    activePage.dataset.price
                ) || 0;

        }


        /* =========================================
           INITIAL CALCULATION
        ========================================= */

        calculatePrice();


        console.log(
            "VELNOX Estimator initialized successfully."
        );

    }


    /* =========================================
       NORMAL PAGE LOAD
    ========================================= */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initEstimator
        );

    } else {

        initEstimator();

    }


    /* =========================================
       DYNAMIC HTML SUPPORT
       Useful if estimator.html is loaded
       using fetch() / innerHTML.
    ========================================= */

    const observer =
        new MutationObserver(function () {

            if (
                document.querySelector(
                    "#estimator"
                )
            ) {

                initEstimator();

            }

        });


    observer.observe(
        document.documentElement,
        {
            childList: true,
            subtree: true
        }
    );


    /* =========================================
       GLOBAL MANUAL INITIALIZER
       ========================================= */

    window.initVelnoxEstimator =
        initEstimator;


})();