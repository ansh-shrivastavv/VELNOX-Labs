async function loadComponent(selector, file) {

    const element = document.querySelector(selector);

    if (!element) return;

    const response = await fetch(file);

    element.innerHTML = await response.text();

}

loadComponent("#sidebar", "components/sidebar.html");
loadComponent("#topbar", "components/topbar.html");