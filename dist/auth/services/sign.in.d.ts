import { ControllerArgs } from "src/core";
export declare const signIn: ({ input }: ControllerArgs) => Promise<{
    code: number;
    message: string;
    data: {
        accessToken: string;
        refreshToken: string;
        accessTokenExpiresIn: string;
        refreshTokenExpiresIn: string;
    };
}>;
