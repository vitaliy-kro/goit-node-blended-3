const notFoundHandler = (req, res, next) => {
  res.status(494).json({ message: "This route is not exist" });
};

module.exports = {
  notFoundHandler,
};
