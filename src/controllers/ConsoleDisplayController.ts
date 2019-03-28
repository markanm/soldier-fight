import { IDisplayAdapter } from "../interfaces/IDisplayAdapter";
import { GameConfig } from "../config";

// display adapter - console logger
export class ConsoleDisplayController implements IDisplayAdapter {

    private static _instance : ConsoleDisplayController = new ConsoleDisplayController();

    constructor () {
        if (ConsoleDisplayController._instance) {
            return ConsoleDisplayController._instance;
        }
            
        ConsoleDisplayController._instance = this;
    }

    static get instance () {
        return ConsoleDisplayController._instance;
    }

    gameInitialized(): void {
        if(GameConfig.logLevel > 1){
            console.log("* Game initialized! *");
        }
    }    
    
    playerCreated(name: string): void {
        if(GameConfig.logLevel > 1){
            console.log(`*Player ${name} created!`);
        }
    }

    soldierCreated(name: string): void {
        if(GameConfig.logLevel > 2){
            console.log(`Solider ${name} created!`);
        }
    }

    solidersCreated(player: string, count: number): void {
        if(GameConfig.logLevel > 1){
            console.log(` `);
            console.log(`Player ${player} created ${count} soliders!`);
            console.log(` `);
        }
    }

    gameStarted(): void {
        console.log("** Game started! **");
        console.log(` `);
    }

    attack(message: string): void {
        if(GameConfig.logLevel > 2){
            console.log(` `, message);
        }
    }

    defend(message: string) {
        if(GameConfig.logLevel > 2){
            console.log(` `, message);
            console.log(` `);
        }
    }

    soldierDead(message: string): void {
        if(GameConfig.logLevel > 1){
            console.log(` `); 
            console.log(`    +++++++++++++++++++`);
            console.log(`     *`, message);
            console.log(`    +++++++++++++++++++`);  
            console.log(` `);
        }   
    }

    randomEvent(message: string): void {
        if(GameConfig.logLevel > 1){
            console.log(` `); 
            console.log(`     ********* Random Event: `, message);
            console.log(` `);
        }   
    }

    turnStarted(turn: number): void {
        if(GameConfig.logLevel > 1){
            console.log(` `);
            console.log(`--------------------------`);
            console.log(`**  TURN ${turn} STARTED! **`);
            console.log(` `);
        }
    }

    turnFinished(turn: number, score: string) {
        if(GameConfig.logLevel > 1){
            //console.log("************************");
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
}