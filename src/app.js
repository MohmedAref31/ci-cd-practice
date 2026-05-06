function getResponse(pathname) {
  if (pathname === "/") {
    return {
      statusCode: 200,
      body: {
        message: "Node CI/CD practice app is running"
      }
    };
  }

  if (pathname === "/health") {
    return {
      statusCode: 200,
      body: {
        status: "ok"
      }
    };
  }

  return {
    statusCode: 404,
    body: {
      error: "Not Found"
    }
  };
}

module.exports = {
  getResponse
};
