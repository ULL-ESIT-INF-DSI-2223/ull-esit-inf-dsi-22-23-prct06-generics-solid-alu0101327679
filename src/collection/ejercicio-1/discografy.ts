import { CD } from "./cd";
/**
 * definicion de la clase discografía
 */
export class Discografy {
  /**
   * cosntructor del objeto Discografy formado por un array de objetos de tipo CD
   * @param discos array de objetos de tipo CD
   */
  constructor(private discos: CD[]) {}
  /**
   * funcion que añade un disco a la discografía
   * @param newDisco objeto tipo CD a añadir a la discografía
   */
  addDisco(newDisco: CD) {
    this.discos.push(newDisco);
  }
  /**
   * funcion que devuelve los discos de la discografía
   * @returns array de objetos tipo CD
   */
  getDiscos() {
    return this.discos;
  }
  /**
   * funcion que imprime la informaciond el adiscografía en formato tabla
   */
  table() {
    console.table(this);
  }
}
