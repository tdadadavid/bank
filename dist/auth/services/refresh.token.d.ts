import { ControllerArgs } from "../../core";
import moment from "moment";
export declare const refreshToken: ({ query, user }: ControllerArgs) => Promise<{
    code: 200;
    message: string;
    data: {
        accessToken: string;
        expiresIn: moment.Moment;
    };
}>;
