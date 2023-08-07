import { ControllerArgs, UnAuthorizedError, generateToken } from "../../core";
import { UserModel } from "../../users";
import { config } from "../../core";
import * as moment from "moment";


export const signIn = async ({ input }: ControllerArgs) => {
    const { email, password} = input;
    
    const user = await UserModel.findOne({ email });
    if(!user) throw new UnAuthorizedError("Invalid credentials provided");

    //@ts-ignore
    if(user.passwordEquals(password))
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
 
    return {
        code: 200,
        message: 'You are logged in',
        data: {
            user,
            tokens: {
                accessToken,
                refreshToken,
                accessTokenExpiresIn,
                refreshTokenExpiresIn,
            }       
        }
    };
}