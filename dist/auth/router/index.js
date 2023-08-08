"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const core_1 = require("../../core");
const services_1 = require("../services");
const schemas_1 = require("./schemas");
exports.authRouter = (0, express_1.Router)();
exports.authRouter
    .use(core_1.authRateLimiter)
    .post("/signup", core_1.controllerHandler.handle(services_1.signUp, schemas_1.signUpSchema))
    .post("/signIn", core_1.controllerHandler.handle(services_1.signIn, schemas_1.signInSchema))
    .post("/refresh", core_1.controllerHandler.handle(services_1.refreshToken, schemas_1.refreshTokenSchema));
//# sourceMappingURL=index.js.map