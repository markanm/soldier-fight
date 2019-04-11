"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayControllerFactory_1 = require("../../../factories/DisplayControllerFactory");
class DodgeDefenseBehavior {
    constructor() {
        this.displayAdapter = DisplayControllerFactory_1.DisplayControllerFactory.create();
    }
    defend(dmg, soldier) {
        // soldier dead - can't block
        if (dmg === soldier.health) {
            return dmg;
        }
        // dodge - take 0 dmg
        this.displayAdapter.defend(`**  ${soldier.name} dodges the attack and takes no damage!!`);
        return 0;
    }
}
exports.DodgeDefenseBehavior = DodgeDefenseBehavior;
