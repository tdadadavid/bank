import { CreateNewUserAccountOptions, logger } from "../../core"
import { AccountModel, Currency } from "../../accounts";



class CreateNewUserAccount {
    
    handle = async (options: CreateNewUserAccountOptions) => {
        let data: any = options;
        try {   
        
            const currencyData = await Currency.findOne({ code: data[0].currency })

            await AccountModel.create({
                currency: currencyData?.id,
                owner: data[0].owner,
                account_number: data[0].phoneNumber,
            });

            logger.info("New user account created");
        }catch(err: unknown) {
            logger.error("Error creating user account");
            logger.error(err);
            return;
        }

    }
}

export const createNewUserAccount = new CreateNewUserAccount();