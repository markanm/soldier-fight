"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SimpleDefenseBehavior_1 = require("../controllers/behavior/defense/SimpleDefenseBehavior");
const BlockDefenseBehavior_1 = require("../controllers/behavior/defense/BlockDefenseBehavior");
const DodgeDefenseBehavior_1 = require("../controllers/behavior/defense/DodgeDefenseBehavior");
const helper_1 = require("../helper/helper");
const config_1 = require("../config");
// create new defense behavior according to chance
class DefenseBehaviorFactory {
    static create() {
        if (helper_1.Helper.generateChance(config_1.GameConfig.dodgeChance)) { // dodge
            return new DodgeDefenseBehavior_1.DodgeDefenseBehavior();
        }
        else if (helper_1.Helper.generateChance(config_1.GameConfig.blockChance)) { // block
            return new BlockDefenseBehavior_1.BlockDefenseBehavior();
        }
        else { // normal
            return new SimpleDefenseBehavior_1.SimpleDefenseBehavior();
        }
    }
}
exports.DefenseBehaviorFactory = DefenseBehaviorFactory;
