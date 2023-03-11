/**
 * clase apra al creación de objetos tipo serie
 */
export class Serie {
  /**
   * constructor de la serie
   * @param nombre nombre de la serie
   * @param date fecha de la serie
   * @param genere  genero de al serie
   * @param capitulos capitulos de al serie
   */
  constructor(
    private nombre: string,
    private date: number,
    private genere: string,
    private capitulos: number
  ) {}
  /**
   * metodo para obtener el nombre de la serie
   * @returns nombre de la serie
   */
  getName() {
    return this.nombre;
  }
  /**
   * metodo para obtener la fcha de la serie
   * @returns fecha de la serie
   */
  getDate() {
    return this.date;
  }
  /**
   * metodo para obtener el genero de la serie
   * @returns genero de la serie
   */
  getGenere() {
    return this.genere;
  }
  /**
   * metodo par aobtener la cantidad de capitulos de la serie
   * @returns cantidad de capitulos de la serie
   */
  getCaps() {
    return this.capitulos;
  }
}
