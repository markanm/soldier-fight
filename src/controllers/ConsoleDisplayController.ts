import { GameConfig } from "../config";
import { IDisplayAdapter } from "../interfaces/IDisplayAdapter";
import { ISoldier } from "../interfaces/ISoldier";
import { IRandomEventBehavior } from "../interfaces/IRandomEventBehavior";

// display adapter - console logger
export class ConsoleDisplayController implements IDisplayAdapter {

    private static _instance: ConsoleDisplayController = new ConsoleDisplayController();

    constructor() {
        if (ConsoleDisplayController._instance) {
            return ConsoleDisplayController._instance;
        }

        ConsoleDisplayController._instance = this;
    }

    static get instance() {
        return ConsoleDisplayController._instance;
    }

    gameInitialized(): void {
        if (GameConfig.logLevel > 1) {
            console.log("* Game initialized! *");
        }
    }

    playerCreated(name: string): void {
        if (GameConfig.logLevel > 1) {
            console.log(`*Player ${name} created!`);
        }
    }

    soldierCreated(soldier: ISoldier): void {
        if (GameConfig.logLevel > 2) {
            console.log(`Soldier ${soldier.name} created!`);
        }
    }

    soldiersCreated(player: string, count: number): void {
        if (GameConfig.logLevel > 1) {
            console.log(` `);
            console.log(`Player ${player} created ${count} soldiers!`);
            console.log(` `);
        }
    }

    gameStarted(): void {
        console.log("** Game started! **");
        console.log(` `);
    }

    attack(attacker: ISoldier, defender: ISoldier, attack: string, dmg: number): void {
        if (GameConfig.logLevel > 2) {
            console.log(` `, `${attacker.name} ${attack} ${defender.name} for ${dmg} damage...`);
        }
    }

    defend(defender: ISoldier, defense: string, dmgBlocked: number, dmg: number) {
        if (GameConfig.logLevel > 2) {
            console.log(` `, `    ${defender.name} ${defense} ${dmgBlocked} damage and takes ${dmg} damage!`);
            console.log(` `);
        }
    }

    soldierDead(soldier: ISoldier): void {
        if (GameConfig.logLevel > 1) {
            console.log(` `);
            console.log(`    +++++++++++++++++++`);
            console.log(`     *`, ` R.I.P. ${soldier.name}`);
            console.log(`    +++++++++++++++++++`);
            console.log(` `);
        }
    }

    randomEvent(event: IRandomEventBehavior): void {
        if (GameConfig.logLevel > 1) {
            console.log(` `);
            console.log(`     ********* Random Event: `, '');
            console.log(` `);
        }
    }

    turnStarted(turn: number): void {
        if (GameConfig.logLevel > 1) {
            console.log(` `);
            console.log(`--------------------------`);
            console.log(`**  TURN ${turn} STARTED! **`);
            console.log(` `);
        }
    }

    turnFinished(turn: number, score: string) {
        if (GameConfig.logLevel > 1) {
            // console.log("************************");
            console.log(` `);
            console.log(`**  TURN ${turn} FINISHED  **`);
            console.log("--------------------------");
            console.log(`${score}`, ` Next turn starts in ${GameConfig.turnDelay / 1000}s...`);
            console.log(` `);
        }
    }

    gameFinished(winner: string, score: string): void {
        console.log(`************************`);
        console.log(`Game finished!! ${winner} ${score}`);
    }

    updateScore(p1: number, p2: number): void {
    }
}
