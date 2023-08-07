import { TokenUser } from "../common";
declare global {
    namespace Express {
        interface Request {
            user: TokenUser | null | undefined;
        }
    }
}
