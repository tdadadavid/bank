export declare const register: {
    "app:up": ((() => Promise<void>) | (() => import("winston").Logger))[];
    "cache:connection:established": () => import("winston").Logger;
    "auth:new:user": (options: import("../core").NewUserOptions) => Promise<void>;
    "create:new:account": (options: import("../core").CreateNewUserAccountOptions) => Promise<void>;
    "event:registeration:succesful": () => import("winston").Logger;
};
