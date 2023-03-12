/**
 * definicion de la clase cancion
 */
export class Cancion {
  /**
   *
   * @param name nombre de la cancion
   * @param duracion durecion de la cancion
   * @param generes array de strings que contienen los generos de la cancion
   * @param single variable tipo boolan, si está a true es un single, false en caso contratio
   * @param produce  numero de reproducciones de la cancion
   */
  constructor(
    private name: string,
    private duracion: number,
    private generes: string[],
    private single: boolean,
    private produce: number
  ) {}
  /**
   * funcion que devuelve los generos d ela cancion
   * @returns array de strings
   */
  getGeneres() {
    return this.generes;
  }
  /**
   * funcion que imprime la informaciond e la cancion en formato tabla
   */
  table() {
    console.table(this);
  }
  /**
   * funcion que devuelve el nombre de la cancion
   * @returns string
   */
  getname() {
    return this.name;
  }
  /**
   * funcion que devuelve la duracion de la cancion
   * @returns variable tipo number
   */
  getDuracion() {
    return this.duracion;
  }
  /**
   * funcion que devuelve la cantidad de reproducciones que ha tenido una cancion
   * @returns variable tipo number
   */
  getProduce() {
    return this.produce;
  }
}
