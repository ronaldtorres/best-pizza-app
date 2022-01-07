import axios from "axios";

const api = axios.create({
  baseURL: "https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/",
  // Any other propety useful for the api instance...
});

export default api;
