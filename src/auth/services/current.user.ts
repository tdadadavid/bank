import { Request, Response, NextFunction, RequestHandler } from "express";

import {
  verifyToken,
  config,
  ForbiddenError,
  TokenUser,
  UnAuthorizedError,
} from "../../core";

export const currentUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  const tokenHeader = req.get("Authorization") || req.get("x-Auth-Token");

  let tokenDetails;
  try {
    if (!tokenHeader) {
      throw new UnAuthorizedError("unathorized");
    }
    const token = tokenHeader.split(" ").pop() as string;

    tokenDetails = verifyToken(token, config.auth.accessTokenSecret);
  } catch (err: any) {
    req.user = null;
    const error = new ForbiddenError(err.message);
    next(error);
    return;
  }

  const user: TokenUser = tokenDetails.user;
  req.user = user;
  next();
};