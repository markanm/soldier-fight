"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameInitializedState_1 = require("../controllers/state/GameInitializedState");
const TurnExecutingState_1 = require("../controllers/state/TurnExecutingState");
const GameFinishedState_1 = require("../controllers/state/GameFinishedState");
// create new game states
class GameStateFactory {
    static createGameInitializedState(game) {
        return new GameInitializedState_1.GameInitializedState(game);
    }
    static createTurnExecutingState(game) {
        return new TurnExecutingState_1.TurnExecutingState(game);
    }
    static createGameFinishedState(game) {
        return new GameFinishedState_1.GameFinishedState(game);
    }
}
exports.GameStateFactory = GameStateFactory;
