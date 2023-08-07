import { join } from "path";
import { createTransport, TransportOptions } from "nodemailer";
import ejs from "ejs";

import { config, oAuth2Client } from "../config";
import { IEMAIL } from "../types";

class Mail {
  public send = async (options: IEMAIL): Promise<void> => {
    try {
      // get access token
      const accessToken = await oAuth2Client.getAccessToken();

      // create mail transport
      const transporter = this.configure(accessToken);

      const data = await this.compileTemplate(options);

      const mailOptions = {
        from: config.mail.globalFrom,
        to: options.email,
        subject: options.subject,
        html: data,
      };

      await transporter.sendMail(mailOptions);
    } catch (err: any) {
      const error = new Error(err.message);
      throw error;
    }
  };

  private compileTemplate = async ({
    fileName,
    data,
  }: IEMAIL): Promise<string> => {
    return ejs.renderFile(join(__dirname, fileName), data);
  };

  private configure = (accessToken: unknown) => {
    const transporter = createTransport({
      host: config.mail.smtpHost,
      secure: false,
      auth: {
        type: "OAuth2",
        user: config.mail.smtpUsername,
        clientId: config.mail.smtpClientId,
        clientSecret: config.mail.smtpClientSecret,
        refreshToken: config.mail.smtpRefreshToken,
        accessToken,
      },
    } as TransportOptions);

    return transporter;
  };
}

export default new Mail();
