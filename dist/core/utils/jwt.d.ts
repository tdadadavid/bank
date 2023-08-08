import * as jwt from "jsonwebtoken";
export declare const generateToken: (user: {
    id: string;
}, secretKey: string, expiresIn: number | number) => string;
export declare const verifyToken: (token: string, secretKey: string) => jwt.JwtPayload;
