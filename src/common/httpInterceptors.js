const authInterceptor = (request) => {
  const authToken = localStorage.getItem("authToken");
  request.header["Authorization"] = `Bearer ${authToken}`;
  return request;
};

export { authInterceptor };
