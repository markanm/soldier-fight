"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayControllerFactory_1 = require("../../../factories/DisplayControllerFactory");
const helper_1 = require("../../../helper/helper");
class SimpleAttackBehavior {
    constructor() {
        this.displayAdapter = DisplayControllerFactory_1.DisplayControllerFactory.create();
    }
    // attack Behavior - normal  *attacker attack +- 20%
    attack(attacker, defender) {
        const modifier = helper_1.Helper.generateRandomInteger(0, Math.floor(attacker.attack * 0.2)) * (helper_1.Helper.generateChance(50) ? 1 : -1);
        const dmg = attacker.attack + modifier;
        this.displayAdapter.attack(`  ${attacker.name} attacks ${defender.name} for ${dmg} damage...`);
        return dmg;
    }
}
exports.SimpleAttackBehavior = SimpleAttackBehavior;
