"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
const core_1 = require("../core");
exports.appRouter = (0, express_1.Router)();
exports.appRouter.get("/health", (_, res) => {
    res.status(core_1.HttpStatus.OK).json({
        message: "App up",
        version: "1.0",
    });
});
//# sourceMappingURL=app.router.js.map