"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.astronauts = [];
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var item in items) {
            sum += items[item].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var currentKg = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return currentKg;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        return false;
    };
    Rocket.prototype.addCargo = function (cargo) {
        var addIt = this.canAdd(cargo);
        if (addIt === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var addIt = this.canAdd(astronaut);
        if (addIt === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
