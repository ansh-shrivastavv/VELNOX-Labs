// =========================================
// NEXORA Dashboard V2
// =========================================

// Logout

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        const confirmLogout = confirm("Logout from Admin Panel?");

        if (!confirmLogout) return;

        localStorage.removeItem("adminLoggedIn");

        window.location.href = "login.html";

    });

}



// =========================================
// Greeting
// =========================================

const greeting = document.querySelector(".welcome h2");

if (greeting) {

    const hour = new Date().getHours();

    let text = "";

    if (hour < 12) {

        text = "Good Morning ☀️";

    }

    else if (hour < 17) {

        text = "Good Afternoon 🌤";

    }

    else {

        text = "Good Evening 🌙";

    }

    greeting.textContent = text;

}



// =========================================
// Current Date
// =========================================

const welcomeText = document.querySelector(".welcome p");

if (welcomeText) {

    const options = {

        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"

    };

    const today = new Date().toLocaleDateString("en-IN", options);

    welcomeText.innerHTML =

        `Welcome back to the NEXORA Admin Panel.<br>${today}`;

}



// =========================================
// Active Sidebar Link
// =========================================

const navLinks = document.querySelectorAll(".sidebar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});



// =========================================
// Quick Actions
// =========================================

const actionButtons = document.querySelectorAll(".action-grid button");

actionButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        alert(btn.innerText);

    });

});



// =========================================
// Notification Button
// =========================================

const notifyBtn = document.querySelector(".fa-bell");

if (notifyBtn) {

    notifyBtn.parentElement.addEventListener("click", () => {

        alert("No Notifications");

    });

}



// =========================================
// Profile Button
// =========================================

const profileBtn = document.querySelector(".fa-user");

if (profileBtn) {

    profileBtn.parentElement.addEventListener("click", () => {

        alert("Profile Coming Soon");

    });

}



// =========================================
// Mobile Sidebar
// =========================================

const sidebar = document.querySelector(".sidebar");

const menuBtn = document.getElementById("menuBtn");

if (menuBtn && sidebar) {

    menuBtn.addEventListener("click", () => {

        sidebar.classList.toggle("active");

    });

}



// =========================================
// Dashboard Loaded
// =========================================

console.log("NEXORA Dashboard Loaded Successfully 🚀");