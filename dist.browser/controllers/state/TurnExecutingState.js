"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TurnControllerFactory_1 = require("../../factories/TurnControllerFactory");
// game state - turn executing
class TurnExecutingState {
    constructor(game) {
        this.game = game;
        this.gameTurn = TurnControllerFactory_1.TurnControllerFactory.create(this.game);
    }
    next() {
        if (this.game.isGameDone) {
            this.game.setState(this.game.gameFinishedState);
        }
        else {
            this.gameTurn.execute();
        }
    }
}
exports.TurnExecutingState = TurnExecutingState;
