import { axios } from "./baseService";
import { keysToCamelCase } from "../utils/utils";

export const fetchDesignTypes = async () => {
  const types = await axios
    .get("/design-types")
    .then((response) => response.data.map((design) => keysToCamelCase(design)))
    .catch((error) => {
      throw new Error("designTypeService getTypes failed");
    });

  return types;
};