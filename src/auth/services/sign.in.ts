import { ControllerArgs, UnAuthorizedError, compareHashedData, generateToken, sanitize } from "../../core";
import { UserModel } from "../../users";
import { config } from "../../core";
import * as moment from "moment";


export const signIn = async ({ input }: ControllerArgs) => {
    const { email, password} = input;
    
    let user = await UserModel.findOne({ email });
    if(!user) throw new UnAuthorizedError("Invalid credentials provided");

    const passwordEquals = await compareHashedData(password, user.password);
    if(!passwordEquals)
         throw new UnAuthorizedError("Invalid credentials provided");

    const now: Date = new Date();
    const accessToken = generateToken(
        { id: user.id  },
        config.auth.accessTokenSecret,
        config.auth.accessTokenExpiresIn
    );
    const accessTokenExpiresIn = moment(now);

    const refreshToken = generateToken(
        { id: user.id },
        config.auth.refreshTokenSecret,
        config.auth.refreshTokenExpiresIn
    );
    const refreshTokenExpiresIn = moment(now);

    user = sanitize(user)
 
    return {
        code: 200,
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