import { BasicStreamableCollection } from "./BasicColection";
import { Serie } from "../clases/serie";
/**
 * clase collecion de series que herede de BasicStreamableCollection con el tipo Serie
 */
export class SeriesCollection extends BasicStreamableCollection<Serie> {
  name = "";
  date = 0;
  genere = "";
  /**
   * constructor de la clase coleccion de serie
   * @param Items array de series
   * @param name nombre de la biblioteca
   * @param date fecha de la biblioteca
   * @param genere genero de al biblioteca
   */
  constructor(Items: Serie[], name: string, date: number, genere: string) {
    super(Items, name, date, genere);
    this.genere = genere
    this.name = name
    this.date = date
  }
  /**
   * metodo para buscar segun la fecha
   * @param newItem fecha con la que hacer la busqueda
   * @returns array con las ocurrencias
   */
  searchByDate(newItem: number): Serie[] {
    return this.Items.filter((elemento) => elemento.getDate() === newItem);
  }
  /**
   * metodo para buscar según el genero
   * @param newItem genero con el que realizar la busqueda
   * @returns array con las ocurrencias
   */
  searchByGenere(newItem: string): Serie[] {
    return this.Items.filter((elemento) => elemento.getGenere() === newItem);
  }
  /**
   * metodo para buscar según el nombre
   * @param newItem nombre por el que buscar
   * @returns array con las ocurrencias
   */
  searchByName(newItem: string): Serie[] {
    return this.Items.filter((elemento) => elemento.getName() === newItem);
  }
  /**
   * metodo para buscar segun el numero de capitulos
   * @param newItem numero de capitulos para ahcer la busqueda
   * @returns array con las ocurrencias
   */
  searchByCaps(newItem: number): Serie[] {
    return this.Items.filter((elemento) => elemento.getCaps() === newItem);
  }
}
