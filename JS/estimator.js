document.addEventListener("DOMContentLoaded", () => {

    const typeOptions = document.querySelectorAll(
        ".estimate-options:not(.estimate-pages) .estimate-option"
    );

    const pageOptions = document.querySelectorAll(
        ".estimate-pages .estimate-option"
    );

    const featureInputs = document.querySelectorAll(
        ".estimate-check input"
    );

    const priceElement =
        document.getElementById("estimatedPrice");

    const summaryType =
        document.getElementById("summaryType");

    const summaryExtras =
        document.getElementById("summaryExtras");


    let basePrice = 8000;
    let pagePrice = 0;
    let selectedType = "Business Website";


    function formatPrice(price) {

        return price.toLocaleString("en-IN");

    }


    function calculatePrice() {

        let total = basePrice + pagePrice;

        let selectedFeatures = [];


        featureInputs.forEach(input => {

            if (input.checked) {

                total += Number(input.value);

                selectedFeatures.push(
                    input.dataset.feature
                );

            }

        });


        priceElement.textContent =
            formatPrice(total);


        summaryType.textContent =
            selectedType;


        summaryExtras.textContent =
            selectedFeatures.length
                ? selectedFeatures.join(", ")
                : "None";

    }


    /* WEBSITE TYPE */

    typeOptions.forEach(option => {

        option.addEventListener("click", () => {

            typeOptions.forEach(item => {
                item.classList.remove("active");
            });

            option.classList.add("active");

            basePrice =
                Number(option.dataset.price);

            selectedType =
                option.querySelector("strong").textContent;

            calculatePrice();

        });

    });


    /* PAGES */

    pageOptions.forEach(option => {

        option.addEventListener("click", () => {

            pageOptions.forEach(item => {
                item.classList.remove("active");
            });

            option.classList.add("active");

            pagePrice =
                Number(option.dataset.price);

            calculatePrice();

        });

    });


    /* FEATURES */

    featureInputs.forEach(input => {

        input.addEventListener(
            "change",
            calculatePrice
        );

    });


    calculatePrice();

});