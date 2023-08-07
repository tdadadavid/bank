"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareHashedData = exports.hashData = void 0;
const bcrypt = require("bcrypt");
const hashData = async (data) => {
    return await bcrypt.hash(data, 15);
};
exports.hashData = hashData;
const compareHashedData = async (plain, hash) => {
    return await bcrypt.compare(plain, hash);
};
exports.compareHashedData = compareHashedData;
//# sourceMappingURL=bcrypt.js.map