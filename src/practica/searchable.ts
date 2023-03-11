/**
 * interfaz searchable, obliga a que exista un metodo search
 */
export interface Searchable<T> {
  search(newItem: T): T[]
}