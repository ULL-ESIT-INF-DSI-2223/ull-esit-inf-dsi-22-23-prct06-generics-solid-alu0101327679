import { Collectable } from "./collectable"
import { Searchable } from "./searchable"

/**
 * clase abtracta generica que implementa las interfaces Collectable y Searchable
 */
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T>{
  /**
   * Constructor de la clase abstracta SearchableCollection
   * @param Items Array de objetos de tipo T
   */
  constructor(protected Items: T[]){}

  /**
   * matodo que añade un item a la collection
   * @param newItem item a añadir
   */
  addItem(newItem: T){
    this.Items.push(newItem)
  }
  /**
   * metodo que devuelve un elemento especifico
   * @param index indice del elemento
   * @returns elemento deseado
   */
  getItem(index: number): T {
    return this.Items[index]
  }
  /**
   * metodo que elimina un elemento del array y lo devuelve
   * @param index indice del elemento a eliminar
   * @returns elemento eliminado
   */
  removeItem(index: number): T {
    let temp = this.Items[index]
    let primeraMitad: T[] = [] 
    let segundaMitad: T[] = []
    for(let i = 0; i < index - 1; i++){
      primeraMitad[i] = this.Items[i]
    }
    for(let i = 0; i < (this.Items.length - index + 1); i++){
      segundaMitad[i] = this.Items[i]
    }
    let union: T[] = []
    union.concat(primeraMitad, segundaMitad)
    this.Items = union
    return temp
  }
  /**
   * metodo que devuelve la cantidad de elementos de un array
   * @returns cantidad de elmentos
   */
  getNumberOfItems(): number {
    return this.Items.length
  }
  /**
   * metodo abstracto que busca un item
   * @param newItem item en busqueda
   */
  abstract search(newItem: T): T[]
}

/**
 * clase que expande SearchableCollection de tipo number
 */
export class NumericSearchableCollection extends SearchableCollection<number>{
  /**
   * constructor de la clase NumericSearchableCollection
   * @param objetos array de numeros
   */
  constructor(objetos: number[]){
    super(objetos)
  }
  /**
   * metodo para buscar un numero en el array
   * @param newItem item a buscar
   * @returns array con las ocurrencias
   */
  search(newItem: number): number[] {
    // let result: number[] = []
    // for(let i = 0; i < this.Items.length; i ++){
    //   if(this.Items[i] == newItem){
    //     result.push(this.Items[i])
    //   }
    // }
    // return result
    return this.Items.filter(numerito => numerito == newItem)
  }
}


/**
 * clase que expande SearchableCollection de tipo string
 */
export class StringSearchableCollection extends SearchableCollection<string>{
  /**
   * constructor de la clase StringSearchableCollection
   * @param objetos array de strings
   */
  constructor(objetos: string[]){
    super(objetos)
  }
  /**
   * metodo que busca un los strings que contengan un string
   * @param newItem subcadena a buscar
   * @returns strings que contienen la subcadena
   */
  search(newItem: string): string[] {
    // let result: string[] = []
    // for(let i = 0; i < this.Items.length; i ++){
    //   if(this.Items[i].includes(newItem)){
    //     result.push(this.Items[i])
    //   }
    // }
    // return result
    return this.Items.filter(palabras => palabras.includes(newItem))
  }
}