import { ISoliderAttackBehavior } from "../../../interfaces/ISoliderAttackBehavior";
import { ISolider } from "../../../interfaces/ISolider";
import { IDisplayAdapter } from "../../../interfaces/IDisplayAdapter";
import { DisplayControllerFactory } from "../../../factories/DisplayControllerFactory";
import { Helper } from "../../../helper/helper";

export class DeathBlowBehavior implements ISoliderAttackBehavior {
    displayAdapter: IDisplayAdapter;

    constructor() {
        this.displayAdapter = DisplayControllerFactory.create();
    }

    // attack Behavior - death blow  *100% defender health
    attack(attacker: ISolider, defender: ISolider) {
        this.displayAdapter.attack(`**Death blow!!! ${attacker.name} annihilates ${defender.name}!!`);
        
        return defender.health;
    }
}
