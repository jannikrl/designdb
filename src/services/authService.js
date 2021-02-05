import { axios, addTokenAsDefault, removeTokenAsDefault } from "./baseService";

export const login = async (email, password) => {
  const params = {
    email: email,
    password: password,
  };

  const token = await axios
    .post("/login", params)
    .then((response) => response.data.token)
    .catch((error) => {
      throw new Error("authService login failed");
    });

  addTokenAsDefault(token);

  return token;
};

export const logout = async () => {
  await axios
    .post("/logout")
    .catch((error) => {
      throw new Error("authService logout failed");
    });

  removeTokenAsDefault();
};
