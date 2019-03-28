import { IDisplayAdapter } from "./IDisplayAdapter";
import { ISolider } from "./ISolider";

export interface ISoliderDefendBehavior {
    displayAdapter: IDisplayAdapter;
    defend(dmg: number, soldier: ISolider): number;
}
