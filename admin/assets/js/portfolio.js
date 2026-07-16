// =====================================
// NEXORA Portfolio Module
// =====================================

const STORAGE_KEY = "nexora_portfolio";

// =====================================
// Save Project
// =====================================

const portfolioForm = document.getElementById("portfolioForm");

if (portfolioForm) {

    portfolioForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("projectName").value.trim();

        const category = document.getElementById("projectCategory").value.trim();

        const image = document.getElementById("projectImage").value.trim();

        const link = document.getElementById("projectLink").value.trim();

        const status = document.getElementById("projectStatus").value;

        if (!name || !category || !image) {

            alert("Please fill all required fields.");

            return;

        }

        const projects = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

        projects.push({

            id: Date.now(),

            name,

            category,

            image,

            link,

            status

        });

        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));

        alert("Project Added Successfully.");

        window.location.href = "index.html";

    });

}

// =====================================
// Load Projects
// =====================================

const tableBody = document.querySelector("tbody");

if (tableBody) {

    const projects = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    tableBody.innerHTML = "";

    if (projects.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center;padding:20px;">
                    No Projects Found
                </td>
            </tr>
        `;

    }

    projects.forEach(project => {

        tableBody.innerHTML += `

        <tr>

            <td>

                <img src="${project.image}" class="project-img">

            </td>

            <td>${project.name}</td>

            <td>${project.category}</td>

            <td>

                <span class="status ${project.status === "Active" ? "active" : "hidden"}">

                    ${project.status}

                </span>

            </td>

            <td>

                <button
                    class="action-btn edit-btn"
                    onclick="editProject(${project.id})">

                    Edit

                </button>

                <button
                    class="action-btn delete-btn"
                    onclick="deleteProject(${project.id})">

                    Delete

                </button>

            </td>

        </tr>

        `;

    });

}

// =====================================
// Delete
// =====================================

function deleteProject(id){

    if(!confirm("Delete this project?")) return;

    let projects = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    projects = projects.filter(project => project.id !== id);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));

    location.reload();

}

// =====================================
// Edit
// =====================================

function editProject(id){

    localStorage.setItem("editProjectId", id);

    window.location.href = "edit.html";

}

console.log("Portfolio Module Loaded");