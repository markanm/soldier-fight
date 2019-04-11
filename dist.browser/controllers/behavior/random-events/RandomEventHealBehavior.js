"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RandomEventEffect_1 = require("../../../enums/RandomEventEffect");
const RandomEventMain_1 = require("./RandomEventMain");
// random event - heal all affected players soldiers for 30 health
class RandomEventHealBehavior extends RandomEventMain_1.RandomEventMain {
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
        this.game.displayAdapter.randomEvent(`${affected === RandomEventEffect_1.RandomEventEffect.All ?
            "Both teams" : player1.id === affected ?
            player1.name : player2.name} units are healed for 30 damage!!`);
    }
    executePlayer(player) {
        this.game.players[player].soldiers.forEach((item) => {
            item.health += 5;
        });
    }
}
exports.RandomEventHealBehavior = RandomEventHealBehavior;
