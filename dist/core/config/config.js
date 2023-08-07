"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.config = Object.freeze({
    app: {
        port: parseInt(process.env.PORT),
        environment: process.env.NODE_ENV,
    },
    mail: {
        globalFrom: process.env.MAIL_FROM || "davidtofunmidada@gmail.com",
        smtpHost: "smtp.gmail.com",
        smtpPort: 465,
        smtpUsername: process.env.USER_EMAIL,
        smtpClientId: process.env.CLIENT_ID,
        smtpClientSecret: process.env.CLIENT_SECRET,
        smtpRefreshToken: process.env.REFRESH_TOKEN,
    },
    auth: {
        accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
        accessTokenExpiresIn: process.env.ACCESS_TOKEN_SECRET_LIFE_SPAN,
        refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
        refreshTokenExpiresIn: process.env.ACCESS_TOKEN_SECRET_LIFE_SPAN,
    },
    cache: {
        port: parseInt(process.env.REDIS_PORT),
        host: process.env.REDIS_HOST,
        ttl: parseInt(process.env.REDIS_TTL),
    },
    db: {
        connectionString: process.env.DATABASE_STRING,
    },
    rateLimit: {
        limit: process.env.WINDOW_RATE_LIMIT,
    },
});
//# sourceMappingURL=config.js.map