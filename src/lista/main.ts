
/**
 * clase lista, donde no se usa nada de Array.prototype.
 */
class lista<T> {
  /**
   * constructor de la clase lista
   * @param list array de elementos tipo T
   */
  constructor(private list: T[]){}

  /**
   * metodo para obtener el array de la lista
   * @returns array de elementos tipo T
   */
  getLista(){
    return this.list
  }

  /**
   * metodo que cambia el valor del array a uno nuevo
   * @param valor array de tipo T
   */
  setLista(valor: T[]){
    this.list = valor
  }

  /**
   * motodo para insertar una lista al fianl de otra
   * @param lista_uno objeto de tipo lista<T>
   * @param lista_dos objeto de tipo lista<T>
   * @returns 
   */
  append(lista_uno: lista<T>, lista_dos: lista<T>){
    let auxiliar: T[] = []
    let variable: number = (lista_uno.lenght() + lista_dos.lenght())
    console.log(variable)
    for(let i = 0; i < lista_dos.lenght(); i++){
      console.log(lista_dos.getLista()[i])
      lista_uno.getLista()[lista_uno.lenght()] = lista_dos.getLista()[i]
    }
    return lista_uno
  }

    /**
     * metodo que añade una lista al final de la lista del objeto invocante
     * @param lista_aux 
     */
  concatenate(lista_aux: lista<T>){
    let variable = lista_aux.lenght()
    let i = 0
    while(this.list[i+1] != undefined){
      i++
    }
    i++
    let longitud = i
    for(let i = 0; i < variable; i++){
      this.list[longitud+i] = lista_aux.getLista()[i]
    }
  }

  filter(){ } // lista y predicado lógico ¿callback?

  /**
   * metodo par aobtener la longitud de  al lista
   * @returns longitud de la lista
   */
  lenght(){
    let i = 0
    while(this.list[i+1] != undefined){
      i++
    }
    return i+1
  } 

  map(){}// no hecha

  reduce(){}// no hecha

  /**
   * metodo que invierte el array de la lista
   */
  reverse(){
    let aux: T[] = []
    let j = 0
    while(this.list[j+1] != undefined){
      j++
    }
    j++
    let longitud = j
    j = 0
    for(let i = longitud-1; i >= 0; i--){
      aux[j] = this.list[i]
      j++
    }
    this.list = aux
  }

  forEach(){}// no hecha

}

const prueba = new lista([1,2,3])
const prueba_dos = new lista([3,2,1])
// console.log((prueba.lenght() + prueba_dos.lenght()))
// console.log(prueba.append(prueba, prueba_dos))
console.log(prueba)
// prueba.reverse()
// console.log(prueba)
// prueba.concatenate(prueba_dos)
// console.log(prueba)
// console.log(prueba.lenght())
// console.log(prueba.append(new lista([3,2,1]), new lista([1,2,3])))