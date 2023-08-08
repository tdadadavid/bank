declare const dispatch: <T extends "app:up" | "cache:connection:established" | "auth:new:user" | "create:new:account" | "transfer:failed" | "transfer:success" | "transfer:reciever" | "transfer:sender" | "deposit:made" | "withdraw:made" | "event:registeration:succesful" = "app:up" | "cache:connection:established" | "auth:new:user" | "create:new:account" | "transfer:failed" | "transfer:success" | "transfer:reciever" | "transfer:sender" | "deposit:made" | "withdraw:made" | "event:registeration:succesful">(event: T, ...values: {
    "app:up": [];
    "cache:connection:established": [];
    "auth:new:user": [options: import("../core").NewUserOptions];
    "create:new:account": [options: import("../core").CreateNewUserAccountOptions];
    "transfer:failed": [];
    "transfer:success": [];
    "transfer:reciever": [];
    "transfer:sender": [];
    "deposit:made": [import("../transactions").DepositMadeOptions];
    "withdraw:made": [];
    "event:registeration:succesful": [];
}[T]) => Promise<void>;
export { dispatch };
