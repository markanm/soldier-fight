"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = require("../models/Game");
// create new game
class GameFactory {
    static create(p1SoldierCnt, p2SoldierCnt) {
        return new Game_1.Game([p1SoldierCnt, p2SoldierCnt]);
    }
}
exports.GameFactory = GameFactory;
