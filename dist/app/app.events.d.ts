declare const dispatch: <T extends "app:up" | "cache:connection:established" | "event:registeration:succesful" = "app:up" | "cache:connection:established" | "event:registeration:succesful">(event: T, ...values: {
    "app:up": [];
    "cache:connection:established": [];
    "event:registeration:succesful": [];
}[T]) => Promise<void>;
export { dispatch };
