import axios from "axios";

const baseURL = "http://localhost:8080/api";

const API = {
  async loadUser() {
    const response = await axios.get(`${baseURL}/auth/admin`);

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async login(loginInfo) {
    const response = await axios.post(`${baseURL}/auth`, loginInfo);

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
};

export default API;
