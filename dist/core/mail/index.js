"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("../logging");
class Mail {
    constructor() {
        this.send = async (options) => {
            logging_1.logger.info({
                info: options.data,
                Subject: options.subject
            });
        };
    }
}
exports.default = new Mail();
//# sourceMappingURL=index.js.map