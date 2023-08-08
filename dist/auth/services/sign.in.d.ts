import * as moment from "moment";
import { ControllerArgs } from "../../core";
export declare const signIn: ({ input }: ControllerArgs) => Promise<{
    code: 200;
    message: string;
    data: {
        user: (import("mongoose").Document<unknown, {}, import("../../users").User> & import("../../users").User & {
            _id: import("mongoose").Types.ObjectId;
        }) | null;
        tokens: {
            accessToken: string;
            accessTokenExpiresIn: moment.Moment;
            refreshToken: string;
            refreshTokenExpiresIn: moment.Moment;
        };
    };
}>;
