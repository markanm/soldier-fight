import { IGameTurnController } from "../interfaces/IGameTurnController";
import { IGame } from "../interfaces/IGame";
import { IDisplayAdapter } from "../interfaces/IDisplayAdapter";
import { DisplayControllerFactory } from "../factories/DisplayControllerFactory";
import { Helper } from "../helper/helper";
import { ISolider } from "../interfaces/ISolider";
import { RandomEventFactory } from "../factories/RandomEventFactory";

// executes game turn
export class GameTurnController implements IGameTurnController {
    displayAdapter!: IDisplayAdapter;
    game!: IGame;
    private static _instance : GameTurnController;
    private turn: number = 0;

    constructor (game: IGame) {
        if (GameTurnController._instance) {
            return GameTurnController._instance;
        }

        this.game = game;
        this.displayAdapter = DisplayControllerFactory.create();

        GameTurnController._instance = this;
    }

    static get instance () {
        return GameTurnController._instance;
    }

    execute(): boolean {
        this.turn++;

        this.displayAdapter.turnStarted(this.turn);
        // 50% chance for each player to start the turn first
        let rndIndex: number = Helper.generateRandomInteger(0, 1);
        let negIndex: number = rndIndex == 0 ? 1 : 0;

        // execute player attacks
        this.executePlayer(rndIndex, negIndex);
        this.executePlayer(negIndex, rndIndex);

        // generate random event
        RandomEventFactory.create(this.game).execute(this.game.players[rndIndex], this.game.players[negIndex]);

        // display turn score
        this.displayAdapter.turnFinished(this.turn, this.game.getScore());

        return true;
    }

    executePlayer(index: number, negIndex: number) {
        this.game.players[index].soliders.forEach(item => {
            // get random soldier from the oposite team to attack
            let rand = this.game.players[negIndex].soliders[Math.floor(Math.random() * this.game.players[negIndex].soliders.length)];
            
            if(rand){
                // execute attack & defend
                rand.executeDefend(item.executeAttack(rand));
                // check is soldier dead after attack
                if(this.checkIsSoldierDead(rand)) {
                    // remove soldier
                    this.game.players[negIndex].soliders = this.game.players[negIndex].soliders.filter(x => x.id !== rand.id);
                    // display that soldier is dead 
                    this.displayAdapter.soldierDead(` R.I.P. ${rand.name}`)
                }
            }
        });
    }

    checkIsSoldierDead(soldier: ISolider): boolean {
        return soldier.health <= 0;
    }
}