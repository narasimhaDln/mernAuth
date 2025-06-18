import express from "express";
import {
  signup,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
} from "../controllers/auth.controllers.js";
import verifyToken from "../middleware/verifyToken.js";

const userRouter = express.Router();

userRouter.get("/check-auth", verifyToken, checkAuth);
userRouter.post("/register", signup);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.post("/verify-email", verifyEmail);
userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/reset-password/:token", resetPassword);

export default userRouter;
