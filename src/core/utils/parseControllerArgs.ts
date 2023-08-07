import { Request } from "express";
import { ControllerArgs } from "../types";

class ParseControllerArgs {
  parse = (req: Request): ControllerArgs => {
    return {
      input: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
      user: req.user,
      files: "" as any,
    };
  };
}

export default new ParseControllerArgs();
