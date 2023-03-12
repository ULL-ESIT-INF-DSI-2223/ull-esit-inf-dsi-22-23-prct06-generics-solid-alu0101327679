/**
 * clase clase par ala creaciond eobjetos tipo pelicula
 */
export class Pelicula {
  /**
   * constructor de la Pelicula
   * @param nombre nombre de la Pelicula
   * @param date fecha de la Pelicula
   * @param genere genero de la Pelicula
   * @param Oscar true si la Pelicula ha ganado un oscar o no
   */
  constructor(
    private nombre: string,
    private date: number,
    private genere: string,
    private Oscar: boolean
  ) {}
  /**
   * metodo para obtener el nombre de la pelicula
   * @returns nombre de la pelicula
   */
  getName() {
    return this.nombre;
  }
  /**
   * metodo para obtener la fecha de la pelicula
   * @returns fecha de la pelicula
   */
  getDate() {
    return this.date;
  }
  /**
   * metodo para obtener el genero de la pelicula
   * @returns genero de la pelicula
   */
  getGenere() {
    return this.genere;
  }
  /**
   * metodo para saber si la pelicula tiene un oscar
   * @returns true si tiene un oscar o false si no
   */
  isAnOscar() {
    return this.Oscar;
  }
}
