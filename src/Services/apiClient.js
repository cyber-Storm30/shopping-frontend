import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api",
  // baseURL: "http:localhost:5000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
