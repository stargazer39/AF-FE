import axios from "axios";
import { API_ENDPOINT } from "../config";

export const login = async (data) => {
  const response = await axios.post(`${API_ENDPOINT}/api/auth/login`, data);
  return response;
};

export const register = async (data) => {
  const response = await axios.post(`${API_ENDPOINT}/api/auth/register`, data);
  return response;
};

export const verify = async (data) => {
  const response = await axios.post(
    `${API_ENDPOINT}/api/auth/register/verify`,
    data
  );
  return response;
};

export const updateUser = async (data) => {
  const response = await axios.post(`${API_ENDPOINT}/api/user/editUser`, data);
  return response;
};

export const getUser = async (data) => {
  const response = await axios.post(
    `${API_ENDPOINT}/api/user/getOneUser`,
    data
  );
  return response;
};
export const deleteUser = async (data) => {
  const response = await axios.post(`${API_ENDPOINT}/api/user/delete`, data);
  return response;
};
