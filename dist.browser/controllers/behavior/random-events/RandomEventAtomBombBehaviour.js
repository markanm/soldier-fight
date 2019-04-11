"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RandomEventEffect_1 = require("../../../enums/RandomEventEffect");
const RandomEventMain_1 = require("./RandomEventMain");
// random event atom bomb - kill all soldiers for affected player/s
class RandomEventAtomBombBehavior extends RandomEventMain_1.RandomEventMain {
    constructor(game) {
        super(game);
        this.game = game;
    }
    execute(player1, player2) {
        const affected = this.decideWhoIsAffected(player1.id, player2.id);
        if (affected === RandomEventEffect_1.RandomEventEffect.All) {
            this.executePlayer(0);
            this.executePlayer(1);
        }
        else {
            this.executePlayer(affected);
        }
        if (this.game.isGameDone) {
            this.game.setState(this.game.gameFinishedState);
        }
        this.game.displayAdapter.randomEvent(`${player1.name} drops the Atom bomb on
            ${affected === RandomEventEffect_1.RandomEventEffect.All ? "everyone" :
            player1.id === affected ? player2.name : "himself"} !! Everyones dead :/`);
    }
    executePlayer(player) {
        this.game.players[player].soldiers = [];
    }
}
exports.RandomEventAtomBombBehavior = RandomEventAtomBombBehavior;
