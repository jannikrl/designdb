import _ from "lodash";

export function keysToCamelCase(object: object): object {
  const keysUpdatedObject = _.mapKeys(object, (value, key) => _.camelCase(key));
  const result = _.mapValues(keysUpdatedObject, (value) => {
    if (typeof value === "object" && value !== null) {
      return keysToCamelCase(value);
    }
    return value;
  });
  return result;
}

export function keysToSnakeCase(object: object): object {
  const keysUpdatedObject = _.mapKeys(object, (value, key) => _.snakeCase(key));
  const result = _.mapValues(keysUpdatedObject, (value) => {
    if (typeof value === "object" && value !== null) {
      return keysToSnakeCase(value);
    }
    return value;
  });
  return result;
}
