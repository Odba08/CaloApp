import axios from "axios";
import { API_URL } from "../../../../../config";

const FoodApi = axios.create({
    baseURL: `${API_URL}`,
})

export {
    FoodApi
}