import { GameConfig } from "../config";
import { AttackBehaviorFactory } from "../factories/AttackBehaviorFactory";
import { DefenseBehaviorFactory } from "../factories/DefenseBehaviorFactory";
import { DisplayControllerFactory } from "../factories/DisplayControllerFactory";
import { IDisplayAdapter } from "../interfaces/IDisplayAdapter";
import { ISoldier } from "../interfaces/ISoldier";

export class Soldier implements ISoldier {
    displayAdapter: IDisplayAdapter;
    id: number;
    name: string;
    playerId: number;

    health: number;
    attack: number;
    defense: number;

    constructor(id: number, playerId: number, name: string) {
        this.displayAdapter = DisplayControllerFactory.create();

        this.playerId = playerId;
        this.id = id;
        this.name = name;

        this.health = GameConfig.baseHealth;
        this.attack = GameConfig.baseAttack;
        this.defense = GameConfig.baseDefense;

        this.displayAdapter.soldierCreated(this);
    }

    executeAttack(target: ISoldier): number {
        return AttackBehaviorFactory.create().attack(this, target);
    }

    executeDefend(dmg: number): void {
        this.health -= DefenseBehaviorFactory.create().defend(dmg, this);
    }
}
