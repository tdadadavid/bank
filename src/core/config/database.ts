import { Dialect, Sequelize } from "sequelize";

import { config } from "./config";

// Postgres implementation
export const sequelize = new Sequelize(
  config.db.dbName,
  config.db.dbUser,
  config.db.dbPassword,
  {
    port: 5432,
    pool: {
      min: 2,
      max: 10,
    },
    host: config.db.dbHost,
    dialect: "postgres" as Dialect,
    define: {
      timestamps: true,
      underscored: true,
    },
  },
);
