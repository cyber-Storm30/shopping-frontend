import axios from "axios";

export const axiosClient = axios.create({
  // baseURL: "https://murmuring-cliffs-20240.herokuapp.com/api",
  baseURL: "http://localhost:5000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
