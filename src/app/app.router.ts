import { Request, Router, Response } from "express";

import { HttpStatus } from "../core";
import { authRouter, currentUser } from "../auth";
import { userRouter } from "../users";


export const appRouter = Router();

appRouter.use("/auth", authRouter);
appRouter.use("/users", currentUser, userRouter)



appRouter.get("/health", (_: Request, res: Response) => {
  res.status(HttpStatus.OK).json({
    message: "App up",
    version: "1.0",
  });
});
