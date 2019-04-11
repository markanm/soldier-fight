import { DisplayControllerFactory } from "../../../factories/DisplayControllerFactory";
import { IDisplayAdapter } from "../../../interfaces/IDisplayAdapter";
import { ISoldier } from "../../../interfaces/ISoldier";
import { ISoldierAttackBehavior } from "../../../interfaces/ISoldierAttackBehavior";

export class DeathBlowBehavior implements ISoldierAttackBehavior {
    displayAdapter: IDisplayAdapter;

    constructor() {
        this.displayAdapter = DisplayControllerFactory.create();
    }

    // attack Behavior - death blow  *100% defender health
    attack(attacker: ISoldier, defender: ISoldier) {
        this.displayAdapter.attack(attacker, defender, "kills", defender.health);

        return defender.health;
    }
}
