import { IDisplayAdapter } from "./IDisplayAdapter";
import { ISoldier } from "./ISoldier";

export interface ISoldierAttackBehavior {
    displayAdapter: IDisplayAdapter;
    attack(attacker: ISoldier, target: ISoldier): number;
}
