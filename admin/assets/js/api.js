const API_URL = "http://127.0.0.1:8000";

async function api(endpoint, method = "GET", data = null, token = null) {

    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {
        options.headers["Authorization"] = `Bearer ${token}`;
    }

    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(API_URL + endpoint, options);

    return await response.json();
}