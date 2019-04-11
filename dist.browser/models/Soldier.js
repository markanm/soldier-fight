"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const AttackBehaviorFactory_1 = require("../factories/AttackBehaviorFactory");
const DefenseBehaviorFactory_1 = require("../factories/DefenseBehaviorFactory");
const DisplayControllerFactory_1 = require("../factories/DisplayControllerFactory");
class Soldier {
    constructor(id, playerId, name) {
        this.displayAdapter = DisplayControllerFactory_1.DisplayControllerFactory.create();
        this.playerId = playerId;
        this.id = id;
        this.name = name;
        this.health = config_1.GameConfig.baseHealth;
        this.attack = config_1.GameConfig.baseAttack;
        this.defense = config_1.GameConfig.baseDefense;
        this.displayAdapter.soldierCreated(this.name);
    }
    executeAttack(target) {
        return AttackBehaviorFactory_1.AttackBehaviorFactory.create().attack(this, target);
    }
    executeDefend(dmg) {
        this.health -= DefenseBehaviorFactory_1.DefenseBehaviorFactory.create().defend(dmg, this);
    }
}
exports.Soldier = Soldier;
