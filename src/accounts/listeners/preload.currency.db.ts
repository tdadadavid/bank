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

            const currencies = await HttpClient
                .appendHeader('apiKey', config.fixer.key)
                .get<CurrenciesData>(EXCHANGE_RATE_LINKS.CURRENCIES);
            
            const data = Object.keys(currencies!.symbols).map((currency: string) => {
                return {
                    id: uuid(),
                    code: currency,
                    currency: currencies!.symbols[currency] 
                }
            });
            await Currency.insertMany(data, { ordered: false });
            
            logger.info("Successfully registered currencies");
            
        }catch(err: unknown) {
            logger.error('Error registering currencies');
            logger.error(err);
            return;
        }
    }
}

export const registerCurrencies = new RegisterCurrencies();