"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayControllerFactory_1 = require("../factories/DisplayControllerFactory");
const GameStateFactory_1 = require("../factories/GameStateFactory");
const PlayerFactory_1 = require("../factories/PlayerFactory");
class Game {
    constructor(soldiersCount) {
        this.players = [];
        // create display controller
        this.displayAdapter = DisplayControllerFactory_1.DisplayControllerFactory.create();
        // crete game states
        this.gameInitializedState = GameStateFactory_1.GameStateFactory.createGameInitializedState(this);
        this.turnExecutingState = GameStateFactory_1.GameStateFactory.createTurnExecutingState(this);
        this.gameFinishedState = GameStateFactory_1.GameStateFactory.createGameFinishedState(this);
        // generate players
        this.generatePlayers(soldiersCount);
        // game initialized - set init state
        this.setState(this.gameInitializedState);
        this.displayAdapter.gameInitialized();
    }
    generatePlayers(soldiersCount) {
        this.players = [];
        let i = 1;
        soldiersCount.forEach((x) => {
            this.players.push(PlayerFactory_1.PlayerFactory.create(i++, x, `P${i}`));
        });
    }
    setState(state) {
        this.gameState = state;
    }
    getState() {
        return this.gameState;
    }
    get isGameDone() {
        return this.players.find((x) => x.soldiers.length === 0) != null;
    }
    getWinner() {
        if (this.players[0].soldiers.length === this.players[1].soldiers.length) {
            return `Everyone's dead...but at least it's a draw!! `;
        }
        return this.players[0].soldiers.length > this.players[1].soldiers.length ?
            this.players[0].name ? `${this.players[0].name} is the winner!!` : "" :
            this.players[1].name ? `${this.players[1].name} is the winner!!` : "";
    }
    getScore() {
        return `Score: ${this.players[0].soldiers.length} - ${this.players[1].soldiers.length}`;
    }
}
exports.Game = Game;
