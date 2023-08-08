"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const users_1 = require("../../users");
const app_1 = require("../../app");
const core_1 = require("../../core");
const signUp = async ({ input }) => {
    const { email, firstname, lastname, othername, password, phoneNumber } = input;
    const userExists = await users_1.UserModel.findOne({
        $or: [
            { email },
            { phoneNumber }
        ]
    });
    if (userExists)
        throw new core_1.ConflictError("User with email/phoneNumber already exists");
    const hashPassword = await (0, core_1.hashData)(password);
    const user = await users_1.UserModel.create({
        firstname,
        lastname,
        email,
        othername,
        phoneNumber,
        password: hashPassword
    });
    const data = (0, core_1.sanitize)(user);
    const newUserNotificationOptions = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
    };
    (0, app_1.dispatch)("auth:new:user", newUserNotificationOptions);
    (0, app_1.dispatch)("create:new:account", {
        currency: "GBP",
        owner: user.id,
        phoneNumber: user.phoneNumber,
    });
    return {
        code: core_1.HttpStatus.CREATED,
        message: "User registered successfully. Check your profile to see your newly created account.",
        data,
    };
};
exports.signUp = signUp;
//# sourceMappingURL=sign.up.js.map