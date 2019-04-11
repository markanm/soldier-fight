"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayControllerFactory_1 = require("../../../factories/DisplayControllerFactory");
const helper_1 = require("../../../helper/helper");
class CritAttackBehavior {
    constructor() {
        this.displayAdapter = DisplayControllerFactory_1.DisplayControllerFactory.create();
    }
    // attack Behavior - Crit  *(attacker attack +- 20%) x 2
    attack(attacker, defender) {
        const modifier = helper_1.Helper.generateRandomInteger(0, Math.floor(attacker.attack * 0.2)) * (helper_1.Helper.generateChance(50) ? 1 : -1);
        const dmg = (attacker.attack + modifier) * 2;
        this.displayAdapter.attack(attacker, defender, dmg);
        return dmg;
    }
}
exports.CritAttackBehavior = CritAttackBehavior;
