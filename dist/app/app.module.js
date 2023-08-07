"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startApp = void 0;
const http_1 = require("http");
const core_1 = require("../core");
const app_service_1 = require("./app.service");
const app_events_1 = require("./app.events");
const startApp = async () => {
    const server = (0, http_1.createServer)(app_service_1.app);
    server.listen(core_1.config.app.port, () => (0, app_events_1.dispatch)("app:up"));
};
exports.startApp = startApp;
//# sourceMappingURL=app.module.js.map