import { JwtPayload } from "jsonwebtoken";
import { ControllerArgs, ForbiddenError, generateToken, verifyToken, config } from "../../core";
import { BlacklistToken } from "../models";



export const refreshToken = async ({ query } : ControllerArgs) => {
    const { token } = query;

    let tokenDetails;
    try {
        tokenDetails = verifyToken(token, config.auth.refreshTokenSecret);
    }catch(err: any){
        throw new ForbiddenError("Invalid or Expired token");
    }

    if (!tokenDetails)
        throw new ForbiddenError("Invalid or Expired token");

    const isBlackListed =
        await BlacklistToken.findOne({ where: { token } });
    if (isBlackListed) throw new ForbiddenError("Jwt revoked");

    let tokenPayload = tokenDetails as JwtPayload;
    const accessToken = generateToken(
        { id: tokenPayload.id  },
        config.auth.accessTokenSecret,
        config.auth.accessTokenExpiresIn
    );
    
    return {
        code: 200,
        message: "New access token created successfully",
        data: {
            accessToken,
            expiresIn: "expires in",
        },
    };
}