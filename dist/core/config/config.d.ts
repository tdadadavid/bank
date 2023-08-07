export declare const config: Readonly<{
    app: {
        port: number;
        environment: string;
    };
    mail: {
        globalFrom: string;
        smtpHost: string;
        smtpPort: number;
        smtpUsername: string | undefined;
        smtpClientId: string;
        smtpClientSecret: string;
        smtpRefreshToken: string;
    };
    auth: {
        accessTokenSecret: string;
        accessTokenExpiresIn: string;
        refreshTokenSecret: string;
        refreshTokenExpiresIn: string;
    };
    cache: {
        port: number;
        host: string | undefined;
        ttl: number;
    };
    db: {
        connectionString: string;
    };
    rateLimit: {
        limit: string | undefined;
    };
}>;
