"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayControllerFactory_1 = require("../../../factories/DisplayControllerFactory");
class DeathBlowBehavior {
    constructor() {
        this.displayAdapter = DisplayControllerFactory_1.DisplayControllerFactory.create();
    }
    // attack Behavior - death blow  *100% defender health
    attack(attacker, defender) {
        this.displayAdapter.attack(`**Death blow!!! ${attacker.name} annihilates ${defender.name}!!`);
        return defender.health;
    }
}
exports.DeathBlowBehavior = DeathBlowBehavior;
