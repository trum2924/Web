import axios from "axios";

const token = window.localStorage.getItem("token");
//console.log(token);
const testPort = "http://192.168.137.206:8888";
const axiosIntance = axios.create({
  baseURL: "https://be-production-9000.up.railway.app/api/",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default axiosIntance;
