import axios from "axios";

const token = window.localStorage.getItem("token");
//console.log(token);
const testPort = "https://be-production-9000.up.railway.app";
const axiosIntance = axios.create({
  baseURL: "https://be-production-9000.up.railway.app/api/",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default axiosIntance;
