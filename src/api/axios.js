import axios from "axios";

//  set the base url we will use for our API requests
const api = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

export default api;
