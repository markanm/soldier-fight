"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RandomEventEffect_1 = require("../../../enums/RandomEventEffect");
const SoldierFactory_1 = require("../../../factories/SoldierFactory");
const RandomEventMain_1 = require("./RandomEventMain");
// random event - add 10%/soldier count soldiers to affected players
class RandomEventReinforcementBehavior extends RandomEventMain_1.RandomEventMain {
    constructor(game) {
        super(game);
        this.game = game;
    }
    execute(player1, player2) {
        const affected = this.decideWhoIsAffected(player1.id, player2.id);
        this.game.displayAdapter.randomEvent(`${affected === RandomEventEffect_1.RandomEventEffect.All ? "All players " :
            player1.id === affected + 1 ? player1.name : player2.name} gets reinforcement!!`);
        if (affected === RandomEventEffect_1.RandomEventEffect.All) {
            this.executePlayer(0);
            this.executePlayer(1);
        }
        else {
            this.executePlayer(affected);
        }
    }
    executePlayer(player) {
        const numOfSoldiers = Math.ceil(this.game.players[player].soldiers.length * 0.1) === 0 ?
            1 : Math.ceil(this.game.players[player].soldiers.length * 0.1);
        const lastId = this.game.players[player].soldiers.length ? this.game.players[player].soldiers.length - 1 : 0;
        const last = lastId ? this.game.players[player].soldiers[lastId].id : 0;
        const m = last + numOfSoldiers;
        for (let i = last; i < m; i++) {
            this.game.players[player].soldiers.push(SoldierFactory_1.SoldierFactoy.create(i, player + 1, ""));
        }
        this.game.displayAdapter.randomEvent(`${this.game.players[player].name} got ${numOfSoldiers} new soldiers!!`);
    }
}
exports.RandomEventReinforcementBehavior = RandomEventReinforcementBehavior;
