"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayControllerFactory_1 = require("../factories/DisplayControllerFactory");
const RandomEventFactory_1 = require("../factories/RandomEventFactory");
const helper_1 = require("../helper/helper");
const PerformanceMeasurement_1 = require("../helper/PerformanceMeasurement");
// executes game turn
class GameTurnController {
    constructor(game) {
        this.turn = 0;
        if (GameTurnController._instance) {
            return GameTurnController._instance;
        }
        this.game = game;
        this.displayAdapter = DisplayControllerFactory_1.DisplayControllerFactory.create();
        GameTurnController._instance = this;
    }
    static get instance() {
        return GameTurnController._instance;
    }
    execute() {
        const perf = new PerformanceMeasurement_1.PerformanceMeasurement("Turn");
        this.turn++;
        this.displayAdapter.turnStarted(this.turn);
        // 50% chance for each player to start the turn first
        const rndIndex = helper_1.Helper.generateRandomInteger(0, 1);
        const negIndex = rndIndex === 0 ? 1 : 0;
        // execute player attacks
        this.executePlayer(rndIndex, negIndex);
        this.executePlayer(negIndex, rndIndex);
        // generate random event
        RandomEventFactory_1.RandomEventFactory.create(this.game).execute(this.game.players[rndIndex], this.game.players[negIndex]);
        // display turn score
        this.displayAdapter.turnFinished(this.turn, this.game.getScore());
        perf.end();
        return true;
    }
    executePlayer(index, negIndex) {
        this.game.players[index].soldiers.forEach((item) => {
            // get random soldier from the oposite team to attack
            const rand = this.game.players[negIndex].soldiers[Math.floor(Math.random()
                * this.game.players[negIndex].soldiers.length)];
            if (rand) {
                // execute attack & defend
                rand.executeDefend(item.executeAttack(rand));
                // check is soldier dead after attack
                if (this.checkIsSoldierDead(rand)) {
                    // remove soldier
                    this.game.players[negIndex].soldiers =
                        this.game.players[negIndex].soldiers.filter((x) => x.id !== rand.id);
                    // display that soldier is dead
                    this.displayAdapter.soldierDead(` R.I.P. ${rand.name}`);
                }
            }
        });
    }
    checkIsSoldierDead(soldier) {
        return soldier.health <= 0;
    }
}
exports.GameTurnController = GameTurnController;
