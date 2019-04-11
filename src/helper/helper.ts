
// helper class
export class Helper {
    static generateRandomInteger(min: number, max: number): number {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }

    static generateChance(chance: number): boolean {
        return Math.floor(Math.random() * (101)) <= chance;
    }

    static createDiv(innerHtml: string): Element {
        const el = document.createElement('div');
        el.innerHTML = innerHtml;
        return el;
    }

    static createSpan(innerHtml: string): Element {
        const el = document.createElement('span');
        el.innerHTML = innerHtml;
        return el;
    }
}
