import { ISoliderDefendBehavior } from "../../../interfaces/ISoliderDefendBehavior";
import { IDisplayAdapter } from "../../../interfaces/IDisplayAdapter";
import { DisplayControllerFactory } from "../../../factories/DisplayControllerFactory";
import { ISolider } from "../../../interfaces/ISolider";
import { Helper } from "../../../helper/helper";

export class DodgeDefenseBehavior implements ISoliderDefendBehavior {
    displayAdapter: IDisplayAdapter;

    constructor() {
        this.displayAdapter = DisplayControllerFactory.create();
    }

    defend(dmg: number, soldier: ISolider) {
        // soldier dead - can't block
        if(dmg == soldier.health) {
            return dmg;
        }

        // dodge - take 0 dmg
        this.displayAdapter.defend(`**  ${soldier.name} dodges the attack and takes no damage!!`)
        return 0;
    }
}
