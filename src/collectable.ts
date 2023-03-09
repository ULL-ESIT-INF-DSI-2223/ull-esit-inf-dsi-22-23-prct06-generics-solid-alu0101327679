/**
 * interfaz collectable, obliga a que exista additem, getitem, remove, getNumberOfItems
 */
export interface Collectable<T> {
  /**
   * añade un nuevo item a la collecion
   * @param newItem  item que se alade a la collecion
   */
  addItem(newItem: T): void

  /**
   * metodo que devuelve el elemento en la posicion index
   * @param index indice del elementoa  devolver
   */
  getItem(index: number): T

  /**
   * metodo que elimina el elemento en la posicion index y lo devuelve
   * @param index indice del elemento
   */
  removeItem(index: number): T

  /**
   * metodo que devuelve la cantidad de items que existen
   */
  getNumberOfItems(): number
}
