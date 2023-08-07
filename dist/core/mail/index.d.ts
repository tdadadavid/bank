import { IEMAIL } from "../types";
declare class Mail {
    send: (options: IEMAIL) => Promise<void>;
}
declare const _default: Mail;
export default _default;
