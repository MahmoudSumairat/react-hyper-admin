function validateEndpointParams(endpointName, ...args) {
  //endpointName will be the last param

  const hasData = args.length;

  if (!hasData) {
    console.error(
      `Please provide the required data for the "${endpointName}" Endpoint to complete the process`
    );
    return false;
  }

  return true;
}

export default validateEndpointParams;
