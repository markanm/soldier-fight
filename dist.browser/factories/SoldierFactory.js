"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Soldier_1 = require("../models/Soldier");
// create new soldier
class SoldierFactoy {
    static create(id, playerId, name) {
        return new Soldier_1.Soldier(id, playerId, name);
    }
}
exports.SoldierFactoy = SoldierFactoy;
