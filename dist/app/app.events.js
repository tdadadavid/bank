"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispatch = void 0;
const eventemitter2_1 = require("eventemitter2");
const event_listener_register_1 = require("./event.listener.register");
class AppEventManager extends eventemitter2_1.EventEmitter2 {
    constructor(eventListenerMap) {
        super();
        this.register = async (eventListenerMap) => {
            Object.keys(eventListenerMap).forEach((key) => {
                const listeners = eventListenerMap[key];
                if (Array.isArray(listeners)) {
                    listeners.forEach((listener) => {
                        this.on(key, listener);
                    });
                }
                else {
                    this.on(key, listeners);
                }
            });
        };
        this.dispatch = async (event, ...values) => {
            this.emit(event, values);
        };
        this.register(eventListenerMap).then(() => this.dispatch("event:registeration:succesful"));
    }
}
const { dispatch } = new AppEventManager(event_listener_register_1.register);
exports.dispatch = dispatch;
//# sourceMappingURL=app.events.js.map