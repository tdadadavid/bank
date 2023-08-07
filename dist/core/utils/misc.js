"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computDateFromEpoch = exports.computeExpiryDate = exports.generateRandStr = void 0;
const crypto_1 = require("crypto");
const generateRandStr = (len) => {
    return crypto_1.default.randomBytes(len / 2).toString("hex");
};
exports.generateRandStr = generateRandStr;
const computeExpiryDate = (timeInSeconds) => {
    return new Date(Date.now() + timeInSeconds * 1000);
};
exports.computeExpiryDate = computeExpiryDate;
const computDateFromEpoch = (epochTime) => {
    return new Date(epochTime * 1000);
};
exports.computDateFromEpoch = computDateFromEpoch;
//# sourceMappingURL=misc.js.map