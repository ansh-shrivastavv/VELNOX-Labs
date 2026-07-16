// ======================================
// NEXORA Messages Module
// ======================================

const STORAGE_KEY = "nexora_messages";

// ======================================
// Load Messages
// ======================================

const tableBody = document.querySelector("tbody");

if (tableBody) {

    const messages = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    tableBody.innerHTML = "";

    if (messages.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="5" class="empty">
                    No Messages Found
                </td>
            </tr>
        `;

    }

    messages.forEach(message => {

        tableBody.innerHTML += `

        <tr>

            <td>${message.name}</td>

            <td>${message.phone}</td>

            <td>${message.email}</td>

            <td class="message">

                ${message.text}

            </td>

            <td>

                <button
                    class="delete-btn"
                    onclick="deleteMessage(${message.id})">

                    Delete

                </button>

            </td>

        </tr>

        `;

    });

}

// ======================================
// Delete Message
// ======================================

function deleteMessage(id){

    if(!confirm("Delete this message?")) return;

    let messages = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    messages = messages.filter(message => message.id !== id);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));

    location.reload();

}

console.log("Messages Module Loaded");