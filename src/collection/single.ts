import { Artist } from "./artist";
import { Discografy } from "./discografy";

/**
 * clase hija de la clase artist, en este caso se usa para cuando el objeto tipo artist se refiere a un artista solista
 */
export class Single extends Artist {
  /**
   * constructor de la clase single
   * @param name nombre del artista
   * @param listeners cantidad de oyentes
   * @param discografy discografía del artista
   */
  constructor(name: string, listeners: number, discografy: Discografy) {
    super(name, listeners, discografy);
  }
  /**
   * funcion que devuelve el nombre del single
   * @returns string
   */
  getName(): string {
    return this.name;
  }
}
