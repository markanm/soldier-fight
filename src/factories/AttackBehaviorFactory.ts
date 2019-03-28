import { SimpleAttackBehavior } from "../controllers/behavior/attack/SimpleAttackBehavior";
import { CritAttackBehavior } from "../controllers/behavior/attack/CritAttackBehavior";
import { DeathBlowBehavior } from "../controllers/behavior/attack/DeathBlowBehavior";
import { Helper } from "../helper/helper";
import { GameConfig } from "../config";

// create new attack behavior according to chance
export class AttackBehaviorFactory {
    static create() {
        if(Helper.generateChance(GameConfig.deathBlowChance)){                  // death blow
            return new DeathBlowBehavior();
        } else if(Helper.generateChance(GameConfig.critChance)){                // crit
            return new CritAttackBehavior();
        } else {                                                                // normal
            return new SimpleAttackBehavior();
        }
    }
}