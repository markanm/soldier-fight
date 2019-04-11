"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RandomEventMain_1 = require("./RandomEventMain");
// random event - none
class RandomEventNoneBehavior extends RandomEventMain_1.RandomEventMain {
    constructor(game) {
        super(game);
        this.game = game;
    }
    execute() {
        this.game.displayAdapter.randomEvent("No random event...");
    }
}
exports.RandomEventNoneBehavior = RandomEventNoneBehavior;
