"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RandomEventAtomBombBehaviour_1 = require("../controllers/behavior/random-events/RandomEventAtomBombBehaviour");
const RandomEventHealBehavior_1 = require("../controllers/behavior/random-events/RandomEventHealBehavior");
const RandomEventNoneBehavior_1 = require("../controllers/behavior/random-events/RandomEventNoneBehavior");
const RandomEventReinforcementBehavior_1 = require("../controllers/behavior/random-events/RandomEventReinforcementBehavior");
const helper_1 = require("../helper/helper");
// create new random event based on chance
class RandomEventFactory {
    static create(game) {
        if (helper_1.Helper.generateChance(2)) {
            return new RandomEventAtomBombBehaviour_1.RandomEventAtomBombBehavior(game);
        }
        else if (helper_1.Helper.generateChance(10)) {
            return new RandomEventReinforcementBehavior_1.RandomEventReinforcementBehavior(game);
        }
        else if (helper_1.Helper.generateChance(25)) {
            return new RandomEventHealBehavior_1.RandomEventHealBehavior(game);
        }
        else {
            return new RandomEventNoneBehavior_1.RandomEventNoneBehavior(game);
        }
    }
}
exports.RandomEventFactory = RandomEventFactory;
