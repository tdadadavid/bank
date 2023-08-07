import { TokenUser } from "../common";

declare global {
  namespace Express {
    export interface Request {
      user: TokenUser | null | undefined;
    }
  }
}
