const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function retrieveContacts() {
    const response = await fetch();
    const data = await response.json(); // Grabs the json data from response variable
    return data;
}