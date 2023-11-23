import axios from "axios";
export default axios.create({
  baseURL: "http://192.168.1.36:8000/api",
  headers: {
    Authorization: "Bearer 105|3ZW97R69Jd1K91Wr0872biGyjaWTSN3fkUM3hcVF",
    "Content-type": "application/json",
    Accept: "application/vnd.api+json",
  },
});
