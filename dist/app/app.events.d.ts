declare const dispatch: <T extends "app:up" | "cache:connection:established" | "auth:new:user" | "create:new:account" | "event:registeration:succesful" = "app:up" | "cache:connection:established" | "auth:new:user" | "create:new:account" | "event:registeration:succesful">(event: T, ...values: {
    "app:up": [];
    "cache:connection:established": [];
    "auth:new:user": [options: import("../core").NewUserOptions];
    "create:new:account": [options: import("../core").CreateNewUserAccountOptions];
    "event:registeration:succesful": [];
}[T]) => Promise<void>;
export { dispatch };
