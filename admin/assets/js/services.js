let services = [

{
id:1,
name:"Web Development",
icon:"fa-solid fa-code",
status:"Active"
},

{
id:2,
name:"Video Editing",
icon:"fa-solid fa-video",
status:"Active"
},

{
id:3,
name:"Graphic Design",
icon:"fa-solid fa-palette",
status:"Active"
}

];



const serviceList =
document.getElementById("serviceList");




function loadServices(){


serviceList.innerHTML="";


services.forEach((service,index)=>{


serviceList.innerHTML += `


<tr>


<td>${index+1}</td>


<td>
${service.name}
</td>


<td>

<i class="${service.icon} icon"></i>

</td>



<td>

<span class="status">

${service.status}

</span>

</td>



<td>


<a href="edit.html?id=${service.id}"
class="action-btn edit">

Edit

</a>


<button 
onclick="deleteService(${index})"
class="action-btn delete">

Delete

</button>


</td>


</tr>



`;


});


}




function deleteService(index){

services.splice(index,1);

loadServices();

}



loadServices();

// ==========================================
// NEXORA Services Module
// ==========================================

// LocalStorage Key

const STORAGE_KEY = "nexora_services";



// ==========================================
// Save Service
// ==========================================

const serviceForm = document.getElementById("serviceForm");

if (serviceForm) {

    serviceForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("serviceName").value.trim();

        const icon = document.getElementById("serviceIcon").value.trim();

        const description = document.getElementById("serviceDescription").value.trim();

        const status = document.getElementById("serviceStatus").value;

        if (!name || !icon || !description) {

            alert("Please fill all fields.");

            return;

        }

        const services = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

        services.push({

            id: Date.now(),

            name,

            icon,

            description,

            status

        });

        localStorage.setItem(STORAGE_KEY, JSON.stringify(services));

        alert("Service Added Successfully.");

        window.location.href = "index.html";

    });

}



// ==========================================
// Load Services
// ==========================================

const tableBody = document.querySelector("tbody");

if (tableBody) {

    const services = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    tableBody.innerHTML = "";

    if (services.length === 0) {

        tableBody.innerHTML = `

            <tr>

                <td colspan="4" style="text-align:center; padding:25px;">

                    No Services Found

                </td>

            </tr>

        `;

    }

    services.forEach(service => {

        tableBody.innerHTML += `

            <tr>

                <td>

                    <i class="${service.icon}"></i>

                </td>

                <td>

                    ${service.name}

                </td>

                <td>

                    <span class="status ${service.status === "Active" ? "active" : "inactive"}">

                        ${service.status}

                    </span>

                </td>

                <td>

                    <button class="edit-btn"

                        onclick="editService(${service.id})">

                        Edit

                    </button>

                    <button class="delete-btn"

                        onclick="deleteService(${service.id})">

                        Delete

                    </button>

                </td>

            </tr>

        `;

    });

}



// ==========================================
// Delete
// ==========================================

function deleteService(id) {

    const confirmDelete = confirm("Delete this service?");

    if (!confirmDelete) return;

    let services = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    services = services.filter(service => service.id !== id);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(services));

    location.reload();

}



// ==========================================
// Edit (Temporary)
// ==========================================

localStorage.setItem("editServiceId", id);

window.location.href = "edit.html";


// ==========================================
// Console
// ==========================================

console.log("Services Module Loaded");

const editForm = document.getElementById("editForm");

if (editForm) {

    const id = Number(localStorage.getItem("editServiceId"));

    let services = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    const service = services.find(item => item.id === id);

    if (service) {

        document.getElementById("serviceName").value = service.name;

        document.getElementById("serviceIcon").value = service.icon;

        document.getElementById("serviceDescription").value = service.description;

        document.getElementById("serviceStatus").value = service.status;

    }

    editForm.addEventListener("submit", function (e) {

        e.preventDefault();

        service.name = document.getElementById("serviceName").value;

        service.icon = document.getElementById("serviceIcon").value;

        service.description = document.getElementById("serviceDescription").value;

        service.status = document.getElementById("serviceStatus").value;

        localStorage.setItem(STORAGE_KEY, JSON.stringify(services));

        localStorage.removeItem("editServiceId");

        alert("Service Updated Successfully");

        window.location.href = "index.html";

    });

}