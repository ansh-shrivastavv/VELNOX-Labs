/* ========================================= */
/* NEXORA V2 | MAIN CONTROLLER               */
/* ========================================= */

const sections = [

    {
        name: "navbar",
        html: "sections/navbar.html",
        css: "css/sections/navbar.css",
        js: "js/sections/navbar.js",
        init: "initNavbar"
    },

    {
        name: "hero",
        html: "sections/hero.html",
        css: "css/sections/hero.css",
        js: "js/sections/hero.js",
        init: "initHero"
    },

    {
        name: "trusted",
        html: "sections/trusted.html",
        css: "css/sections/trusted.css",
        js: "js/sections/trusted.js",
        init: "initTrusted"
    },

    {
        name: "about",
        html: "sections/about.html",
        css: "css/sections/about.css",
        js: "js/sections/about.js",
        init: "initAbout"
    },

    {
        name: "founder",
        html: "sections/founder.html",
        css: "css/sections/founder.css",
        js: "js/sections/founder.js",
        init: "initFounder"
    },

    {
        name: "services",
        html: "sections/services.html",
        css: "css/sections/services.css",
        js: "js/sections/services.js",
        init: "initServices"
    },

    {
        name: "portfolio",
        html: "sections/portfolio.html",
        css: "css/sections/portfolio.css",
        js: "js/sections/portfolio.js",
        init: "initPortfolio"
    },

    {
        name: "process",
        html: "sections/process.html",
        css: "css/sections/process.css",
        js: "js/sections/process.js",
        init: "initProcess"
    },

    {
        name: "pricing",
        html: "sections/pricing.html",
        css: "css/sections/pricing.css",
        js: "js/sections/pricing.js",
        init: "initPricing"
    },

    {
        name: "testimonials",
        html: "sections/testimonials.html",
        css: "css/sections/testimonials.css",
        js: "js/sections/testimonials.js",
        init: "initTestimonials"
    },

    {
        name: "contact",
        html: "sections/contact.html",
        css: "css/sections/contact.css",
        js: "js/sections/contact.js",
        init: "initContact"
    },

    {
        name: "footer",
        html: "sections/footer.html",
        css: "css/sections/footer.css",
        js: "js/sections/footer.js",
        init: "initFooter"
    }

];

const app = document.getElementById("app");


/* ========================= */
/* Load CSS */
/* ========================= */

function loadCSS(href){

    return new Promise(resolve=>{

        if(document.querySelector(`link[href="${href}"]`)){

            resolve();
            return;

        }

        const link=document.createElement("link");

        link.rel="stylesheet";

        link.href=href;

        link.onload=resolve;

        document.head.appendChild(link);

    });

}


/* ========================= */
/* Load JS */
/* ========================= */

function loadJS(src){

    return new Promise(resolve=>{

        if(document.querySelector(`script[src="${src}"]`)){

            resolve();
            return;

        }

        const script=document.createElement("script");

        script.src=src;

        script.onload=resolve;

        document.body.appendChild(script);

    });

}


/* ========================= */
/* Load HTML */
/* ========================= */

async function loadHTML(file){

    const response=await fetch(file);

    if(!response.ok){

        throw new Error(file);

    }

    return await response.text();

}


/* ========================= */
/* Load Section */
/* ========================= */

async function loadSection(section){

    await loadCSS(section.css);

    const html=await loadHTML(section.html);

    app.insertAdjacentHTML("beforeend",html);

    await loadJS(section.js);

    if(typeof window[section.init]==="function"){

        window[section.init]();

    }

}


/* ========================= */
/* Init Website */
/* ========================= */

(async()=>{

    for(const section of sections){

        await loadSection(section);

    }

})();