document.addEventListener("DOMContentLoaded", function () {

    const openBtn = document.getElementById("openProjectModal");
    const modal = document.getElementById("projectModal");
    const closeBtn = document.getElementById("projectModalClose");
    const overlay = document.getElementById("projectModalOverlay");


    if (!openBtn || !modal) {
        console.log("VELNOX Modal: Button ya Modal nahi mila.");
        return;
    }


    // OPEN
    openBtn.addEventListener("click", function () {

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });


    // CLOSE
    closeBtn.addEventListener("click", function () {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    });


    // OVERLAY CLICK
    overlay.addEventListener("click", function () {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    });


    // ESC KEY
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            modal.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

});