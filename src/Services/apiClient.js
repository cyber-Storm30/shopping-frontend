import axios from "axios";

export const axiosClient = axios.create({
  baseURL: " https://pure-escarpment-80872.herokuapp.com/api",
  // baseURL: "http://localhost:5001/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
