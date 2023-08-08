export declare type Listener = (...args: any[]) => unknown;
export declare type EventListenerMap = Record<string, Listener | Listener[]>;
export declare type ExtractParams<T> = T extends (...args: infer P) => unknown ? P : T extends Array<infer E> ? ExtractParams<E> : never;
