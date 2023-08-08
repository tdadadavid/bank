export declare const register: {
    "app:up": ((() => Promise<void>) | (() => import("winston").Logger))[];
    "cache:connection:established": () => import("winston").Logger;
    "auth:new:user": (options: import("../core").NewUserOptions) => Promise<void>;
    "create:new:account": (options: import("../core").CreateNewUserAccountOptions) => Promise<void>;
    "transfer:failed": () => void;
    "transfer:success": () => void;
    "transfer:reciever": () => import("winston").Logger;
    "transfer:sender": () => import("winston").Logger;
    "deposit:made": ({ email, account }: import("../transactions").DepositMadeOptions) => void;
    "withdraw:made": () => void;
    "event:registeration:succesful": () => import("winston").Logger;
};
