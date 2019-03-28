import { ISolider } from "../interfaces/ISolider";
import { IDisplayAdapter } from "../interfaces/IDisplayAdapter";
import { DisplayControllerFactory } from "../factories/DisplayControllerFactory";
import { AttackBehaviorFactory } from "../factories/AttackBehaviorFactory";
import { DefenseBehaviorFactory } from "../factories/DefenseBehaviorFactory";
import { GameConfig } from "../config";

export class Solider implements ISolider {
    displayAdapter: IDisplayAdapter;
    id: number;    
    name: string;
    playerId: number;

    health: number;
    attack: number;
    defense: number;

    constructor(id: number, playerId: number) {
        this.displayAdapter = DisplayControllerFactory.create();

        this.playerId = playerId;
        this.id = id;
        this.name = `P${playerId}-S${id}`;

        this.health = GameConfig.baseHealth;
        this.attack = GameConfig.baseAttack;
        this.defense = GameConfig.baseDefense;

        this.displayAdapter.soldierCreated(this.name);
    }

    executeAttack(target: ISolider): number {
        return AttackBehaviorFactory.create().attack(this, target);
    }

    executeDefend(dmg: number): void {
        this.health -= DefenseBehaviorFactory.create().defend(dmg, this);
    }
}
