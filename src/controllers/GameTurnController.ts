// import { DisplayControllerFactory } from "../factories/DisplayControllerFactory";
// import { RandomEventFactory } from "../factories/RandomEventFactory";
// import { Helper } from "../helper/helper";
// import { PerformanceMeasurement } from "../helper/PerformanceMeasurement";
// import { IDisplayAdapter } from "../interfaces/IDisplayAdapter";
// import { IGame } from "../interfaces/IGame";
// import { IGameTurnController } from "../interfaces/IGameTurnController";
// import { ISoldier } from "../interfaces/ISoldier";

// // executes game turn
// export class GameTurnController implements IGameTurnController {

//     static get instance() {
//         return GameTurnController._instance;
//     }
//     private static _instance: GameTurnController;
//     displayAdapter!: IDisplayAdapter;
//     game!: IGame;
//     private turn: number = 0;

//     constructor(game: IGame) {
//         if (GameTurnController._instance) {
//             return GameTurnController._instance;
//         }

//         this.game = game;
//         this.displayAdapter = DisplayControllerFactory.create();

//         GameTurnController._instance = this;
//     }

//     execute(): boolean {
//         const perf = new PerformanceMeasurement("Turn");
//         this.turn++;

//         this.displayAdapter.turnStarted(this.turn);
//         // 50% chance for each player to start the turn first
//         const rndIndex: number = Helper.generateRandomInteger(0, 1);
//         const negIndex: number = rndIndex === 0 ? 1 : 0;

//         // execute player attacks
//         this.executePlayer(rndIndex, negIndex);
//         this.executePlayer(negIndex, rndIndex);

//         // generate random event
//         RandomEventFactory.create(this.game).execute(this.game.players[rndIndex], this.game.players[negIndex]);

//         // display turn score
//         this.displayAdapter.turnFinished(this.turn, this.game.getScore());
//         this.displayAdapter.updateScore(this.game.players[0].soldiers.length, this.game.players[1].soldiers.length);

//         perf.end();
//         return true;
//     }

//     executePlayer(index: number, negIndex: number) {
//         this.game.players[index].soldiers.forEach((item, index) => {
//             // get random soldier from the oposite team to attack
//             const int: number = 500;
//             setTimeout(() => {
//                 const rand = this.game.players[negIndex].soldiers[Math.floor(Math.random()
//                     * this.game.players[negIndex].soldiers.length)];

//                 if (rand) {

//                     // execute attack & defend
//                     rand.executeDefend(item.executeAttack(rand));
//                     // check is soldier dead after attack
//                     if (this.checkIsSoldierDead(rand)) {
//                         // remove soldier
//                         this.game.players[negIndex].soldiers =
//                             this.game.players[negIndex].soldiers.filter((x) => x.id !== rand.id);
//                         // display that soldier is dead
//                         this.displayAdapter.soldierDead(` R.I.P. ${rand.name}`);
//                     }
//                 }
//             }, index * 500);
//         });
//     }

//     checkIsSoldierDead(soldier: ISoldier): boolean {
//         return soldier.health <= 0;
//     }
// }
