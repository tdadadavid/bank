import { Request } from "express";
import { ControllerArgs } from "../types";
declare class ParseControllerArgs {
    parse: (req: Request) => ControllerArgs;
}
declare const _default: ParseControllerArgs;
export default _default;
