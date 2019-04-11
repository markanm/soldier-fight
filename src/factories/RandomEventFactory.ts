import { RandomEventAtomBombBehavior } from "../controllers/behavior/random-events/RandomEventAtomBombBehaviour";
import { RandomEventHealBehavior } from "../controllers/behavior/random-events/RandomEventHealBehavior";
import { RandomEventNoneBehavior } from "../controllers/behavior/random-events/RandomEventNoneBehavior";
import { RandomEventReinforcementBehavior } from "../controllers/behavior/random-events/RandomEventReinforcementBehavior";
import { Helper } from "../helper/helper";
import { IGame } from "../interfaces/IGame";

// create new random event based on chance
export class RandomEventFactory {
    static create(game: IGame) {
        if (Helper.generateChance(2)) {
            return new RandomEventAtomBombBehavior(game);
        } else if (Helper.generateChance(10)) {
            return new RandomEventReinforcementBehavior(game);
        } else if (Helper.generateChance(25)) {
            return new RandomEventHealBehavior(game);
        } else {
            return new RandomEventNoneBehavior(game);
        }
    }
}
