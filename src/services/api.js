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
  async loadProduct({ page = 1, size, sort, order, search, gte, lte }) {
    const response = await axios.get(
      `${baseURL}/product?page=${page}${size ? `&size=${size}` : ""}${
        sort ? `&sort=${sort}` : ""
      }${order ? `&order=${order}` : ""}${search ? `&search=${search}` : ""}${
        gte ? `&gte=${gte}` : ""
      }${lte ? `&size=${lte}` : ""}`
    );

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async loadProductDetail(id) {
    const response = await axios.get(`${baseURL}/product/${id}`);

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async addProduct(productInfo) {
    const response = await axios.post(`${baseURL}/product`, productInfo);

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }
    console.log(response);
    return response.data;
  },
  async updateProductDetail(updateInfo) {
    const response = await axios.put(
      `${baseURL}/product/${updateInfo._id}`,
      updateInfo
    );

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }

    return response.data;
  },
  async deleteProduct(id) {
    const response = await axios.delete(`${baseURL}/product/${id}`);

    if (response.status !== 200) {
      throw new Error(response.data.msg);
    }
    console.log(response);
    return response.data;
  },
};

export default API;
