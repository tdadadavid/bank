import * as jwt from "jsonwebtoken";
export declare const generateToken: (user: {
    id: string;
    role: string;
}, secretKey: string, expiresIn: string) => string;
export declare const verifyToken: (token: string, secretKey: string) => jwt.JwtPayload;
