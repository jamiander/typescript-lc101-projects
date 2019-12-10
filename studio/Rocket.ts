import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket implements Payload{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    massKg: number;
    
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;        this.astronauts = [];

        

    }
    sumMass ( items: Payload[] ): number {
        let sum = 0;
        for (let item in items) {
            sum += items[item].massKg;
        }
        return sum;
    }
    currentMassKg(): number {
        let currentKg = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return currentKg;
    }
    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        return false;
    }
    addCargo(cargo: Cargo) {
        let addIt = this.canAdd(cargo) 
        if (addIt === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }
    addAstronaut(astronaut: Astronaut) {
        let addIt = this.canAdd(astronaut);
        if(addIt === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}