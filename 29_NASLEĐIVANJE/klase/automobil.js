import { Vozilo } from "./vozilo.js";

export class Automobil extends Vozilo{

    constructor(t, b, r) {
        super(t, b); // Pozivam roditeljski konstruktor
        this.registarskiBroj = r;
    }

    set registarskiBroj(rb) {
        this._registarskiBroj = rb;
    }  

    get registarskiBroj() {
        return this._registarskiBroj;
    }

    ispisiAutomobil() {
        console.log(`Ovo vozilo je automobil; tipa: ${this.tip}, boje: ${this.boja}, registarske oznake: ${this.registarskiBroj}`);
    }

}