import _ from "lodash";

export const keysToCamelCase = (object) => {
  let newObject = _.mapKeys(object, (value, key) => _.camelCase(key));
  newObject = _.mapValues(newObject, (value) => {
    if (typeof value === "object" && value !== null) {
      return keysToCamelCase(value);
    }
    return value;
  });
  return newObject;
};

export const keysToSnakeCase = (object) => {
    let newObject = _.mapKeys(object, (value, key) => _.snakeCase(key));
    newObject = _.mapValues(newObject, (value) => {
      if (typeof value === "object" && value !== null) {
        return keysToSnakeCase(value);
      }
      return value;
    });
    return newObject;
  };
  
