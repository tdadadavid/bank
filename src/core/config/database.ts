
import mongoose from "mongoose";
import { config } from "./config";

// database connection.
export const initializeDbConnection = async () => {
  await mongoose.connect(`${config.db.connectionString}`)
}
