import { ExtractParams } from "../core";
import { register } from "./event.listener.register";
export declare type AppEventListnerMap = EvMapParams;
export declare type eventKeys = keyof typeof register;
declare type EvMapParams = {
    [K in keyof typeof register]: ExtractParams<(typeof register)[K]>;
};
export {};
