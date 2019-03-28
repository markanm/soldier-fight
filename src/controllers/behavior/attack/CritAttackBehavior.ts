import { ISoliderAttackBehavior } from "../../../interfaces/ISoliderAttackBehavior";
import { ISolider } from "../../../interfaces/ISolider";
import { IDisplayAdapter } from "../../../interfaces/IDisplayAdapter";
import { DisplayControllerFactory } from "../../../factories/DisplayControllerFactory";
import { Helper } from "../../../helper/helper";

export class CritAttackBehavior implements ISoliderAttackBehavior {
    displayAdapter: IDisplayAdapter;

    constructor() {
        this.displayAdapter = DisplayControllerFactory.create();
    }

    // attack Behavior - Crit  *(attacker attack +- 20%) x 2
    attack(attacker: ISolider, defender: ISolider) {
        const modifier = Helper.generateRandomInteger(0, Math.floor(attacker.attack * 0.2)) * (Helper.generateChance(50) ? 1 : -1);
        const dmg = (attacker.attack + modifier) * 2;
        
        this.displayAdapter.attack(`* ${attacker.name} crits ${defender.name} for ${dmg} damage...`);
        
        return dmg;
    }
}
