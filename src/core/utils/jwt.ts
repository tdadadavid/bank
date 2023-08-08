import * as jwt from "jsonwebtoken";

export const generateToken = (
  user: { id: string; },
  secretKey: string,
  expiresIn: number | number,
) => {
  return jwt.sign({ user }, secretKey, { expiresIn });
};

export const verifyToken = (
  token: string,
  secretKey: string,
): jwt.JwtPayload => {
  return jwt.verify(token, secretKey) as jwt.JwtPayload;
};
