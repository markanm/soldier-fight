"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConsoleDisplayController_1 = require("../controllers/ConsoleDisplayController");
// createe new display adapter - console adapter
class DisplayControllerFactory {
    static create() {
        return new ConsoleDisplayController_1.ConsoleDisplayController();
    }
}
exports.DisplayControllerFactory = DisplayControllerFactory;
