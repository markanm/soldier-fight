import { ISoliderDefendBehavior } from "./ISoliderDefendBehavior";
import { IDisplayAdapter } from "./IDisplayAdapter";
import { AttackBehaviorFactory } from "../factories/AttackBehaviorFactory";

export interface ISolider {
    id: number;
    name: string;
    playerId: number;
    displayAdapter: IDisplayAdapter;

    health: number;
    attack: number;
    defense: number;

    executeAttack(target: ISolider): number;
    executeDefend(dmg: number): void;
}