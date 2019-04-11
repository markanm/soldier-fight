"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
// display adapter - console logger
class ConsoleDisplayController {
    constructor() {
        if (ConsoleDisplayController._instance) {
            return ConsoleDisplayController._instance;
        }
        ConsoleDisplayController._instance = this;
    }
    static get instance() {
        return ConsoleDisplayController._instance;
    }
    gameInitialized() {
        if (config_1.GameConfig.logLevel > 1) {
            console.log("* Game initialized! *");
        }
    }
    playerCreated(name) {
        if (config_1.GameConfig.logLevel > 1) {
            console.log(`*Player ${name} created!`);
        }
    }
    soldierCreated(name) {
        if (config_1.GameConfig.logLevel > 2) {
            console.log(`Soldier ${name} created!`);
        }
    }
    soldiersCreated(player, count) {
        if (config_1.GameConfig.logLevel > 1) {
            console.log(` `);
            console.log(`Player ${player} created ${count} soldiers!`);
            console.log(` `);
        }
    }
    gameStarted() {
        console.log("** Game started! **");
        console.log(` `);
    }
    attack(message) {
        if (config_1.GameConfig.logLevel > 2) {
            console.log(` `, message);
        }
    }
    defend(message) {
        if (config_1.GameConfig.logLevel > 2) {
            console.log(` `, message);
            console.log(` `);
        }
    }
    soldierDead(message) {
        if (config_1.GameConfig.logLevel > 1) {
            console.log(` `);
            console.log(`    +++++++++++++++++++`);
            console.log(`     *`, message);
            console.log(`    +++++++++++++++++++`);
            console.log(` `);
        }
    }
    randomEvent(message) {
        if (config_1.GameConfig.logLevel > 1) {
            console.log(` `);
            console.log(`     ********* Random Event: `, message);
            console.log(` `);
        }
    }
    turnStarted(turn) {
        if (config_1.GameConfig.logLevel > 1) {
            console.log(` `);
            console.log(`--------------------------`);
            console.log(`**  TURN ${turn} STARTED! **`);
            console.log(` `);
        }
    }
    turnFinished(turn, score) {
        if (config_1.GameConfig.logLevel > 1) {
            // console.log("************************");
            console.log(` `);
            console.log(`**  TURN ${turn} FINISHED  **`);
            console.log("--------------------------");
            console.log(`${score}`, ` Next turn starts in ${config_1.GameConfig.turnDelay / 1000}s...`);
            console.log(` `);
        }
    }
    gameFinished(winner, score) {
        console.log(`************************`);
        console.log(`Game finished!! ${winner} ${score}`);
    }
}
ConsoleDisplayController._instance = new ConsoleDisplayController();
exports.ConsoleDisplayController = ConsoleDisplayController;
