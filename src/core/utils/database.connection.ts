import { sequelize } from "../config";

export const initializeDbConnection = async () => {
  await sequelize.authenticate();
};
