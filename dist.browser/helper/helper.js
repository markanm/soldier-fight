"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// helper class
class Helper {
    static generateRandomInteger(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }
    static generateChance(chance) {
        return Math.floor(Math.random() * (101)) <= chance;
    }
}
exports.Helper = Helper;
