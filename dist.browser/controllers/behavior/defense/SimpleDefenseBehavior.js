"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayControllerFactory_1 = require("../../../factories/DisplayControllerFactory");
const helper_1 = require("../../../helper/helper");
class SimpleDefenseBehavior {
    constructor() {
        this.displayAdapter = DisplayControllerFactory_1.DisplayControllerFactory.create();
    }
    defend(dmg, soldier) {
        // soldier dead - can't block
        if (dmg === soldier.health) {
            return dmg;
        }
        // get random modifier (+- 50% defense)
        const modifier = helper_1.Helper.generateRandomInteger(0, Math.floor(soldier.defense * 0.5)) * (helper_1.Helper.generateChance(50) ? 1 : -1);
        const dmgBlocked = soldier.defense + modifier;
        dmg -= dmgBlocked;
        this.displayAdapter.defend(`    ${soldier.name} defends ${dmgBlocked} damage and takes ${dmg} damage!`);
        return dmg;
    }
}
exports.SimpleDefenseBehavior = SimpleDefenseBehavior;
