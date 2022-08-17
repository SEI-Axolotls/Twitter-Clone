import axios from "axios";

const api = axios.create({
  baseURL: "https://spitter-api.herokuapp.com/"
});

export default api;