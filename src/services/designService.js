import { axios } from "./baseService";
import { keysToCamelCase, keysToSnakeCase } from "../utils/utils";

export const fetchDesign = async (id) => {
  const design = await axios
    .get("/designs/" + id)
    .then((response) => keysToCamelCase(response.data))
    .catch(() => {
      throw new Error("designService fetchDesign failed");
    });

  return design;
};

export const createDesign = async (values) => {
  const design = await axios
    .post('/designs', keysToSnakeCase(values))
    .then((response) => keysToCamelCase(response.data))
    .catch((error) => {
      throw new Error("designService updateDesign failed");
    });

  return design;
};

export const updateDesign = async (values) => {
  const design = await axios
    .put(`/designs/${values.id}`, keysToSnakeCase(values))
    .then((response) => keysToCamelCase(response.data))
    .catch((error) => {
      throw new Error("designService updateDesign failed");
    });

  return design;
};

export const fetchDesigns = async (filterOptions) => {
  const queryParams = mapToQueryParams(filterOptions);
  const queryString = toQueryString(queryParams);
  const designs = await axios
    .get(`/designs?${queryString}`)
    .then((response) => {
      return response.data.map((design) => keysToCamelCase(design));
    })
    .catch(() => {
      throw new Error("designService fetchDesigns failed");
    });

  return designs;
};

const mapToQueryParams = (filterOptions) => {
  const queryParams = {};

  if (filterOptions.showFeatured) {
    queryParams["is-featured"] = filterOptions.showFeatured ? 1 : 0;
  }

  if (filterOptions.designer) {
    queryParams.designer = filterOptions.designer;
  }

  return queryParams;
};

const toQueryString = (queryParams) => {
  return new URLSearchParams(queryParams).toString();
};
