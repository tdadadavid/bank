declare const HttpStatus: {
    readonly OK: 200;
    readonly CREATED: 201;
    readonly BAD_REQUEST: 400;
    readonly UNAUTHORIZED: 401;
    readonly FORBIDDEN: 403;
    readonly NOT_FOUND: 404;
    readonly CONFLICT: 409;
    readonly NOT_WHITELISTED: 409;
    readonly UNPROCESSABLE: 422;
    readonly INTERNAL_SERVER_ERROR: 500;
};
export default HttpStatus;
