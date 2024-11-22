import axios from "axios";

const baseURL = "https://bloodlink1-backend1.onrender.com";

export default axios.create({ baseURL: baseURL });
