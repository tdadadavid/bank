"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jwt = require("jsonwebtoken");
const generateToken = (user, secretKey, expiresIn) => {
    return jwt.sign({ user }, secretKey, { expiresIn });
};
exports.generateToken = generateToken;
const verifyToken = (token, secretKey) => {
    return jwt.verify(token, secretKey);
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.js.map