"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = void 0;
const signIn = async ({ input }) => {
    const { email, password } = input;
    return {
        code: 200,
        message: 'You are logged in',
        data: {
            accessToken: "access token",
            refreshToken: "refresh token",
            accessTokenExpiresIn: "Tomorow",
            refreshTokenExpiresIn: "Tomorrow"
        }
    };
};
exports.signIn = signIn;
//# sourceMappingURL=sign.in.js.map