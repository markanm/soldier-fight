"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TurnControllerFactory_1 = require("../../factories/TurnControllerFactory");
// game state - initialized
class GameInitializedState {
    constructor(game) {
        this.gameTurn = TurnControllerFactory_1.TurnControllerFactory.create(game);
        this.game = game;
    }
    next() {
        this.game.setState(this.game.turnExecutingState);
        this.game.displayAdapter.gameStarted();
        this.gameTurn.execute();
    }
}
exports.GameInitializedState = GameInitializedState;
