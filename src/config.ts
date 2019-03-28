import { LogLevel } from "./enums/LogLevel";

export class GameConfig {
    // turn delay in ms
    static turnDelay: number = 500; 
    // log level
    static logLevel: LogLevel = LogLevel.Full;

    // base stats
    static baseHealth: number = 100;
    static baseAttack: number = 18;
    static baseDefense: number = 6;

    // crit chance 0 - 100
    static critChance: number = 10; 
    // death blow chance 0 - 100
    static deathBlowChance: number = 2;

    // chance for block in each attack 0 - 100
    static blockChance: number = 100;
    // dodge chance 0 - 100
    static dodgeChance: number = 4;


}