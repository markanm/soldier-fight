import { ISoldierDefendBehavior } from "./ISoldierDefendBehavior";
import { IDisplayAdapter } from "./IDisplayAdapter";
import { AttackBehaviorFactory } from "../factories/AttackBehaviorFactory";

export interface ISoldier {
    id: number;
    name: string;
    playerId: number;
    displayAdapter: IDisplayAdapter;

    health: number;
    attack: number;
    defense: number;

    executeAttack(target: ISoldier): number;
    executeDefend(dmg: number): void;
}
