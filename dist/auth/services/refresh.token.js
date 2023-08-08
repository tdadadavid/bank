"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = void 0;
const core_1 = require("../../core");
const app_1 = require("../../app");
const moment_1 = require("moment");
const refreshToken = async ({ query, user }) => {
    const { token } = query;
    try {
        await (0, core_1.verifyToken)(token, core_1.config.auth.refreshTokenSecret);
    }
    catch (err) {
        throw new core_1.ForbiddenError("Invalid or Expired token");
    }
    const tokenPayload = await app_1.cache.read(`user:${user === null || user === void 0 ? void 0 : user.id}`);
    if (!tokenPayload)
        throw new core_1.UnAuthorizedError("Tokens revoked");
    const now = new Date();
    const expiresIn = (0, moment_1.default)(now).add(+core_1.config.auth.accessTokenExpiresIn, "minutes");
    const accessToken = (0, core_1.generateToken)({ id: tokenPayload.id }, core_1.config.auth.accessTokenSecret, expiresIn.unix());
    return {
        code: core_1.HttpStatus.OK,
        message: "Access token",
        data: {
            accessToken,
            expiresIn,
        }
    };
};
exports.refreshToken = refreshToken;
//# sourceMappingURL=refresh.token.js.map