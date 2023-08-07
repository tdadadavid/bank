"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimiter = void 0;
class RateLimiter {
    constructor() {
        this.consume = async (req, res, next) => {
            const ip = req.ip;
        };
    }
}
exports.RateLimiter = RateLimiter;
//# sourceMappingURL=rateLimit.js.map