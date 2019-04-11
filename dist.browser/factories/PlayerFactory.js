"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("../models/Player");
// create new player
class PlayerFactory {
    static create(id, soldierCount, name) {
        return new Player_1.Player(id, soldierCount, name);
    }
}
exports.PlayerFactory = PlayerFactory;
