const responseErrorHandler = (err) => {
  // handle response error

  console.error("Response Error : ", err.response.data.message);

  return Promise.reject(err);
};

const responseParser = (response) => {
  // parse response data

  if (response.config.method === "get" && !response.data.data) {
    return Promise.reject("Response does not have data object.");
  }

  return response;
};

export { responseParser, responseErrorHandler };
