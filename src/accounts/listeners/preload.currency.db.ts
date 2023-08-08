import { uuid } from "uuidv4";
import { HttpClient, config, logger } from "../../core";
import { EXCHANGE_RATE_LINKS } from "../constants/exchange.rates.constants";
import { Currency } from "../models"

export type CurrenciesData = {
    success: boolean,
    symbols: {
        [key: string]: string
    }
}

export class RegisterCurrencies {

    handle = async () => {

        const count = await Currency.count();
        if(count > 0) {
            logger.info("Currencies have registered before");
            return;
        }


        try {
            logger.info("Currencies have not been registered");

            const currenciesResp = await HttpClient
                .appendHeaders('apiKey', config.fixer.key)
                .get<CurrenciesData>(EXCHANGE_RATE_LINKS.CURRENCIES);
            
            const currencies = Object.keys(currenciesResp!.symbols);
            const data = currencies.map((currency: string) => {
                return {
                    id: uuid(),
                    code: currency,
                    currency: currenciesResp!.symbols[currency] + String.fromCharCode(Math.random()*10) //sieria lonne is duplicated.
                }
            })
            await Currency.insertMany(data);
            
            logger.info("Successfully registered currencies");
            
        }catch(err: unknown) {
            logger.error('Error registering currencies');
            logger.error(err);
            return;
        }
    }
}

export const registerCurrencies = new RegisterCurrencies();