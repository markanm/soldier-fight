import { IDisplayAdapter } from "../interfaces/IDisplayAdapter";
import { ISoldier } from "../interfaces/ISoldier";
import { Helper } from "../helper/helper";
import { DOMCanvasService } from "../services/DOMCanvasService";
import { DOMLogService } from "../services/DOMLogService";
import { DOMScoreService } from "../services/DOMScoreService";
import { IRandomEventBehavior } from "../interfaces/IRandomEventBehavior";

export class DOMDisplayController implements IDisplayAdapter {

    private static _instance: DOMDisplayController = new DOMDisplayController();
    private _domCanvasService: DOMCanvasService;
    private _domLogService: DOMLogService;
    private _domScoreService: DOMScoreService;

    constructor() {
        this._domCanvasService = new DOMCanvasService();
        this._domLogService = new DOMLogService();
        this._domScoreService = new DOMScoreService();

        if (DOMDisplayController._instance) {
            return DOMDisplayController._instance;
        }

        DOMDisplayController._instance = this;
    }

    static get instance() {
        return DOMDisplayController._instance;
    }
   
    gameInitialized(): void {
        this._domLogService.appendToLog('Game initialized');
    }

    playerCreated(name: string): void {
        this._domLogService.appendToLog(`Player ${name} created`);
    }

    soldierCreated(soldier: ISoldier): void {
        this._domLogService.appendToLog(`Soldier ${this._domLogService.addPlayerLabel(soldier.name, soldier.playerId)} created`);
        this._domCanvasService.drawSoldier(soldier);
    }

    soldiersCreated(player: string, count: number): void {
        this._domLogService.appendToLog(this._domLogService.addInfoLabel(`${player} created ${count} soldiers`));
    }

    gameStarted(): void {
        this._domLogService.appendToLog(this._domLogService.addInfoLabel('Game started'));
    }

    attack(attacker: ISoldier, defender: ISoldier, attack: string, dmg: number): void {
        this._domLogService.appendToLog(` ${this._domLogService.addPlayerLabel(attacker.name, attacker.playerId)} ${attack} 
            ${this._domLogService.addPlayerLabel(defender.name, defender.playerId)} for ${dmg} damage...`);
        this._domCanvasService.drawAttack(attacker, defender);
    }

    defend(defender: ISoldier, defense: string, dmgBlocked: number, dmg: number): void {
        this._domLogService.appendToLog(`  ...${this._domLogService.addPlayerLabel(defender.name, defender.playerId)} ${defense} ${dmgBlocked} damage and takes ${dmg} damage!`);
        this._domCanvasService.updateSoldierHealth(defender, dmg);
    }

    soldierDead(soldier: ISoldier): void {
        this._domLogService.appendToLog(` **R.I.P. ${this._domLogService.addPlayerLabel(soldier.name, soldier.playerId)}`);
        this._domCanvasService.killSoldier(soldier);
    }

    turnStarted(turn: number): void {
        this._domLogService.appendToLog(this._domLogService.addInfoLabel(`** Turn ${turn} started`));
        this._domCanvasService.displayCanvasMessage(`Turn ${turn} started`, 1500);
    }

    turnFinished(turn: number, score: string): void {
        this._domLogService.appendToLog(this._domLogService.addInfoLabel(`** Turn ${turn} finished`));
    }

    randomEvent(event: IRandomEventBehavior): void {
        //event.type
        console.log(event.getAffected(), event.type);
        
        this._domLogService.appendToLog('');
    }

    updateScore(p1: number, p2: number): void {
        this._domScoreService.updateScoreEl(1, p1);
        this._domScoreService.updateScoreEl(2, p2);
    }

    gameFinished(winner: string, score: string): void {
        this._domLogService.appendToLog(this._domLogService.addInfoLabel(`Game Finished! ${winner} ${score}`));
        this._domCanvasService.displayCanvasMessage(`Game over`, 2000);
    }
}