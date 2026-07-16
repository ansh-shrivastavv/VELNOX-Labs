/* ========================================= */
/* NEXORA LOADER SYSTEM                      */
/* Page Loading Animation                    */
/* ========================================= */


window.addEventListener("load", () => {


    const loader = document.getElementById("loader");



    if(loader){


        gsap.to(loader, {

            opacity: 0,

            duration: 1,

            ease: "power3.out",

            onComplete: () => {


                loader.style.display = "none";


                document.body.classList.add("loaded");


            }


        });


    }



});