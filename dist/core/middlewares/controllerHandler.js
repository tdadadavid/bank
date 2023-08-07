"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerHandler = void 0;
const utils_1 = require("../utils");
const errors_1 = require("../errors");
class ControllerHandler {
    constructor() {
        this.handle = (controllerFn, schema = {}) => {
            return async (req, res, next) => {
                const controllerArgs = utils_1.parseControllerArgs.parse(req);
                const { input, params, query } = controllerArgs;
                try {
                    if (schema) {
                        const { querySchema, paramsSchema, inputSchema } = schema;
                        try {
                            if (inputSchema)
                                (0, utils_1.joiValidate)(inputSchema, input);
                            if (querySchema)
                                (0, utils_1.joiValidate)(querySchema, query);
                            if (paramsSchema)
                                (0, utils_1.joiValidate)(paramsSchema, params);
                        }
                        catch (error) {
                            throw new errors_1.UnProcessableError(error.message.replaceAll('"', ""));
                        }
                    }
                    const controllerResult = await controllerFn(controllerArgs);
                    if (!controllerResult) {
                        res.status(utils_1.HttpStatus.OK).send({ status: true });
                        return;
                    }
                    const { code } = controllerResult, data = __rest(controllerResult, ["code"]);
                    res.status(code !== null && code !== void 0 ? code : utils_1.HttpStatus.OK).send(data);
                }
                catch (error) {
                    next(error);
                }
            };
        };
    }
}
exports.ControllerHandler = ControllerHandler;
//# sourceMappingURL=controllerHandler.js.map