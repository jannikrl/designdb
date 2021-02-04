import { axios } from "./baseService";
import _ from "lodash";

export const fetchDesign = async (id) => {
  const design = await axios
    .get("/designs/" + id)
    .then((response) => {
      return mapDesignValues(response.data);
    })
    .catch(() => {
      throw new Error("designService fetchDesign failed");
    });

  return design;
};

const mapDesignValues = (design) => {
  const newDesign = _.mapKeys(design, (value, key) => _.camelCase(key));

  if (newDesign.designer) {
    newDesign.designer = _.mapKeys(newDesign.designer, (value, key) =>
      _.camelCase(key)
    );
  }

  if (newDesign.manufacturer) {
    newDesign.manufacturer = _.mapKeys(newDesign.manufacturer, (value, key) =>
      _.camelCase(key)
    );
  }

  return newDesign;
};

export const fetchDesigns = async (filterOptions) => {
  const queryParams = mapToQueryParams(filterOptions);
  const queryString = toQueryString(queryParams);

  const designs = await axios
    .get("/designs?" + queryString)
    .then((response) => {
      return response.data.map((design) => mapDesignValues(design));
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

  if (filterOptions.selectedDesigner) {
    queryParams.designer = filterOptions.selectedDesigner;
  }

  return queryParams;
};

const toQueryString = (queryParams) => {
  return new URLSearchParams(queryParams).toString();
};
