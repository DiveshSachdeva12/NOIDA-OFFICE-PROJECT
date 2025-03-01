import axios from "axios";

const BASE_URL = "http://localhost:5000/api"; // Backend URL

export const getTours = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/tours`);
        return response.data;
    } catch (error) {
        console.error("Error fetching tours:", error);
        return [];
    }
};
