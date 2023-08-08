import { Router } from "express";

import { controllerHandler } from "../../core";
import { deposit,transfer, withdraw } from "../services";
import { depositSchema,transferSchema, withdrawSchema } from "./schemas";

export const transactionRouter = Router();


transactionRouter
    .post("/deposit", controllerHandler.handle(deposit, depositSchema))
    .post("/withdraw", controllerHandler.handle(withdraw, withdrawSchema))
    .post("/transfer", controllerHandler.handle(transfer, transferSchema))