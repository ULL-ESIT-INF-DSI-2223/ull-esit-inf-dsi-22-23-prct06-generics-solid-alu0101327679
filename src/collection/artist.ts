import { Discografy } from "./discografy";
/**
 * Clase para definir a el objeto artista, la cual necesita:una variable para su nombre de tipo string, una vatiable de tipo numbers
 * para la cantidad de oyentes y una variable de tipo discografía para guardar los datos sobre su carrera musical.
 */
export class Artist {
  /**
   * constructor del objeto artista
   * @param name variable que guarda el nombre del objeto artista
   * @param listeners numero de oyentes del objeto
   * @param discografy discografía del objeto artista
   */
  constructor(
    public readonly name: string,
    private listeners: number,
    private discografy: Discografy
  ) {}

  /**
   * funcion que devuelve la cantidad de oyentes
   * @returns cantidad de oyentes
   */
  getListeners() {
    return this.listeners;
  }

  /**
   * funcion que actualiza la cantidad de oyentes
   * @param listeners cantidad de oyentes
   */
  setListeners(listeners: number) {
    this.listeners = listeners;
  }

  /**
   * devuelve el atributo de tipo Discografía del objeto Artista
   * @returns discografía del objeto artista
   */
  getDiscografy() {
    return this.discografy;
  }

  /**
   * funcion que imprime la informacion del objeto en formato tabla
   */
  table() {
    console.table(this);
  }

}
