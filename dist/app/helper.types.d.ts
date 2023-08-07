import { ExtractParams } from "../core";
import { register } from "./event.listener.register";
export type AppEventListnerMap = EvMapParams;
export type eventKeys = keyof typeof register;
type EvMapParams = {
    [K in keyof typeof register]: ExtractParams<(typeof register)[K]>;
};
export {};
