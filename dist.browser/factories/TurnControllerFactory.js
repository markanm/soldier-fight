"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameTurnController_1 = require("../controllers/GameTurnController");
// create new turn controller
class TurnControllerFactory {
    static create(game) {
        return new GameTurnController_1.GameTurnController(game);
    }
}
exports.TurnControllerFactory = TurnControllerFactory;
