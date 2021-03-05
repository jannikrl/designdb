import { axios } from "./baseService";
import { keysToCamelCase, keysToSnakeCase } from "../utils/utils";
import { Manufacturer } from "../store/manufacturer/types";
import { ManufacturerFormValues } from "../components/Forms/ManufacturerForm/ManufacturerForm";

export const fetchManufacturers = async () => {
  const manufacturers = await axios
    .get("/manufacturers")
    .then(
      (response) =>
        response.data.map((manufacturer: Manufacturer) =>
          keysToCamelCase(manufacturer)
        ) as Manufacturer[]
    )
    .catch((error) => {
      throw new Error("manufacturerService getManufacturers failed");
    });

  return manufacturers;
};

export const fetchManufacturer = async (id: number) => {
  const manufacturer = await axios
    .get("/manufacturers/" + id)
    .then((response) => keysToCamelCase(response.data) as Manufacturer)
    .catch(() => {
      throw new Error("manufacturerService getManufacturer failed");
    });

  return manufacturer;
};

export const createManufacturer = async (values: ManufacturerFormValues) => {
  const manufacturer = await axios
    .post("/manufacturers", keysToSnakeCase(values))
    .then((response) => keysToCamelCase(response.data) as Manufacturer)
    .catch(() => {
      throw new Error("manufacturerService createManufacturer failed");
    });

  return manufacturer;
};

export const updateManufacturer = async (values: ManufacturerFormValues) => {
  const manufacturer = await axios
    .put(`/manufacturers/${values.id}`, keysToSnakeCase(values))
    .then((response) => keysToCamelCase(response.data) as Manufacturer)
    .catch(() => {
      throw new Error("manufacturerService updateManufacturer failed");
    });

  return manufacturer;
};
