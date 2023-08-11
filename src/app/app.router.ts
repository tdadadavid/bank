import { Request, Router, Response } from "express";

import { HttpStatus, controllerHandler } from "../core";
import { authRouter, currentUser } from "../auth";
import { userRouter } from "../users";
import { seeCurrencies, transactionRouter } from "../transactions";


export const appRouter = Router();

appRouter.get("/health", (_: Request, res: Response) => {
  res.status(HttpStatus.OK).json({
    message: "App up",
    version: "1.0",
  });
});

appRouter
  .get('/currencies', controllerHandler.handle(seeCurrencies))
  .use("/auth", authRouter)
  .use(currentUser)
  .use("/users", userRouter)
  .use("/transactions", transactionRouter)