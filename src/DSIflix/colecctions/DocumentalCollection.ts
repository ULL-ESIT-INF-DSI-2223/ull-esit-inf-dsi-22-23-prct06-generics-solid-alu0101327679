import { BasicStreamableCollection } from "./BasicColection";
import { Documental } from "../clases/Documental";

/**
 * clase colección de documentales que expande la clase BasicStreamableCollection con tipo Documental
 */
export class DocumentalCollection extends BasicStreamableCollection<Documental> {
  name = "";
  date = 0;
  genere = "";
  /**
   * constructor de la clase documental
   * @param Items array de documentales
   * @param name nombre de la biblioteca
   * @param date fecha de la biblioteca
   * @param genere genero de la biblioteca
   */
  constructor(Items: Documental[], name: string, date: number, genere: string) {
    super(Items, name, date, genere);
    this.name = name
    this.date = date
    this.genere = genere
  }
  /**
   * metodo que busca los elementos con esa fecha
   * @param newItem fecha del objeto a buscar
   * @returns array con las ocurrencias
   */
  searchByDate(newItem: number): Documental[] {
    return this.Items.filter((elemento) => elemento.getDate() === newItem);
  }
  /**
   * metodo que busca por el genero
   * @param newItem genero para buscar
   * @returns array con las ocurrencias
   */
  searchByGenere(newItem: string): Documental[] {
    return this.Items.filter((elemento) => elemento.getGenere() === newItem);
  }
  /**
   * metodo para buscar elementos con un nombre
   * @param newItem nombre para buscar
   * @returns array con las ocurrencias
   */
  searchByName(newItem: string): Documental[] {
    return this.Items.filter((elemento) => elemento.getName() === newItem);
  }
  /**
   * metodo que busca segun el canal
   * @param newItem canal para hacer la buscqueda
   * @returns array con las ocurrencias
   */
  searchCanal(newItem: string): Documental[] {
    return this.Items.filter((elemento) => elemento.getCanal() === newItem);
  }
}
