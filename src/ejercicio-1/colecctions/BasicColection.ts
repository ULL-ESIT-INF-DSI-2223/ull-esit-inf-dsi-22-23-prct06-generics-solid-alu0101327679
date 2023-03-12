import { Streamable } from "../stremeable";
/**
 * clase generica abstracta para la creacion de colecciones, que implementa la interfaz Stremeable
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  abstract name: string;
  abstract date: number;
  abstract genere: string;
  /**
   * constructor de la clase abstracta
   * @param Items array de objetos de la coleccion
   * @param name nombre de la clase
   * @param date fecha de la clase
   * @param genere geenro de al clase
   */
  constructor(
    protected Items: T[],
    name: string,
    date: number,
    genere: string
  ) {}
  /**
   * metodo abstracto, que obliga a que las clases que hereden de esta tengan este metodo
   * @param newItem nombre del objeto a buscar
   */
  abstract searchByName(newItem: string): T[];
  /**
   * metodo abstracto, que obliga a que las clases que hereden de esta tengan este metodo
   * @param newItem fecha del objeto a buscar 
   */
  abstract searchByDate(newItem: number): T[];
  /**
   * metodo abstracto, que obliga a que las clases que hereden de esta tengan este metodo
   * @param newItem genero del objeto
   */
  abstract searchByGenere(newItem: string): T[];
}
