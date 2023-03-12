import { BasicStreamableCollection } from "./BasicColection";
import { Pelicula } from "../clases/pelicula";
/**
 * clase coleccion de peliculas que hereda de BasicStreamableCollection de tipo Pelicula
 */
export class PelisCollection extends BasicStreamableCollection<Pelicula> {
  name = "";
  date = 0;
  genere = "";
  /**
   * constructor de la clase biblioteca de peliculas
   * @param Items array de peliculas
   * @param name nombre de la biblioteca
   * @param date fecha de al biblioteca
   * @param genere genero de al biblioteca
   */
  constructor(Items: Pelicula[], name: string, date: number, genere: string) {
    super(Items, name, date, genere);
    this.date = date
    this.name = name
    this.genere = genere
  }
  /**
   * metodo para buscar por fecha
   * @param newItem fecha con la que hacer la busqueda
   * @returns array con las ocurrencias
   */
  searchByDate(newItem: number): Pelicula[] {
    return this.Items.filter((elemento) => elemento.getDate() === newItem);
  }
  /**
   * metodo para buscar según el genero
   * @param newItem genero que buscar
   * @returns array con las ocurrencias
   */
  searchByGenere(newItem: string): Pelicula[] {
    return this.Items.filter((elemento) => elemento.getGenere() === newItem);
  }
  /**
   * metodo para buscar según el nombre
   * @param newItem nombre con el que buscar
   * @returns array con las ocurrencias
   */
  searchByName(newItem: string): Pelicula[] {
    return this.Items.filter((elemento) => elemento.getName() === newItem);
  }
  /**
   * metodo para buscar segun si son o no oscar
   * @param newItem boolean sobre el que buscar
   * @returns array con las ocurrencias
   */
  searchOscars(newItem: boolean): Pelicula[] {
    return this.Items.filter((elemento) => elemento.isAnOscar() === newItem);
  }
}
