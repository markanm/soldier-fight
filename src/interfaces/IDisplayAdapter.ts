export interface IDisplayAdapter {
    gameInitialized(): void;
    playerCreated(name: string): void;
    
    soldierCreated(name: string): void;
    solidersCreated(player: string, count: number): void;

    gameStarted(): void;

    attack(message: string): void;
    defend(message: string): void;

    soldierDead(message: string): void;

    turnStarted(turn: number): void;
    turnFinished(turn: number, score: string): void;

    randomEvent(message: string): void;

    gameFinished(winner: string, score: string): void;
}