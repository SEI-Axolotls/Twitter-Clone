import axios from "axios";

const api = axios.create({
  baseURL: "https://sei-axolotls-api.herokuapp.com"
});

export default api;