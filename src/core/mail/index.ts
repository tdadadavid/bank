import { logger } from "../logging";
import { IEMAIL } from "../types";


class Mail {
  public send = async (options: IEMAIL): Promise<void> => {
    logger.info({
      info: options.data,
      Subject: options.subject
    })
  };  
}

export default new Mail();
