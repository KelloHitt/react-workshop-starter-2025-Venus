const BASE_URL = import.meta.env.VITE_API_BASE_URL; // retrieving the VITE_API_BASE_URL from the .env file

export async function retrieveContacts() {
    const response = await fetch(BASE_URL);
    const data = await response.json(); // Grabs the json data from response variable
    return data;
}