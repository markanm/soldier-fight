import { SimpleDefenseBehavior } from "../controllers/behavior/defense/SimpleDefenseBehavior";
import { BlockDefenseBehavior } from "../controllers/behavior/defense/BlockDefenseBehavior";
import { DodgeDefenseBehavior } from "../controllers/behavior/defense/DodgeDefenseBehavior";
import { Helper } from "../helper/helper";
import { GameConfig } from "../config";

// create new defense behavior according to chance
export class DefenseBehaviorFactory {
    static create() {
        if (Helper.generateChance(GameConfig.dodgeChance)) {                      // dodge
            return new DodgeDefenseBehavior();
        } else if (Helper.generateChance(GameConfig.blockChance)) {               // block
            return new BlockDefenseBehavior();
        } else {                                                                // normal
            return new SimpleDefenseBehavior();
        }
    }
}
