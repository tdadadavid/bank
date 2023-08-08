import * as moment from "moment";

import { ControllerArgs, HttpStatus, UnAuthorizedError, compareHashedData, generateToken, sanitize, config } from "../../core";
import { UserModel } from "../../users";
import { cache } from "../../app";


export const signIn = async ({ input }: ControllerArgs) => {
    const { email, password} = input;
    
    let user = await UserModel.findOne({ email });
    if(!user) throw new UnAuthorizedError("Invalid credentials provided");

    const passwordEquals = await compareHashedData(password, user.password);
    if(!passwordEquals)
         throw new UnAuthorizedError("Invalid credentials provided");

    const now  = new Date()
    const accessTokenExpiresIn = moment(now).add(+config.auth.accessTokenExpiresIn, "minutes");
    const accessToken = generateToken(
        { id: user.id  },
        config.auth.accessTokenSecret,
        accessTokenExpiresIn.unix(),
    );

    const refreshTokenExpiresIn = moment(now).add(+config.auth.refreshTokenExpiresIn, "hours")
    const refreshToken = generateToken(
        { id: user.id },
        config.auth.refreshTokenSecret,
        refreshTokenExpiresIn.unix()
    );

    user = sanitize(user)

    await cache.put(`user:${user?.id}`,'refreshToken', refreshToken)
 
    return {
        code: HttpStatus.OK,
        message: 'You are logged in',
        data: {
            user,
            tokens: {
                accessToken,
                accessTokenExpiresIn,
                refreshToken,
                refreshTokenExpiresIn,
            }       
        }
    };
}