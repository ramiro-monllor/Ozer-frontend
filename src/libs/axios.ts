// Package Imports
import axios from "axios";

// Util Imports
import { baseUrl } from "./endpoints"

export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});