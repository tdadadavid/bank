import { ApiError, ErrorDetailsDescriptor } from "./apiError";
export declare class BadRequestError extends ApiError {
    _statusCode: 400;
    _message: string;
    _details: null;
    constructor(message: string);
    get statusCode(): number;
    get message(): string;
    get details(): ErrorDetailsDescriptor;
}
