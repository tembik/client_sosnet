import axios from "axios";

export const getRequest = async (url, headers) => {
  return await axios.get("http://localhost:4000" + url, headers);
};

export const postRequest = async (url, data, headers) => {
  return await axios.post("http://localhost:4000" + url, data, headers);
};

export const putRequest = async (url, data, headers) => {
  return await axios.put("http://localhost:4000" + url, data, headers);
};

export const deleteRequest = async (url, headers) => {
  return await axios.delete("http://localhost:4000" + url, headers);
};
