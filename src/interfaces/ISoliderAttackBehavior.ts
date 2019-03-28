import { ISolider } from "./ISolider";
import { IDisplayAdapter } from "./IDisplayAdapter";

export interface ISoliderAttackBehavior {
    displayAdapter: IDisplayAdapter;
    attack(attacker: ISolider, target: ISolider): number;
}
