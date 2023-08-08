import { startApp } from "./app";
import { gracefullyShutdown, initializeDbConnection } from "./core";

//TODO: work on the docker, then setup kubernetes for it.

initializeDbConnection()
    .then(startApp)
    .catch(gracefullyShutdown)