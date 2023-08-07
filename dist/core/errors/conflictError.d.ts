import { ApiError, ErrorDetailsDescriptor } from "./apiError";
export declare class ConflictError extends ApiError {
    _statusCode: 409;
    _message: string;
    _details: null;
    constructor(message: string);
    get statusCode(): number;
    get message(): string;
    get details(): ErrorDetailsDescriptor;
}
