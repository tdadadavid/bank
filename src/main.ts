import { startApp } from "./app";
import { gracefullyShutdown, initializeDbConnection } from "./core";

//# begin work on testing and kubernetes integration

initializeDbConnection()
    .then(startApp)
    .catch(gracefullyShutdown)