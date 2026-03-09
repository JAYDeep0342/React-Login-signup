import axios from "axios";

const API = "http://localhost:8080/auth";

export const loginApi = (data) => {
  return axios.post(`${API}/login`, data);

};

export const signupApi = (data) => {
  return axios.post(`${API}/signup`, data);
};