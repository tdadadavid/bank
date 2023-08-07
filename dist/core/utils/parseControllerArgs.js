"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParseControllerArgs {
    constructor() {
        this.parse = (req) => {
            return {
                input: req.body,
                params: req.params,
                query: req.query,
                headers: req.headers,
                user: req.user,
                files: "",
            };
        };
    }
}
exports.default = new ParseControllerArgs();
//# sourceMappingURL=parseControllerArgs.js.map