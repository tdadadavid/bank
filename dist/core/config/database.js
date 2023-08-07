"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDbConnection = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("./config");
const initializeDbConnection = async () => {
    await mongoose_1.default.connect(`${config_1.config.db.connectionString}`);
};
exports.initializeDbConnection = initializeDbConnection;
//# sourceMappingURL=database.js.map