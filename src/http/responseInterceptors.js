const responseErrorHandler = (err) => {
  // handle response error

  console.error("Response Error : ", err.response.data.message);

  return Promise.reject(err);
};

const responseParser = (response) => {
  // parse response data

  return response;
};

export { responseParser, responseErrorHandler };
