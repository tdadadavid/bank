"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = void 0;
const moment = require("moment");
const core_1 = require("../../core");
const users_1 = require("../../users");
const app_1 = require("../../app");
const signIn = async ({ input }) => {
    const { email, password } = input;
    let user = await users_1.UserModel.findOne({ email });
    if (!user)
        throw new core_1.UnAuthorizedError("Invalid credentials provided");
    const passwordEquals = await (0, core_1.compareHashedData)(password, user.password);
    if (!passwordEquals)
        throw new core_1.UnAuthorizedError("Invalid credentials provided");
    const now = new Date();
    const accessTokenExpiresIn = moment(now).add(+core_1.config.auth.accessTokenExpiresIn, "minutes");
    const accessToken = (0, core_1.generateToken)({ id: user.id }, core_1.config.auth.accessTokenSecret, accessTokenExpiresIn.unix());
    const refreshTokenExpiresIn = moment(now).add(+core_1.config.auth.refreshTokenExpiresIn, "hours");
    const refreshToken = (0, core_1.generateToken)({ id: user.id }, core_1.config.auth.refreshTokenSecret, refreshTokenExpiresIn.unix());
    user = (0, core_1.sanitize)(user);
    await app_1.cache.put(`user:${user === null || user === void 0 ? void 0 : user.id}`, refreshToken);
    return {
        code: core_1.HttpStatus.OK,
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
};
exports.signIn = signIn;
//# sourceMappingURL=sign.in.js.map