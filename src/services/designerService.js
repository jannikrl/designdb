import { axios } from "./baseService";
import { keysToCamelCase } from "../utils/utils";

export const fetchDesigners = async () => {
  const designers = await axios
    .get("/designers")
    .then((response) => response.data.map((design) => keysToCamelCase(design)))
    .catch((error) => {
      throw new Error("designerService getDesigners failed");
    });

  return designers;
};

export const fetchDesigner = async (id) => {
  const designer = await axios
    .get("/designers/" + id)
    .then((response) => keysToCamelCase(response.data))
    .catch((error) => {
      throw new Error("designerService getDesigner failed");
    });

  return designer;
};
