import { axios } from "./baseService";

export const login = async (email: string, password: string) => {
  const params = {
    email: email,
    password: password,
  };

  const token = await axios
    .post("/login", params)
    .then((response) => {
      const token = response.data.token as string;
      const expiryDate = new Date().setFullYear(new Date().getFullYear() + 1);
      localStorage.setItem("token", token);
      localStorage.setItem("expiryDate", expiryDate.toString());
      return token;
    })
    .catch(() => {
      throw new Error("authService login failed");
    });

  return token;
};

export const isLocalStorageTokenValid = () => {
  const token = localStorage.getItem("token");
  const expiryDate = localStorage.getItem("expiryDate");
  const isTokenExpiried = expiryDate ? +expiryDate < Date.now() : true;
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
};
