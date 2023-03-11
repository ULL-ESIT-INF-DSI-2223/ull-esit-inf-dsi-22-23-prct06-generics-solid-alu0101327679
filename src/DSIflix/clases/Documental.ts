/**
 * clase para crear objetos tipo documental
 */
export class Documental {
  /**
   * constructor de la clase documental
   * @param nombre nombre del documental
   * @param date fecha de publicacion del documental
   * @param genere genero del documental
   * @param Channel canal donde se publica el documental
   */
  constructor(
    private nombre: string,
    private date: number,
    private genere: string,
    private Channel: string
  ) {}
  /**
   * metodo para obtener el nombre del documental
   * @returns nombre
   */
  getName() {
    return this.nombre;
  }
  /**
   * metodo para obtener la fecha de publicacion del documental
   * @returns fecha de publicacion
   */
  getDate() {
    return this.date;
  }
  /**
   * metodo que devuelve el genero del documental
   * @returns enero del documental
   */
  getGenere() {
    return this.genere;
  }
  /**
   * metodo que devuelve el canal del documental
   * @returns canal de publicacion del documental
   */
  getCanal() {
    return this.Channel;
  }
}
