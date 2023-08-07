"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const signUp = async ({ input }) => {
    const { email, firstName, lastName, otherName, password } = input;
    return {
        code: 201,
        message: "Admin registered successfully",
    };
};
exports.signUp = signUp;
//# sourceMappingURL=sign.up.js.map