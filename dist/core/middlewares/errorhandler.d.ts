import { NextFunction, Request, Response } from "express";
export declare class ErrorHandler {
    handle: (error: Error, _: Request, res: Response, __: NextFunction) => Promise<void>;
}
