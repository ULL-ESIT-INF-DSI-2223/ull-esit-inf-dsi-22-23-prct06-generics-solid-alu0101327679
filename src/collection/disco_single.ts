import { CD } from "./cd";
import { Discografy } from "./discografy";
import { Cancion } from "./cancion";

export class Disco_Sigle {
  constructor(private cancion_indiv: Cancion ){}

  getCancion(){
    return this.cancion_indiv
  }
  table(){
    console.table(this)
  }
}