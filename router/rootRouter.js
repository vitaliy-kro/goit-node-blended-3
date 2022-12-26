const express = require("express");

const router = express.Router();

router.get("/posts/:postId/:anotherId", (req, res, next) => {
  const { postId, anotherId } = req.params;

  res.json({ name: "Vitaliy" });
});

router.post("/posts", (req, res, next) => {
  try {
    throw new Error("Oops, something get wrong");
  } catch (error) {
    next(error);
  }
});

module.exports = {
  router,
};
