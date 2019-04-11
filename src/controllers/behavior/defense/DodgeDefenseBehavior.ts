import { DisplayControllerFactory } from "../../../factories/DisplayControllerFactory";
import { IDisplayAdapter } from "../../../interfaces/IDisplayAdapter";
import { ISoldier } from "../../../interfaces/ISoldier";
import { ISoldierDefendBehavior } from "../../../interfaces/ISoldierDefendBehavior";

export class DodgeDefenseBehavior implements ISoldierDefendBehavior {
    displayAdapter: IDisplayAdapter;

    constructor() {
        this.displayAdapter = DisplayControllerFactory.create();
    }

    defend(dmg: number, soldier: ISoldier) {
        // soldier dead - can't block
        if (dmg === soldier.health) {
            return dmg;
        }

        // dodge - take 0 dmg
        this.displayAdapter.defend(soldier, "dodges", dmg, 0);
        return 0;
    }
}
