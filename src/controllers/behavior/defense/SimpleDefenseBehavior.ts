import { ISoliderDefendBehavior } from "../../../interfaces/ISoliderDefendBehavior";
import { IDisplayAdapter } from "../../../interfaces/IDisplayAdapter";
import { DisplayControllerFactory } from "../../../factories/DisplayControllerFactory";
import { ISolider } from "../../../interfaces/ISolider";
import { Helper } from "../../../helper/helper";

export class SimpleDefenseBehavior implements ISoliderDefendBehavior {
    displayAdapter: IDisplayAdapter;

    constructor() {
        this.displayAdapter = DisplayControllerFactory.create();
    }

    defend(dmg: number, soldier: ISolider) {
        // soldier dead - can't block
        if(dmg == soldier.health) {
            return dmg;
        }

        // get random modifier (+- 50% defense)
        const modifier = Helper.generateRandomInteger(0, Math.floor(soldier.defense * 0.5)) * (Helper.generateChance(50) ? 1 : -1);
        const dmgBlocked = soldier.defense + modifier;
        dmg -= dmgBlocked;

        this.displayAdapter.defend(`    ${soldier.name} defends ${dmgBlocked} damage and takes ${dmg} damage!`)
        return dmg;
    }
}
