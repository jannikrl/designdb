import { axios } from "./baseService";
import { keysToCamelCase, keysToSnakeCase } from "../utils/utils";
import { Designer } from "../store/designer/types";
import { DesignerFormValues } from "../components/Forms/DesignerForm/DesignerForm";

export const fetchDesigners = async () => {
  const designers = await axios
    .get("/designers")
    .then(
      (response) =>
        response.data.map((designer: Designer) =>
          keysToCamelCase(designer)
        ) as Designer[]
    )
    .catch((error) => {
      throw new Error("designerService getDesigners failed");
    });

  return designers;
};

export const fetchDesigner = async (id: number) => {
  const designer = await axios
    .get("/designers/" + id)
    .then((response) => keysToCamelCase(response.data) as Designer)
    .catch(() => {
      throw new Error("designerService getDesigner failed");
    });

  return designer;
};

export const createDesigner = async (values: DesignerFormValues) => {
  const designer = await axios
    .post("/designers", keysToSnakeCase(values))
    .then((response) => keysToCamelCase(response.data) as Designer)
    .catch((error) => {
      throw new Error("designerService createDesigner failed");
    });

  return designer;
};

// @Todo: Update with type DesignerFormValues
export const updateDesigner = async (values: any) => {
  const designer = await axios
    .put(`/designers/${values.id}`, keysToSnakeCase(values))
    .then((response) => keysToCamelCase(response.data) as Designer)
    .catch((error) => {
      throw new Error("designerService updateDesigner failed");
    });

  return designer;
};
