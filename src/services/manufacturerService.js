import { axios } from "./baseService";
import { keysToCamelCase } from "../utils/utils";

export const fetchManufacturers = async () => {
    const manufacturers = await axios
      .get("/manufacturers")
      .then((response) => response.data.map((design) => keysToCamelCase(design)))
      .catch((error) => {
        throw new Error("manufacturerService getManufacturers failed");
      });
  
    return manufacturers;
  };

export const fetchManufacturer = async (id) => {
  const manufacturer = await axios
    .get("/manufacturers/" + id)
    .then((response) => keysToCamelCase(response.data))
    .catch((error) => {
      throw new Error("manufacturerService getManufacturer failed");
    });

  return manufacturer;
};
