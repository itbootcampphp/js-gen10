console.log("Nasleđivanje");

import { Vozilo } from "./klase/vozilo.js";
import { Automobil } from "./klase/automobil.js";
import {Kamion} from "./klase/kamion.js";

let v1 = new Vozilo("vazdusno", "bela");
v1.ispisiVozilo();
v1.vozi();

let a1 = new Automobil("drumsko", "teget", "NI-111-CC");
a1.ispisiVozilo();
a1.ispisiAutomobil();

// v1.ispisiAutomobil(); // ovo javlja grešku jer roditelj ne može pristupiti poljima i metodama deteta (on ne nasleđuje dete)

let k1 = new Kamion("drumsko", "siva", 70);
console.log(k1.boja);
k1.vozi();
k1.voziKamion();
