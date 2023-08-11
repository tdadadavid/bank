import { Currency } from "../../accounts";
import { ControllerArgs, HttpStatus, sanitize } from "../../core";



export const seeCurrencies =async ({}: ControllerArgs) => {

    const currencies = await Currency.find();


    return {
        code: HttpStatus.OK,
        message: "All currencies supported by nosh currently.",
        data: currencies.map(sanitize)
    }
}