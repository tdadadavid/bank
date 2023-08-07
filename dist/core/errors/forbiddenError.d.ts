import { ApiError, ErrorDetailsDescriptor } from "./apiError";
export declare class ForbiddenError extends ApiError {
    _statusCode: 403;
    _message: string;
    _details: null;
    constructor(message: string);
    get statusCode(): number;
    get message(): string;
    get details(): ErrorDetailsDescriptor;
}
