"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// game state - finished
class GameFinishedState {
    constructor(game) {
        this.game = game;
    }
    next() {
        this.game.displayAdapter.gameFinished(this.game.getWinner(), this.game.getScore());
    }
}
exports.GameFinishedState = GameFinishedState;
