import { axios } from "./baseService";
import { keysToCamelCase } from "../utils/utils";
import { DesignType } from "../store/designTypes/types";

export const fetchDesignTypes = async () => {
  const types = await axios
    .get("/design-types")
    .then(
      (response) =>
        response.data.map((type: DesignType) =>
          keysToCamelCase(type)
        ) as DesignType[]
    )
    .catch((error) => {
      throw new Error("designTypeService getTypes failed");
    });

  return types;
};
