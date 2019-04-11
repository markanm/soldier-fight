import { IDisplayAdapter } from "./IDisplayAdapter";
import { ISoldier } from "./ISoldier";

export interface ISoldierDefendBehavior {
    displayAdapter: IDisplayAdapter;
    defend(dmg: number, soldier: ISoldier): number;
}
