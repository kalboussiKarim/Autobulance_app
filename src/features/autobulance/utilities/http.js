import axios from "axios";
export default axios.create({
  baseURL: "http://192.168.1.14:8000/api",
  headers: {
    Authorization: "Bearer 1|u4tdUzRyqwKtYVUH2va3V9m3ZG6bT57XeUVlIXiA",
    "Content-type": "application/json",
    Accept: "application/vnd.api+json",
  },
});
