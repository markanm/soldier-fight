import { ISoldier } from "./ISoldier";
import { IRandomEventBehavior } from "./IRandomEventBehavior";

export interface IDisplayAdapter {
    gameInitialized(): void;
    playerCreated(name: string): void;

    soldierCreated(soldier: ISoldier): void;
    soldiersCreated(player: string, count: number): void;

    gameStarted(): void;

    attack(attacker: ISoldier, defender: ISoldier, attack: string, dmg: number): void;
    defend(defender: ISoldier, defense: string, dmgBlocked: number, dmg: number): void;

    soldierDead(soldier: ISoldier): void;

    turnStarted(turn: number): void;
    turnFinished(turn: number, score: string): void;

    updateScore(p1: number, p2: number): void;

    randomEvent(event: IRandomEventBehavior): void;

    gameFinished(winner: string, score: string): void;
}
