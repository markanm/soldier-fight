import { DisplayControllerFactory } from "../../../factories/DisplayControllerFactory";
import { Helper } from "../../../helper/helper";
import { IDisplayAdapter } from "../../../interfaces/IDisplayAdapter";
import { ISoldier } from "../../../interfaces/ISoldier";
import { ISoldierAttackBehavior } from "../../../interfaces/ISoldierAttackBehavior";

export class SimpleAttackBehavior implements ISoldierAttackBehavior {
    displayAdapter: IDisplayAdapter;

    constructor() {
        this.displayAdapter = DisplayControllerFactory.create();
    }

    // attack Behavior - normal  *attacker attack +- 20%
    attack(attacker: ISoldier, defender: ISoldier) {
        const modifier = Helper.generateRandomInteger(0,
            Math.floor(attacker.attack * 0.2)) * (Helper.generateChance(50) ? 1 : -1);
        const dmg = attacker.attack + modifier;
        this.displayAdapter.attack(attacker, defender, "attacks", dmg);

        return dmg;
    }
}
