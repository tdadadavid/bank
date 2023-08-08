import { NextFunction, Request, Response } from "express";
export declare type ExpressCallbackFunction = (req: Request, res: Response, next: NextFunction) => Promise<void>;
