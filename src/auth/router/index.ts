import { Router } from "express";
import { authRateLimiter, controllerHandler } from "../../core";
import { signIn, signUp, refreshToken } from "../services";
import { refreshTokenSchema, signInSchema, signUpSchema } from "./schemas";

export const authRouter = Router();


authRouter
    .use(authRateLimiter)
    .post("/signup", controllerHandler.handle(signUp, signUpSchema))
    .post("/signIn", controllerHandler.handle(signIn, signInSchema))
    .post("/refresh", controllerHandler.handle(refreshToken, refreshTokenSchema))