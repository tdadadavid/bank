import { Router } from "express";
import { authRateLimiter, controllerHandler } from "../../core";
import { signIn, signUp, refreshToken } from "../services";

export const authRouter = Router();


authRouter
    .use(authRateLimiter)
    .post("/signup", controllerHandler.handle(signUp))
    .post("/signIn", controllerHandler.handle(signIn))
    .post("/refresh", controllerHandler.handle(refreshToken))