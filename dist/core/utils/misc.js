"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitize = exports.computDateFromEpoch = exports.computeExpiryDate = exports.generateRandStr = void 0;
const crypto = require("crypto");
const generateRandStr = () => {
    return crypto.randomBytes(12).toString("hex");
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
const sanitize = (model) => {
    const result = Object.assign({}, model._doc);
    result === null || result === void 0 ? true : delete result._id;
    result === null || result === void 0 ? true : delete result.__v;
    result === null || result === void 0 ? true : delete result.password;
    return result;
};
exports.sanitize = sanitize;
//# sourceMappingURL=misc.js.map