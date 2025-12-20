import { Router } from "express";
import { createAdmin, loginAdmin } from "../controllers/auth-controller.js";

const authRouter = Router();

authRouter.post("/login", loginAdmin);
authRouter.post("/create", createAdmin);

export default authRouter;
