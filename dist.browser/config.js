"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./enums/LogLevel");
class GameConfig {
}
// turn delay in ms
GameConfig.turnDelay = 1000;
// log level
GameConfig.logLevel = LogLevel_1.LogLevel.Full;
GameConfig.personalize = true;
// base stats
GameConfig.baseHealth = 100;
GameConfig.baseAttack = 35;
GameConfig.baseDefense = 6;
// crit chance 0 - 100
GameConfig.critChance = 10;
// death blow chance 0 - 100
GameConfig.deathBlowChance = 2;
// chance for block in each attack 0 - 100
GameConfig.blockChance = 10;
// dodge chance 0 - 100
GameConfig.dodgeChance = 4;
exports.GameConfig = GameConfig;
