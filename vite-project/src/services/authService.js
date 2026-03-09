import axios from "axios";

const API = "http://localhost:8080/auth";

// LOGIN
export const loginApi = (data) => {
  return axios.post(`${API}/login`, data);
};

// SIGNUP
export const signupApi = (data) => {
  return axios.post(`${API}/signup`, data);
};

//CREATE ADMIN
export const createAdminApi = (data) => {

  const token = localStorage.getItem("token");
 console.log("JWT Token:", token);
  return axios.post(
    "http://localhost:8080/admin/createAdmin",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};