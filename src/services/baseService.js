import ax from "axios";

export const axios = ax.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const addTokenAsDefault = (token) => {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
};

export const removeTokenAsDefault = () => {
    delete axios.defaults.headers.common["Authorization"];
}