import { axios } from "./baseService";
import { keysToCamelCase } from "../utils/utils";

export const fetchManufacturer = async (id) => {
  const manufacturer = await axios
    .get("/manufacturers/" + id)
    .then((response) => keysToCamelCase(response.data))
    .catch((error) => {
      throw new Error("manufacturerService getManufacturer failed");
    });

  return manufacturer;
};
