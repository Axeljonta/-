//service/productService.js
import axios from "axios";

const API = "http://localhost:8080/cars";

export const createCar = async (carData) => {
    try {
        const res = await axios.post(API, carData);
        return res.data;
    } catch (error) {
        console.error("Error creating car:", error);
        throw error.response?.data || "Error al añadir auto";
    }
}