/**
 * clase lista, donde no se usa nada de Array.prototype.
 */
export class lista<T> {
  /**
   * constructor de la clase lista
   * @param list array de elementos tipo T
   */
  constructor(private list: T[]) {}

  /**
   * metodo para obtener el array de la lista
   * @returns array de elementos tipo T
   */
  getLista() {
    return this.list;
  }

  /**
   * metodo que cambia el valor del array a uno nuevo
   * @param valor array de tipo T
   */
  setLista(valor: T[]) {
    this.list = valor;
  }

  /**
   * metodo para añadir un valor al array
   * @param valor elemento a añadir
   */
  addElement(valor: T) {
    let i = 0;
    while (this.list[i + 1] != undefined) {
      i++;
    }
    i++;
    let longitud = i;
    this.list[longitud] = valor;
  }

  /**
   * motodo para insertar una lista al fianl de otra
   * @param lista_uno objeto de tipo lista<T>
   * @param lista_dos objeto de tipo lista<T>
   * @returns lista
   */
  append(lista_uno: lista<T>, lista_dos: lista<T>) {
    let auxiliar: T[] = [];
    let variable: number = lista_uno.lenght() + lista_dos.lenght();
    for (let i = 0; i < lista_dos.lenght(); i++) {
      lista_uno.getLista()[lista_uno.lenght()] = lista_dos.getLista()[i];
    }
    return lista_uno;
  }

  /**
   * metodo que añade una lista al final de la lista del objeto invocante
   * @param lista_aux
   */
  concatenate(lista_aux: lista<T>) {
    let variable = lista_aux.lenght();
    let i = 0;
    while (this.list[i + 1] != undefined) {
      i++;
    }
    i++;
    let longitud = i;
    for (let i = 0; i < variable; i++) {
      this.list[longitud + i] = lista_aux.getLista()[i];
    }
  }

  /**
   * metodo para filtrar los elementos según una funcion dada
   */
  filter(myFucntion: (a: T[]) => void) {
    return myFucntion(this.list);
  }

  /**
   * metodo par aobtener la longitud de  al lista
   * @returns longitud de la lista
   */
  lenght() {
    let i = 0;
    while (this.list[i + 1] != undefined) {
      i++;
    }
    return i + 1;
  }

  /**
   * metodo para modoficar los elementos con una función dada
   * @param myFucntion funcion con la que se operará
   */
  map(myFucntion: (a: T[]) => void) {
    myFucntion(this.list);
  }

  /**
   * metodo para reducir todo el array a un string
   * @param myFucntion funcion sobre la que operar
   * @param acumulador velor acumulado
   * @returns
   */
  reduce(myFucntion: (a: T, acumulador: T) => T, acumulador: T): T {
    let i = 0;
    while (this.list[i + 1] != undefined) {
      i++;
    }
    i++;
    let limit = i;

    for (let i = 0; i < limit; i++) {
      acumulador = myFucntion(this.list[i], acumulador);
    }
    return acumulador;
  }

  /**
   * metodo que invierte el array de la lista
   */
  reverse() {
    let aux: T[] = [];
    let j = 0;
    while (this.list[j + 1] != undefined) {
      j++;
    }
    j++;
    let longitud = j;
    j = 0;
    for (let i = longitud - 1; i >= 0; i--) {
      aux[j] = this.list[i];
      j++;
    }
    this.list = aux;
  }

  /**
   * metodo que emula un foreach
   * @param myFucntion funcion para realizar el callback
   */
  forEach(myFucntion: (a: T) => T) {
    let i = 0;
    while (this.list[i + 1] != undefined) {
      i++;
    }
    i++;
    let limit = i;

    for (let i = 0; i < limit; i++) {
      this.list[i] = myFucntion(this.list[i]);
    }
    return this.list;
  }
}

// const prueba = new lista([1, 2, 3, 4]);
// const prueba_dos = new lista(["cabeza", "señores", "caramelos"]);

// console.log(prueba);
// prueba.forEach((elemento) => {
//   elemento = elemento + 2;
//   return elemento;
// });
// console.log(prueba);
