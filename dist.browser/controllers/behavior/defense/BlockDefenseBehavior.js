"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayControllerFactory_1 = require("../../../factories/DisplayControllerFactory");
const helper_1 = require("../../../helper/helper");
class BlockDefenseBehavior {
    constructor() {
        this.displayAdapter = DisplayControllerFactory_1.DisplayControllerFactory.create();
    }
    defend(dmg, soldier) {
        // dead blow - can't block
        if (dmg == soldier.health) {
            return dmg;
        }
        // get random modifier (+- 50% defense) * 2
        const modifier = helper_1.Helper.generateRandomInteger(0, Math.floor(soldier.defense * 0.5))
            * (helper_1.Helper.generateChance(50) ? 1 : -1);
        const dmgBlocked = (soldier.defense + modifier) * 2;
        dmg -= dmgBlocked;
        this.displayAdapter.defend(`*   ${soldier.name} blocks ${dmgBlocked} damage and takes ${dmg} damage!!`);
        return dmg;
    }
}
exports.BlockDefenseBehavior = BlockDefenseBehavior;
