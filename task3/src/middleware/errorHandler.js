const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "server error",
    error: err.message,
  });
};

export default errorHandler;