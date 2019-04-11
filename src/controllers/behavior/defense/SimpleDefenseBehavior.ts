import { DisplayControllerFactory } from "../../../factories/DisplayControllerFactory";
import { Helper } from "../../../helper/helper";
import { IDisplayAdapter } from "../../../interfaces/IDisplayAdapter";
import { ISoldier } from "../../../interfaces/ISoldier";
import { ISoldierDefendBehavior } from "../../../interfaces/ISoldierDefendBehavior";

export class SimpleDefenseBehavior implements ISoldierDefendBehavior {
    displayAdapter: IDisplayAdapter;

    constructor() {
        this.displayAdapter = DisplayControllerFactory.create();
    }

    defend(dmg: number, soldier: ISoldier) {
        // soldier dead - can't block
        if (dmg === soldier.health) {
            return dmg;
        }

        // get random modifier (+- 50% defense)
        const modifier = Helper.generateRandomInteger(0,
            Math.floor(soldier.defense * 0.5)) * (Helper.generateChance(50) ? 1 : -1);
        const dmgBlocked = soldier.defense + modifier;
        dmg -= dmgBlocked;

        this.displayAdapter.defend(soldier, "defends", dmgBlocked, dmg);
        return dmg;
    }
}
