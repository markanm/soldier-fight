"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RandomEventEffect_1 = require("../../../enums/RandomEventEffect");
const helper_1 = require("../../../helper/helper");
// random event abstract class - logic to decide who is affected
class RandomEventMain {
    constructor(game) {
        this.game = game;
    }
    execute(player1, player2) {
    }
    decideWhoIsAffected(player1, player2) {
        if (helper_1.Helper.generateChance(30)) {
            return player1;
        }
        else if (helper_1.Helper.generateChance(20)) {
            return RandomEventEffect_1.RandomEventEffect.All;
        }
        else {
            return player2;
        }
    }
}
exports.RandomEventMain = RandomEventMain;
