import { ApiError, ErrorDetailsDescriptor } from "./apiError";
export declare class UnAuthorizedError extends ApiError {
    _statusCode: 401;
    _message: string;
    _details: null;
    constructor(message: string);
    get statusCode(): number;
    get message(): string;
    get details(): ErrorDetailsDescriptor;
}
