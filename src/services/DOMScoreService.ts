export class DOMScoreService {
    constructor() {}

    updateScoreEl(player: number, score: number): void {
        const el = document.querySelector(`#score_p${player}`);

        if (el) {
            el.innerHTML = score.toString();
        }
    }
}