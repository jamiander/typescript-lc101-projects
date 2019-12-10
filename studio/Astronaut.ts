import { Payload } from "./Payload";

// import {Payload} from 'studio/Payload.ts';
export class Astronaut implements Payload {
    massKg: number;
    name: string;
    constructor(massKg: number, name: string) {
        this.massKg = massKg;
        this.name = name;
    }
}