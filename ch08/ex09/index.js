export const withResource = (resource, callback) => {
  try {
    callback(resource);
  } catch (e) {
    resource.close();
    throw new Error();
  }
  resource.close();
};
