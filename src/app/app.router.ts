import { Request, Router, Response } from "express";
import { HttpStatus } from "../core";



export const appRouter = Router();



appRouter.get("/health", (_: Request, res: Response) => {
  res.status(HttpStatus.OK).json({
    message: "App up",
    version: "1.0",
  });
});
