import { Router } from "express";
import { controllerHandler } from "../../core";
import { viewProfile } from "../services";

export const userRouter = Router();

userRouter
    .get('/profile', controllerHandler.handle(viewProfile))