"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const CritAttackBehavior_1 = require("../controllers/behavior/attack/CritAttackBehavior");
const DeathBlowBehavior_1 = require("../controllers/behavior/attack/DeathBlowBehavior");
const SimpleAttackBehavior_1 = require("../controllers/behavior/attack/SimpleAttackBehavior");
const helper_1 = require("../helper/helper");
// create new attack behavior according to chance
class AttackBehaviorFactory {
    static create() {
        if (helper_1.Helper.generateChance(config_1.GameConfig.deathBlowChance)) { // death blow
            return new DeathBlowBehavior_1.DeathBlowBehavior();
        }
        else if (helper_1.Helper.generateChance(config_1.GameConfig.critChance)) { // crit
            return new CritAttackBehavior_1.CritAttackBehavior();
        }
        else { // normal
            return new SimpleAttackBehavior_1.SimpleAttackBehavior();
        }
    }
}
exports.AttackBehaviorFactory = AttackBehaviorFactory;
