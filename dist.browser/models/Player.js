"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const DisplayControllerFactory_1 = require("../factories/DisplayControllerFactory");
const SoldierFactory_1 = require("../factories/SoldierFactory");
const SoldierNamesHelper_1 = require("../helper/SoldierNamesHelper");
class Player {
    constructor(id, soldierCount, name) {
        this.id = id;
        this.name = name;
        // id: number;
        // name: string;
        this.soldiers = [];
        this.displayAdapter = DisplayControllerFactory_1.DisplayControllerFactory.create();
        this.id = id;
        this.name = name ? name : this.generateName(id);
        this.displayAdapter.playerCreated(this.name);
        if (config_1.GameConfig.personalize) {
            SoldierNamesHelper_1.SoldierNamesHelper.getNames(this);
        }
        else {
            this.generateSoldierNames(soldierCount);
        }
    }
    generateName(id) {
        return `P${id}`;
    }
    generateSoldierNames(soldierCount) {
        const soldierNames = [];
        for (let i = 0; i < soldierCount; i++) {
            soldierNames.push(`P${this.id}-S${i}`);
        }
    }
    generateSoldiers(soldierNames) {
        this.soldiers = new Array();
        soldierNames.forEach((name, index) => this.soldiers.push(SoldierFactory_1.SoldierFactoy.create(index, this.id, name)));
        this.displayAdapter.soldiersCreated(this.name, this.soldiers.length);
    }
}
exports.Player = Player;
