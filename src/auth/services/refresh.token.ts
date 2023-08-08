import { JwtPayload } from "jsonwebtoken";

import { ControllerArgs, ForbiddenError, generateToken, verifyToken, config, HttpStatus, UnAuthorizedError } from "../../core";
import { BlacklistToken } from "../models";
import { cache } from "../../app";
import moment from "moment";



export const refreshToken = async ({ query, user } : ControllerArgs) => {
    const { token } = query;

    try {
        await verifyToken(token, config.auth.refreshTokenSecret);
    }catch(err: any){
        throw new ForbiddenError("Invalid or Expired token");
    }


    const tokenPayload = await cache.read<JwtPayload>(`user:${user?.id}`);
    if (!tokenPayload) 
        throw new UnAuthorizedError("Tokens revoked");

    const now  = new Date()
    const expiresIn = moment(now).add(+config.auth.accessTokenExpiresIn, "minutes");
    const accessToken = generateToken(
        { id: tokenPayload.id  },
        config.auth.accessTokenSecret,
        expiresIn.unix()
    );


    return {
        code: HttpStatus.OK,
        message: "Access token",
        data: {
            accessToken,
            expiresIn,
        }
    }
    
}