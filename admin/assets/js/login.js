// ==========================
// NEXORA Admin Login
// ==========================

const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const error = document.getElementById("error");
const loginBtn = document.querySelector(".login-btn");

// ==========================
// Show / Hide Password
// ==========================

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.textContent = "🙈";

    } else {

        password.type = "password";
        togglePassword.textContent = "👁";

    }

});


// ==========================
// Login
// ==========================

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    error.textContent = "";

    const user = username.value.trim();
    const pass = password.value.trim();

    if (!user || !pass) {

        error.textContent = "Please fill all fields.";
        return;

    }

    loginBtn.disabled = true;
    loginBtn.textContent = "Logging in...";

    try {

        const response = await fetch("http://127.0.0.1:8000/auth/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                email: user,
                password: pass

            })

        });

        const result = await response.json();

        if (response.ok && result.success) {

            localStorage.setItem("adminLoggedIn", "true");

            if (result.admin) {
                localStorage.setItem(
                    "admin",
                    JSON.stringify(result.admin)
                );
            }

            if (result.token) {
                localStorage.setItem(
                    "token",
                    result.token
                );
            }

            window.location.href = "dashboard.html";

        } else {

            error.textContent =
                result.message || "Invalid email or password.";

            loginBtn.disabled = false;
            loginBtn.textContent = "Login";

        }

    } catch (err) {

        console.error(err);

        error.textContent = "Unable to connect to backend server.";

        loginBtn.disabled = false;
        loginBtn.textContent = "Login";

    }

});