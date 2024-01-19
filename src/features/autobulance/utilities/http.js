import axios from "axios";
import * as SecureStore from "expo-secure-store";
const getAuthToken = async () => {
  try {
    const token = await SecureStore.getItemAsync("token");

    return token;
  } catch (error) {
    console.error("Erreur lors de la récupération du jeton :", error);
    return null;
  }
};

const api = axios.create({
  baseURL: "http://192.168.1.23:8000/api",
  headers: {
    "Content-type": "application/json",
    Accept: "application/vnd.api+json",
  },
});
api.interceptors.request.use(async (config) => {
  const token = await getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default api;
