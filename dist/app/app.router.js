"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
const core_1 = require("../core");
const auth_1 = require("../auth");
const users_1 = require("../users");
exports.appRouter = (0, express_1.Router)();
exports.appRouter.use("/auth", auth_1.authRouter);
exports.appRouter.use("/users", auth_1.currentUser, users_1.userRouter);
exports.appRouter.get("/health", (_, res) => {
    res.status(core_1.HttpStatus.OK).json({
        message: "App up",
        version: "1.0",
    });
});
//# sourceMappingURL=app.router.js.map