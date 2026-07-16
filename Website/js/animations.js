/* ========================================= */
/* NEXORA ANIMATION SYSTEM                   */
/* GSAP + ScrollTrigger                      */
/* ========================================= */


/* Register GSAP Plugin */

gsap.registerPlugin(ScrollTrigger);



/* ========================================= */
/* GLOBAL REVEAL ANIMATION                   */
/* ========================================= */


function revealElements(){


    const elements = document.querySelectorAll(".reveal");



    elements.forEach((element)=>{


        gsap.to(element, {


            opacity: 1,


            y: 0,


            duration: 1,


            ease: "power3.out",



            scrollTrigger:{


                trigger: element,


                start: "top 85%",


                toggleActions: "play none none reverse"


            }



        });



    });



}




/* ========================================= */
/* PAGE INTRO ANIMATION                      */
/* ========================================= */


function pageIntro(){


    const intro = gsap.timeline();



    intro.from("body",{


        opacity:0,


        duration:0.8,


        ease:"power2.out"


    });



}




/* ========================================= */
/* IMAGE PARALLAX EFFECT                     */
/* ========================================= */


function imageParallax(){


    const images = document.querySelectorAll(".parallax");



    images.forEach((img)=>{


        gsap.to(img,{


            y:-50,


            ease:"none",



            scrollTrigger:{


                trigger:img,


                scrub:true


            }



        });



    });



}





/* ========================================= */
/* INITIALIZE ANIMATIONS                     */
/* ========================================= */


window.addEventListener("load",()=>{


    pageIntro();


    revealElements();


    imageParallax();



});