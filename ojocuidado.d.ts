/**
 * clase lista, donde no se usa nada de Array.prototype.
 */
export declare class lista<T> {
    private list;
    /**
     * constructor de la clase lista
     * @param list array de elementos tipo T
     */
    constructor(list: T[]);
    /**
     * metodo para obtener el array de la lista
     * @returns array de elementos tipo T
     */
    getLista(): T[];
    /**
     * metodo que cambia el valor del array a uno nuevo
     * @param valor array de tipo T
     */
    setLista(valor: T[]): void;
    addElement(valor: T): void;
    /**
     * motodo para insertar una lista al fianl de otra
     * @param lista_uno objeto de tipo lista<T>
     * @param lista_dos objeto de tipo lista<T>
     * @returns lista
     */
    append(lista_uno: lista<T>, lista_dos: lista<T>): lista<T>;
    /**
       * metodo que añade una lista al final de la lista del objeto invocante
       * @param lista_aux
       */
    concatenate(lista_aux: lista<T>): void;
    /**
     * metodo para filtrar los elementos según una funcion dada
     */
    filter(myFucntion: (a: T[]) => void): void;
    /**
     * metodo par aobtener la longitud de  al lista
     * @returns longitud de la lista
     */
    lenght(): number;
    /**
     * metodo para modoficar los elementos con una función dada
     * @param myFucntion funcion con la que se operará
     */
    map(myFucntion: (a: T[]) => void): void;
    /**
     * metodo para reducir todo el array a un string
     * @param myFucntion funcion sobre la que operar
     * @param acumulador velor acumulado
     * @returns
     */
    reduce(myFucntion: (a: T, acumulador: T) => T, acumulador: T): T;
    /**
     * metodo que invierte el array de la lista
     */
    reverse(): void;
    /**
     * metodo que emula un foreach
     * @param myFucntion funcion para realizar el callback
     */
    forEach(myFucntion: (a: T) => void): void;
}
