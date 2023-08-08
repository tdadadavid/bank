import { Request, Router, Response } from "express";

import { HttpStatus } from "../core";
import { authRouter } from "../auth";


export const appRouter = Router();

appRouter.use("/auth", authRouter);



appRouter.get("/health", (_: Request, res: Response) => {
  res.status(HttpStatus.OK).json({
    message: "App up",
    version: "1.0",
  });
});
