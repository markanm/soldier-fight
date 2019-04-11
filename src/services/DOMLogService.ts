import { Helper } from "../helper/helper";

export class DOMLogService {

    private _log: Element | null;

    constructor() {
        this._log = document.querySelector("#log");
    }

    appendToLog(message: string): void {
        if (this._log) {
            this._log.appendChild(Helper.createDiv(message));
            this._log.scrollIntoView(false);
        } else {
            this._log = document.querySelector("#log");
            if (this._log) {
                this._log.appendChild(Helper.createDiv(message));
                this._log.scrollIntoView(false);
            }
        }
    }

    addPlayerLabel(text: string, player: number): string {
        return `<span class="p${player}_text">${text}</span>`;
    }

    addInfoLabel(text: string): string {
        return `<span class="info">${text}</span>`;
    }

    addWarnLabel(text: string) {
        return `<span class="info">${text}</span>`;
    }
}