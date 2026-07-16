/* ========================================= */
/* NEXORA V2 | GLOBAL JAVASCRIPT             */
/* File: js/global.js                        */
/* ========================================= */


/* ========================================= */
/* Global App Object                         */
/* ========================================= */


window.NEXORA = {


    version: "2.0.0",


    initialized: false,


    utils: {}



};



/* ========================================= */
/* Smooth Scroll Utility                     */
/* ========================================= */


NEXORA.utils.smoothScroll = function(target){


    const element =
    document.querySelector(target);



    if(element){


        element.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });


    }


};





/* ========================================= */
/* Debounce Function                         */
/* ========================================= */


NEXORA.utils.debounce =
function(func, delay){


    let timer;


    return function(...args){


        clearTimeout(timer);


        timer =
        setTimeout(()=>{


            func.apply(
                this,
                args
            );


        }, delay);



    };


};





/* ========================================= */
/* Check Mobile Device                       */
/* ========================================= */


NEXORA.utils.isMobile =
function(){


    return window.innerWidth <= 768;


};





/* ========================================= */
/* Lazy Load Images                          */
/* ========================================= */


function initLazyImages(){


    const images =
    document.querySelectorAll(
        "img[data-src]"
    );



    if(
        "IntersectionObserver"
        in window
    ){


        const observer =
        new IntersectionObserver(
            entries=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    const img =
                    entry.target;


                    img.src =
                    img.dataset.src;


                    img.removeAttribute(
                        "data-src"
                    );


                    observer.unobserve(img);


                }


            });



        });



        images.forEach(img=>{


            observer.observe(img);


        });



    }

}





/* ========================================= */
/* Footer Year Update                        */
/* ========================================= */


function updateCopyrightYear(){


    const year =
    document.querySelector(
        ".current-year"
    );



    if(year){


        year.textContent =
        new Date()
        .getFullYear();


    }


}





/* ========================================= */
/* Scroll Reveal Observer                    */
/* ========================================= */


function initReveal(){


    const elements =
    document.querySelectorAll(
        "[data-reveal]"
    );



    if(
        !"IntersectionObserver"
        in window
    ){

        elements.forEach(el=>{

            el.classList.add(
                "revealed"
            );

        });


        return;

    }




    const observer =
    new IntersectionObserver(
        entries=>{


        entries.forEach(entry=>{


            if(
                entry.isIntersecting
            ){


                entry.target.classList.add(
                    "revealed"
                );


                observer.unobserve(
                    entry.target
                );


            }


        });


    },
    {

        threshold:0.15

    });




    elements.forEach(el=>{


        observer.observe(el);


    });


}





/* ========================================= */
/* Page Ready                                */
/* ========================================= */


window.addEventListener(
    "load",
    ()=>{


        initLazyImages();


        initReveal();


        updateCopyrightYear();



        NEXORA.initialized =
        true;



        console.log(
            "NEXORA V2 Loaded 🚀"
        );


    }
);

/* ========================================= */
/* NEXORA V2 | GLOBAL ANIMATION              */
/* ========================================= */


window.addEventListener(
"load",
()=>{


    const loader =
    document.querySelector("#loader");


    const logo =
    document.querySelector(".loader-logo");



    const tl =
    gsap.timeline();



    tl.to(
        logo,
        {
            opacity:1,
            duration:.8,
            y:-10
        }
    )

    .to(
        logo,
        {
            opacity:0,
            duration:.5,
            delay:.3
        }
    )

    .to(
        loader,
        {
            yPercent:-100,
            duration:1,
            ease:"power4.inOut"
        }
    );


});

function gsapReveal(){


    gsap.from(
        ".section-title",
        {
            y:40,
            opacity:0,
            duration:1,
            stagger:.2
        }
    );


}


window.addEventListener(
"load",
()=>{

    setTimeout(()=>{

        gsapReveal();

    },1200);

});