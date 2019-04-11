import { ISoldier } from "../interfaces/ISoldier";
import { Helper } from "../helper/helper";

export class DOMCanvasService {

    constructor() {
        this.canvas = document.querySelector("#canvas");
    }

    private bulletCnt: number = 0;
    canvas: Element | null;

    getCanvas(): void {
        if(!this.canvas) {
            this.canvas = document.querySelector("#canvas");
        }
    }

    private addSoldierFadeIn(elem: Element) {
        elem.classList.add('soldier-fade-in');
        setTimeout(() => {
            elem.classList.remove('soldier-fade-in');
        }, 500);
    }

    drawSoldier(soldier: ISoldier) {
        this.getCanvas();
        if (this.canvas) {
            //const sol = Helper.createSpan('');
            const el = Helper.createDiv(soldier.health.toString());
            el.classList.add(`p${soldier.playerId}`, 'soldier');
            const left: number[] = soldier.playerId === 1 ? [2, 46] : [54, 92];
            el.setAttribute("style", `top: ${Helper.generateRandomInteger(4, 96)}%; left: ${Helper.generateRandomInteger(left[0], left[1])}%;`);
            el.setAttribute("id", `p${soldier.playerId}s${soldier.id}`);
            this.addSoldierFadeIn(el);
            //sol.appendChild(el);
            el.appendChild(this.addSoldierTooltip(soldier));
            this.canvas.appendChild(el);
        }
    }

    addSoldierTooltip(soldier: ISoldier): Element {
        const h1 = document.createElement('h1');
        h1.innerHTML = soldier.name;
        const h2 = document.createElement('h2');
        h2.innerHTML = `Player ${soldier.playerId}`;
        const tooltip = Helper.createSpan('');
        tooltip.classList.add('soldier-tooltip');
        tooltip.appendChild(h1);
        tooltip.appendChild(h2);
        return tooltip;
    }

    drawAttack(attacker: ISoldier, defender: ISoldier): void {
        this.getCanvas();
        if (this.canvas) {
            const elAttacker = this.getSoldierElement(attacker);
            const elDefender = this.getSoldierElement(defender);

            if (elAttacker && elDefender) {
                this.canvas.appendChild(this.createMissile(this.calculatePlayerPosition(elAttacker.getAttribute("style")), this.calculatePlayerPosition(elDefender.getAttribute("style"))));
                this.createTakeDmgAnimation(elDefender, defender.playerId);
            }
        }
    }

    calculatePlayerPosition(style: string | null): number[] {
        let res: number[] = [0, 0];
        if(style && this.canvas) {
            const perc = [+style.split(';')[0].trim().replace("top: ", "").replace("%", ""), +style.split(';')[1].trim().replace("left: ", "").replace("%", "")];
            res = [(this.canvas.clientHeight * (perc[0] / 100)), (this.canvas.clientWidth * (perc[1] / 100))];
        }

        return res;
    }

    getSoldierElement(soldier: ISoldier): Element | null {
        return document.querySelector(`#p${soldier.playerId}s${soldier.id}`);
    }

    createMissile(attackerXY: number[], defenderXY: number[]): Element {
        const missile = Helper.createDiv('&nbsp;')
        missile.classList.add("bullet");
        missile.setAttribute("style", `top: ${attackerXY[0] + 8}px; left: ${attackerXY[1] + 8}px; animation: bullet${this.bulletCnt} .5s;`);
        this.setDestroyMissileTimeout(missile, this.createMissileAnimation(attackerXY, defenderXY));
        this.bulletCnt++;
        return missile;
    }

    createMissileAnimation(attackerXY: number[], defenderXY: number[]): Element {
        const style = document.createElement('style');
        style.type = 'text/css';
        const keyFrames = `
            @-webkit-keyframes bullet${this.bulletCnt} {
                0% {
                    opacity: 1;
                }
                100% {
                    transform: translate(${defenderXY[1] - attackerXY[1] + 8}px, ${defenderXY[0] - attackerXY[0] + 8}px);
                    opacity: 0;
                }
            }`;

        style.innerHTML = keyFrames;
        document.getElementsByTagName('head')[0].appendChild(style);

        return style;
    }

    setDestroyMissileTimeout(missile: Element, animation: Element) {
        setTimeout(() => {
            missile.outerHTML = "";
            animation.outerHTML = "";
        }, 500);
    }

    createTakeDmgAnimation(soldierEl: Element, playerId: number): void {
        setTimeout(() => {
            soldierEl.classList.add(`animate__dmg_p${playerId}`);
        }, 50);
        setTimeout(() => {
            soldierEl.classList.remove(`animate__dmg_p${playerId}`);
        }, 550);
    }

    updateSoldierHealth(soldier: ISoldier, dmg: number): void {
        const el = document.querySelector(`#p${soldier.playerId}s${soldier.id}`);

        if (el) {
            el.innerHTML = (soldier.health - dmg).toString();
            this.displayPlayerDmg(el, dmg);
        }
    }

    displayPlayerDmg(parent: Element, dmg: number) {
        if(dmg <= 0) { return; } 
        const dmgEl = Helper.createSpan('-' + dmg.toString());
        dmgEl.classList.add('dmg-taken', 'warn');
        parent.appendChild(dmgEl);
        setTimeout(() => {
            dmgEl.outerHTML = '';
        }, 2500);
    }

    killSoldier(soldier: ISoldier) {
        const el = document.querySelector(`#p${soldier.playerId}s${soldier.id}`);
        if (el) {
            el.innerHTML = 'X';
            el.classList.add('dead');
        }
    }

    displayCanvasMessage(message: string, duration: number) {
        const el = document.querySelector(`#canvas_message`);
        
        if (el) {
            el.innerHTML = message;
            el.classList.add('visible', 'animate-canvas-txt-in');

            setTimeout(() => {
                el.classList.remove('animate-canvas-txt-in');
            }, 200);
            setTimeout(() => {
                el.classList.add('animate-canvas-txt-out');
            }, duration - 200);
            setTimeout(() => {
                el.classList.remove('animate-canvas-txt-out');
                el.classList.remove('visible');
            }, duration);
        }
    }

    drawAtomBomb() {
        const numDivs = 20;
        const colors = ['#1a93fe', '#F72781', '#30d0ac', '#F2DE00', '#9A1EFF'];
        const explodingCard = document.getElementsByClassName('exploding-card')[0];
        const explosion = document.querySelector('#canvas');
        const colorDelay = 200;

        // for (let i = 0; i < numDivs; i++) {
        //     let duplicate = explosion.cloneNode();
        //     duplicate.style.background = colors[(i + 1) % colors.length];
        //     duplicate.style.animationDelay = `${(i + 1) * colorDelay}ms`;
        //     explodingCard.appendChild(duplicate);
        // }
    }
}