/* ========================================= */
/* NEXORA V2 | TRUSTED JAVASCRIPT             */
/* File: js/sections/trusted.js               */
/* ========================================= */


function initTrusted(){


    const trusted =
    document.querySelector("#trusted");


    if(!trusted) return;




    const logos =
    trusted.querySelectorAll(
        ".trusted-logo"
    );



    /* ===================================== */
    /* Logo Reveal Animation                 */
    /* ===================================== */


    logos.forEach(
        (logo,index)=>{


        logo.style.opacity="0";


        logo.style.transform=
        "translateY(20px)";



        setTimeout(()=>{


            logo.style.transition=
            "all .5s ease";


            logo.style.opacity="1";


            logo.style.transform=
            "translateY(0)";



        }, index * 100);



    });





    /* ===================================== */
    /* Add Loaded Class                      */
    /* ===================================== */


    trusted.classList.add(
        "loaded"
    );



}



/* ========================================= */
/* Export                                     */
/* ========================================= */


window.initTrusted =
initTrusted;