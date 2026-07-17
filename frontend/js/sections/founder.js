/* ================= FOUNDER SECTION JS ================= */

const founderImage = document.querySelector(".founder-image");

if (founderImage) {

    founderImage.addEventListener("mousemove", (e) => {

        const rect = founderImage.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        founderImage.style.transform = `
            scale(1.04)
            translate(${x * 8}px, ${y * 8}px)
        `;

    });

    founderImage.addEventListener("mouseleave", () => {

        founderImage.style.transform = "scale(1)";

    });

}