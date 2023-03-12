import { Cancion } from "./cancion";

/**
 *definicionde la clase CD
 */
 export class Disco_Single {
  /**
   * constructor de la clase disco
   * @param name nombre del disco
   * @param published fecha de publicacion del disco (number)
   * @param canciones canciones que forma el disco
   */
  constructor(
    private name: string,
    private published: number,
    private canciones: Cancion
  ) {}
  /**
   * funcion que devuelve el nombre del disco
   * @returns variable tipo string
   */
  getName() {
    return this.name;
  }
  /**
   * funcion que devuelve la fecha de publicacion
   * @returns variable tipo number
   */
  getPublished() {
    return this.published;
  }
  /**
   * devuelve las canciones que forman el disco
   * @returns array de objetos tipo cancion
   */
  getCanciones() {
    return this.canciones;
  }
  /**
   * funcion que imprime la información del disco en formato tabla
   */
  table(): void {
    console.table(this);
  }
}
