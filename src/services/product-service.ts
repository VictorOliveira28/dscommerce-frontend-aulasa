import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findAll() {
    return axios.get(`${BASE_URL}/products?page=0&size=12&sort=name,desc`)
}

export function findById(id: number){
    return axios.get(`${BASE_URL}/products/${id}`);
}

