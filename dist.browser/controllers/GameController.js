"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const GameFactory_1 = require("../factories/GameFactory");
const PerformanceMeasurement_1 = require("../helper/PerformanceMeasurement");
// main game controller - executes turns with delay
class GameController {
    run(firstPlayer, secondPlayer) {
        // create game
        const fPerf = new PerformanceMeasurement_1.PerformanceMeasurement("Game with init");
        this.game = GameFactory_1.GameFactory.create(firstPlayer, secondPlayer);
        const gPerf = new PerformanceMeasurement_1.PerformanceMeasurement("Game w/o init");
        const loop = setInterval(() => {
            if (this.game.getState().constructor.name !== "GameFinishedState") {
                // loop turns until game finishes
                this.game.getState().next();
            }
            else {
                // execute last state to print results
                this.game.getState().next();
                fPerf.end();
                gPerf.end();
                clearInterval(loop);
            }
        }, config_1.GameConfig.turnDelay);
    }
}
exports.GameController = GameController;
