import { axios } from "./baseService";
import { keysToCamelCase, keysToSnakeCase } from "../utils/utils";
import { Design } from "../store/design/types";
import { FilterOptions } from "../store/designs/types";
import { DesignFormValues } from "../components/Forms/DesignForm/DesignForm";

export const fetchDesign = async (id: number) => {
  const design = await axios
    .get("/designs/" + id)
    .then((response) => keysToCamelCase(response.data) as Design)
    .catch(() => {
      throw new Error("designService fetchDesign failed");
    });

  return design;
};

export const createDesign = async (values: DesignFormValues) => {
  const design = await axios
    .post("/designs", keysToSnakeCase(values))
    .then((response) => keysToCamelCase(response.data) as Design)
    .catch(() => {
      throw new Error("designService createDesign failed");
    });

  return design;
};

export const updateDesign = async (values: DesignFormValues) => {
  const design = await axios
    .put(`/designs/${values.id}`, keysToSnakeCase(values))
    .then((response) => keysToCamelCase(response.data) as Design)
    .catch((error) => {
      throw new Error("designService updateDesign failed");
    });

  return design;
};

export const fetchDesigns = async (filterOptions: FilterOptions) => {
  const queryParams = mapToQueryParams(filterOptions);
  const queryString = toQueryString(queryParams);
  const designs = await axios
    .get(`/designs?${queryString}`)
    .then((response) => {
      return response.data.map((design: Design) =>
        keysToCamelCase(design)
      ) as Design[];
    })
    .catch(() => {
      throw new Error("designService fetchDesigns failed");
    });

  return designs;
};

const mapToQueryParams = (filterOptions: FilterOptions) => {
  const queryParams: Record<string, string> = {};

  if (filterOptions.showFeatured) {
    queryParams["is-featured"] = filterOptions.showFeatured ? "1" : "0";
  }

  if (filterOptions.designer) {
    queryParams.designer = filterOptions.designer.toString();
  }

  if (filterOptions.manufacturer) {
    queryParams.manufacturer = filterOptions.manufacturer.toString();
  }

  if (filterOptions.type) {
    queryParams.type = filterOptions.type.toString();
  }

  return queryParams;
};

const toQueryString = (queryParams: Record<string, string>) => {
  return new URLSearchParams(queryParams).toString();
};
