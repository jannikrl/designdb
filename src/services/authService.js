import { axios, addTokenAsDefault, removeTokenAsDefault } from "./baseService";

export const login = async (email, password) => {
  const params = {
    email: email,
    password: password,
  };

  const token = await axios
    .post("/login", params)
    .then((response) => {
      const token = response.data.token;
      const expiryDate = new Date().setFullYear(new Date().getFullYear() + 1);
      localStorage.setItem("token", token);
      localStorage.setItem("expiryDate", expiryDate);
      return token;
    })
    .catch((error) => {
      throw new Error("authService login failed");
    });

  addTokenAsDefault(token);

  return token;
};

export const isLocalStorageTokenValid = () => {
  const token = localStorage.getItem("token");
  const expiryDate = localStorage.getItem("expiryDate");
  const isTokenExpiried = expiryDate < new Date();
  if (!token || isTokenExpiried) {
    return false;
  }
  return true;
};

export const getLocalStorageToken = () => {
  return localStorage.getItem("token");
};

export const removeLocalStorageToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiryDate");
};

export const logout = async () => {
  await axios.post("/logout").catch((error) => {
    throw new Error("authService logout failed");
  });

  removeTokenAsDefault();
};
