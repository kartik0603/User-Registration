const express = require("express");
const {
  register,
  login,
  logout,
  forgetPassword,
  resetPassword,
} = require("../controllers/auth.controler.js");

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.post("/forget-password", forgetPassword);
authRouter.post("/reset-password/:token", resetPassword);

module.exports = authRouter;
