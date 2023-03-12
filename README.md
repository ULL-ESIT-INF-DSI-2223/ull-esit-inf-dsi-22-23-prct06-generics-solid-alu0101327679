# Informe de Practica 6

## Práctica 6 - Clases e interfaces genéricas. Principios SOLID

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101327679/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101327679?branch=main)

## Introducción

Esta práctica consistirá en la elaboración de actividades con las que establecer unas bases con el conocimiento
relacionado con clases e interfaces genericas en _TypeScript_

Los recursos de esta práctica estarán organizados en los sigueintes directorios:

- **src**: En este directorio se ubican las actividades realizadas para el cumplimiento de la práctica, en este caso son:
  - DSIflix:
  - Implementación de una lista y sus operaciones:
  - Ampliando la biblioteca musical:
  
- **test**: Este es el directorio donde se ubican los test de las actividades

- **docs**: directorio generado por typedoc, es la ubicación de la documentacion de la práctica

## Tareas previas

- Repasar las ["Markdown Basics"](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links)
- Tener a mano los [apuntes](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/)
- Tener a mano el [guion de la practica](https://ull-esit-inf-dsi-2223.github.io/prct06-generics-solid)
- Peparar el entorno virtual para que contenga:

  1. [TyeDoc](https://typedoc.org)
  2. [Mocha](https://mochajs.org)
  3. [Chai](https://www.chaijs.com)
  4. Prettier
  5. eslint
  6. [Instanbull](https://istanbul.js.org/)
  7. [Coveralls](https://coveralls.io/)
  8. [Prompt-sync](https://www.npmjs.com/package/prompt-sync)
     - `npm i prompt-sync`
     - `npm i --save-dev @types/prompt-sync`

## Actividades

### DSIflix

Realizar el modelo de datos de una plataforma de streaming, pero con una interfaz generica , una clase abstracta genereica y 3 clases que heredan de esta clas anterior, siguiendo los principios SOLID

```ts
export interface Streamable<T> {
  name: string;
  date: number;
  genere: string;
  searchByName(newItem: string): T[];
  searchByDate(newItem: number): T[];
  searchByGenere(newItem: string): T[];
}
```

```ts
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
```

```ts
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
```

```ts
import { BasicStreamableCollection } from "./BasicColection";
import { Pelicula } from "../clases/pelicula";
/**
 * clase coleccion de peliculas que hereda de BasicStreamableCollection de tipo Pelicula
 */
export class PelisCollection extends BasicStreamableCollection<Pelicula> {
  name = "";
  date = 0;
  genere = "";
  /**
   * constructor de la clase biblioteca de peliculas
   * @param Items array de peliculas
   * @param name nombre de la biblioteca
   * @param date fecha de al biblioteca
   * @param genere genero de al biblioteca
   */
  constructor(Items: Pelicula[], name: string, date: number, genere: string) {
    super(Items, name, date, genere);
    this.date = date
    this.name = name
    this.genere = genere
  }
  /**
   * metodo para buscar por fecha
   * @param newItem fecha con la que hacer la busqueda
   * @returns array con las ocurrencias
   */
  searchByDate(newItem: number): Pelicula[] {
    return this.Items.filter((elemento) => elemento.getDate() === newItem);
  }
  /**
   * metodo para buscar según el genero
   * @param newItem genero que buscar
   * @returns array con las ocurrencias
   */
  searchByGenere(newItem: string): Pelicula[] {
    return this.Items.filter((elemento) => elemento.getGenere() === newItem);
  }
  /**
   * metodo para buscar según el nombre
   * @param newItem nombre con el que buscar
   * @returns array con las ocurrencias
   */
  searchByName(newItem: string): Pelicula[] {
    return this.Items.filter((elemento) => elemento.getName() === newItem);
  }
  /**
   * metodo para buscar segun si son o no oscar
   * @param newItem boolean sobre el que buscar
   * @returns array con las ocurrencias
   */
  searchOscars(newItem: boolean): Pelicula[] {
    return this.Items.filter((elemento) => elemento.isAnOscar() === newItem);
  }
}
```

```ts
import { BasicStreamableCollection } from "./BasicColection";
import { Serie } from "../clases/serie";
/**
 * clase collecion de series que herede de BasicStreamableCollection con el tipo Serie
 */
export class SeriesCollection extends BasicStreamableCollection<Serie> {
  name = "";
  date = 0;
  genere = "";
  /**
   * constructor de la clase coleccion de serie
   * @param Items array de series
   * @param name nombre de la biblioteca
   * @param date fecha de la biblioteca
   * @param genere genero de al biblioteca
   */
  constructor(Items: Serie[], name: string, date: number, genere: string) {
    super(Items, name, date, genere);
    this.genere = genere
    this.name = name
    this.date = date
  }
  /**
   * metodo para buscar segun la fecha
   * @param newItem fecha con la que hacer la busqueda
   * @returns array con las ocurrencias
   */
  searchByDate(newItem: number): Serie[] {
    return this.Items.filter((elemento) => elemento.getDate() === newItem);
  }
  /**
   * metodo para buscar según el genero
   * @param newItem genero con el que realizar la busqueda
   * @returns array con las ocurrencias
   */
  searchByGenere(newItem: string): Serie[] {
    return this.Items.filter((elemento) => elemento.getGenere() === newItem);
  }
  /**
   * metodo para buscar según el nombre
   * @param newItem nombre por el que buscar
   * @returns array con las ocurrencias
   */
  searchByName(newItem: string): Serie[] {
    return this.Items.filter((elemento) => elemento.getName() === newItem);
  }
  /**
   * metodo para buscar segun el numero de capitulos
   * @param newItem numero de capitulos para ahcer la busqueda
   * @returns array con las ocurrencias
   */
  searchByCaps(newItem: number): Serie[] {
    return this.Items.filter((elemento) => elemento.getCaps() === newItem);
  }
}

```

```ts
/**
 * clase para crear objetos tipo documental
 */
export class Documental {
  /**
   * constructor de la clase documental
   * @param nombre nombre del documental
   * @param date fecha de publicacion del documental
   * @param genere genero del documental
   * @param Channel canal donde se publica el documental
   */
  constructor(
    private nombre: string,
    private date: number,
    private genere: string,
    private Channel: string
  ) {}
  /**
   * metodo para obtener el nombre del documental
   * @returns nombre
   */
  getName() {
    return this.nombre;
  }
  /**
   * metodo para obtener la fecha de publicacion del documental
   * @returns fecha de publicacion
   */
  getDate() {
    return this.date;
  }
  /**
   * metodo que devuelve el genero del documental
   * @returns enero del documental
   */
  getGenere() {
    return this.genere;
  }
  /**
   * metodo que devuelve el canal del documental
   * @returns canal de publicacion del documental
   */
  getCanal() {
    return this.Channel;
  }
}

```

```ts
/**
 * clase clase par ala creaciond eobjetos tipo pelicula
 */
export class Pelicula {
  /**
   * constructor de la Pelicula
   * @param nombre nombre de la Pelicula
   * @param date fecha de la Pelicula
   * @param genere genero de la Pelicula
   * @param Oscar true si la Pelicula ha ganado un oscar o no
   */
  constructor(
    private nombre: string,
    private date: number,
    private genere: string,
    private Oscar: boolean
  ) {}
  /**
   * metodo para obtener el nombre de la pelicula
   * @returns nombre de la pelicula
   */
  getName() {
    return this.nombre;
  }
  /**
   * metodo para obtener la fecha de la pelicula
   * @returns fecha de la pelicula
   */
  getDate() {
    return this.date;
  }
  /**
   * metodo para obtener el genero de la pelicula
   * @returns genero de la pelicula
   */
  getGenere() {
    return this.genere;
  }
  /**
   * metodo para saber si la pelicula tiene un oscar
   * @returns true si tiene un oscar o false si no
   */
  isAnOscar() {
    return this.Oscar;
  }
}

```

```ts
/**
 * clase apra al creación de objetos tipo serie
 */
export class Serie {
  /**
   * constructor de la serie
   * @param nombre nombre de la serie
   * @param date fecha de la serie
   * @param genere  genero de al serie
   * @param capitulos capitulos de al serie
   */
  constructor(
    private nombre: string,
    private date: number,
    private genere: string,
    private capitulos: number
  ) {}
  /**
   * metodo para obtener el nombre de la serie
   * @returns nombre de la serie
   */
  getName() {
    return this.nombre;
  }
  /**
   * metodo para obtener la fcha de la serie
   * @returns fecha de la serie
   */
  getDate() {
    return this.date;
  }
  /**
   * metodo para obtener el genero de la serie
   * @returns genero de la serie
   */
  getGenere() {
    return this.genere;
  }
  /**
   * metodo par aobtener la cantidad de capitulos de la serie
   * @returns cantidad de capitulos de la serie
   */
  getCaps() {
    return this.capitulos;
  }
}
```

Siendo estos los contenidos de los ficheros para la ejecución de esta práctica

### Lista

Implementar 8 operciones de array, pero sin usar las operaciones en las que están basadas

```ts
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
```

### Biblioteca 2.0

Transformar el ejercicio 1 de la práctica pasada en :

- discografía basada en coleciond e discos o de singles
- discografía debe ser generica

```ts
import { Discografy } from "./discografy";
import { CD } from "./cd";
import { Disco_Single } from "./disco_single";
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
    private discografy: Discografy<CD | Disco_Single>
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

```

```ts
/**
 * definicion de la clase cancion
 */
export class Cancion {
  /**
   *
   * @param name nombre de la cancion
   * @param duracion durecion de la cancion
   * @param generes array de strings que contienen los generos de la cancion
   * @param single variable tipo boolan, si está a true es un single, false en caso contratio
   * @param produce  numero de reproducciones de la cancion
   */
  constructor(
    private name: string,
    private duracion: number,
    private generes: string[],
    private single: boolean,
    private produce: number
  ) {}
  /**
   * funcion que devuelve los generos d ela cancion
   * @returns array de strings
   */
  getGeneres() {
    return this.generes;
  }
  /**
   * funcion que imprime la informaciond e la cancion en formato tabla
   */
  table() {
    console.table(this);
  }
  /**
   * funcion que devuelve el nombre de la cancion
   * @returns string
   */
  getname() {
    return this.name;
  }
  /**
   * funcion que devuelve la duracion de la cancion
   * @returns variable tipo number
   */
  getDuracion() {
    return this.duracion;
  }
  /**
   * funcion que devuelve la cantidad de reproducciones que ha tenido una cancion
   * @returns variable tipo number
   */
  getProduce() {
    return this.produce;
  }
}

```

```ts
import { Cancion } from "./cancion";
/**
 *definicionde la clase CD
 */
export class CD {
  /**
   * constructor de la clase disco
   * @param name nombre del disco
   * @param published fecha de publicacion del disco (number)
   * @param canciones array de canciones que forman el disco
   */
  constructor(
    private name: string,
    private published: number,
    private canciones: Cancion[]
  ) {}
  /**
   * funcion que devuelve el nombre del disco
   * @returns variable tipo string
   */
  getName() {
    return this.name;
  }
  /**
   * funcion que devuelve la fecha de publicacion
   * @returns variable tipo number
   */
  getPublished() {
    return this.published;
  }
  /**
   * devuelve las canciones que forman el disco
   * @returns array de objetos tipo cancion
   */
  getCanciones() {
    return this.canciones;
  }
  /**
   * funcion que imprime la información del disco en formato tabla
   */
  table(): void {
    console.table(this);
  }
}

```

```ts
import { Artist } from "./artist";
import { Cancion } from "./cancion";
import { Discografy } from "./discografy";
import { CD } from "./cd";
import { Disco_Single } from "./disco_single";
/**
 * clase para poder tener una collecion de artistas
 */
export class ArtistCollection {
  /**
   * constructor de la clase ArtistCollection
   * @param artistas array de objetos tipo artist
   */
  constructor(private artistas: Artist[]) {}
  
  /**
   * funcion para añadir nuevo artista a la coleccion
   * @param newArtist objeto de tipo ARtist
   */
  addArtist(newArtist: Artist) {
    this.artistas.push(newArtist);
  }

  /**
   * funcionq ue devuelve la cantidad de artistas de la collecion
   * @returns variable de tipo number
   */
  getSize() {
    return this.artistas.length;
  }

  /**
   * funcion que busca un artista en concreto e imprime su informacion por pantalla en formato tabla
   * @param busqueda variabl de tipo string con la que buscar al artista
   * @returns true si lo encuentra, false en caso contrario
   */
  searchArtist(busqueda: string): boolean | Artist {
    let encontrado: boolean = false;
    let este_elemento = new Artist("",0, new Discografy([ new CD("",0,[ new Cancion("",0,[""], false, 0)])]))
    this.artistas.forEach((element) => {
      // console.log(element.name, busqueda);
      if (element.name == busqueda) {
        // element.table();
        este_elemento = element
        encontrado = true;
      }
    });

    if(encontrado){
      return este_elemento
    }else{
      return false
    }
  }

  /**
   * funcion que busca un disco en concreto en nuestra coleccion e imprime su informacion por pantalla en formato tabla
   * @param busqueda variable de tipo string (nombre del disco)
   * @returns true si encuentra lo buscado, false si no lo encuentra
   */
  searchCD(busqueda: string): boolean | CD | Disco_Single {
    let encontrado: boolean = false;
    let encontrado_dos = false
    let este_elemento = new CD("", 0, [new Cancion("",0,[""], false, 0)])
    let este_dos = new Disco_Single("", 0 , new Cancion("",0,[""], false, 0))
    this.artistas.forEach((element) => {
      const discografia_var = element.getDiscografy();
      // console.log(discografia_var)
      discografia_var.getDiscos().forEach((elementDos: CD | Disco_Single) => {
        if(elementDos instanceof CD){
          if (elementDos.getName() == busqueda) {
            este_elemento = elementDos
            encontrado = true;
          }
        }else if(elementDos instanceof Disco_Single){
          if(elementDos.getName() == busqueda){
            este_dos = elementDos
            encontrado_dos = true
          }
        }
      });
    });
    if(encontrado){
      // console.log(este_elemento)
      return este_elemento
    }else if(encontrado_dos){
      return este_dos
    }else {
      return false
    }
  }

  /**
   * funcion que busca una cancion en concreto en nuestra coleccion e imprime su informacion por pantalla en formato tabla
   * @param busqueda variable de tipo string (nombre del disco)
   * @returns true si encuentra lo buscado, false si no lo encuentra
   */
  searchCancion(busqueda: string): boolean | Cancion {
    let encontrado: boolean = false;
    let este_elemento = new Cancion("",0,[""],false, 0)
    this.artistas.forEach((element) => {
      const discografia_var = element.getDiscografy();
      discografia_var.getDiscos().forEach((elementDos: CD | Disco_Single) => {
        if (elementDos instanceof Disco_Single) {
           if(elementDos.getCanciones().getname() === busqueda){
            este_elemento = elementDos.getCanciones()
            encontrado = true
           }
        } else if (elementDos instanceof CD) {
          elementDos.getCanciones().forEach((elementTres: Cancion) => {
            if (elementTres.getname() == busqueda) {
              este_elemento = elementTres
              encontrado = true;
            }
          });
        }
      });
    });
    if(encontrado ){
      return este_elemento
    }else{
      return false
    }
  }

  /**
   * funcion que calcula la cantidad de canciones de un disco en concreto
   * @param busqueda variable de tipo string (nombre del disco a calcualar)
   * @returns numero de canciones
   */
  getNCanciones(busqueda: string): number {
    let counter: number = 0;
    this.artistas.forEach((element) => {
      const discografia_var = element.getDiscografy();
      // console.log(discografia_var)
      discografia_var.getDiscos().forEach((elementDos: CD | Disco_Single) => {
        if(elementDos instanceof Disco_Single){
          if (elementDos.getName() === busqueda){
            counter =  1
          }
        }else if(elementDos instanceof CD){
          if (elementDos.getName() == busqueda) {
            counter =  elementDos.getCanciones().length;
          }
        }

      });
    });
    return counter;
  }

  /**
   * funcion que calcula la duracion de un disco en concreto
   * @param busqueda variable de tipo string (nombre del disco a calcualar)
   * @returns
   */
  getDuracion(busqueda: string): number {
    let duracion: number = 0;
    this.artistas.forEach((element) => {
      const discografia_var = element.getDiscografy();
      // console.log(discografia_var)
      discografia_var.getDiscos().forEach((elementDos: CD | Disco_Single) => {
      if(elementDos instanceof CD){
        if (elementDos.getName() == busqueda) {
          elementDos.getCanciones().forEach((elementTres) => {
          duracion += elementTres.getDuracion();
          });
        }
      }else if(elementDos instanceof Disco_Single){
        duracion = elementDos.getCanciones().getDuracion()
      }
      });
    });
    return duracion;
  }

  /**
   * funcion que calcula la cantidad total de reproducciones de un disco en concreto
   * @param busqueda variable de tipo string (nombre del disco a calcualar)
   * @returns variable tipo number con la cantidad total de reproducciones
   */
  getReproducciones(busqueda: string): number {
    let reproducciones_totales: number = 0;
    this.artistas.forEach((element) => {
      const discografia_var = element.getDiscografy();
      discografia_var.getDiscos().forEach((elementDos: CD | Disco_Single) => {
        if(elementDos instanceof CD){
          if (elementDos.getName() == busqueda) {
            elementDos.getCanciones().forEach((elementTres) => {
              reproducciones_totales += elementTres.getProduce();
            });
          }
        }else if( elementDos instanceof Disco_Single){
          reproducciones_totales = elementDos.getCanciones().getProduce()
        }

      });
    });
    return reproducciones_totales;
  }

  /**
   * funcion que imprime la informacion del objeto en formato tabla
   */
  table(): void {
    console.table(this);
  }
}

```

```ts
import { Cancion } from "./cancion";

/**
 *definicionde la clase CD
 */
 export class Disco_Single {
  /**
   * constructor de la clase disco
   * @param name nombre del disco
   * @param published fecha de publicacion del disco (number)
   * @param canciones canciones que forma el disco
   */
  constructor(
    private name: string,
    private published: number,
    private canciones: Cancion
  ) {}
  /**
   * funcion que devuelve el nombre del disco
   * @returns variable tipo string
   */
  getName() {
    return this.name;
  }
  /**
   * funcion que devuelve la fecha de publicacion
   * @returns variable tipo number
   */
  getPublished() {
    return this.published;
  }
  /**
   * devuelve las canciones que forman el disco
   * @returns array de objetos tipo cancion
   */
  getCanciones() {
    return this.canciones;
  }
  /**
   * funcion que imprime la información del disco en formato tabla
   */
  table(): void {
    console.table(this);
  }
}

```

```ts
import { CD } from "./cd";
import { Disco_Single } from "./disco_single";
/**
 * definicion de la clase discografía
 */
export class Discografy<T extends CD | Disco_Single> {
  /**
   * cosntructor del objeto Discografy formado por un array de objetos de tipo CD
   * @param discos array de objetos de tipo CD
   */
  constructor(private discos: T[]) {}
  /**
   * funcion que añade un disco a la discografía
   * @param newDisco objeto tipo CD a añadir a la discografía
   */
  addDisco(newDisco: T) {
    this.discos.push(newDisco);
  }
  /**
   * funcion que devuelve los discos de la discografía
   * @returns array de objetos tipo CD
   */
  getDiscos() {
    return this.discos;
  }
  /**
   * funcion que imprime la informaciond el adiscografía en formato tabla
   */
  table() {
    console.table(this);
  }
}

```

```ts
import { Artist } from "./artist";
import { Discografy } from "./discografy";
import { CD } from "./cd";
import { Disco_Single } from "./disco_single";

export class Group extends Artist {
  // private names: string[]
  constructor(
    name: string,
    listeners: number,
    discografy: Discografy<CD | Disco_Single>,
    private groupName: string,
    private nIntegrantes: number
  ) {
    super(name, listeners, discografy);
    groupName = name;
  }
  getName(): string {
    return this.groupName;
  }
  getIntegrantes(): number {
    return this.nIntegrantes
  }
}

```

```ts
import { Artist } from "./artist";
import { Discografy } from "./discografy";
import { CD } from "./cd";
import { Disco_Single } from "./disco_single";

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
  constructor(name: string, listeners: number, discografy: Discografy<CD | Disco_Single>) {
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

```

## practica

En este caso la practica se basó en la comprobación de la efectividad de una aplicacion relacionada con dar paseos

```ts
/**
 * interfaz collectable, obliga a que exista additem, getitem, remove, getNumberOfItems
 */
export interface Collectable<T> {
  /**
   * añade un nuevo item a la collecion
   * @param newItem  item que se alade a la collecion
   */
  addItem(newItem: T): void;

  /**
   * metodo que devuelve el elemento en la posicion index
   * @param index indice del elementoa  devolver
   */
  getItem(index: number): T;

  /**
   * metodo que elimina el elemento en la posicion index y lo devuelve
   * @param index indice del elemento
   */
  removeItem(index: number): T;

  /**
   * metodo que devuelve la cantidad de items que existen
   */
  getNumberOfItems(): number;
}

```

```ts
/**
 * interfaz searchable, obliga a que exista un metodo search
 */
export interface Searchable<T> {
  search(newItem: T): T[];
}

```

```ts
import { Collectable } from "./collectable";
import { Searchable } from "./searchable";

/**
 * clase abtracta generica que implementa las interfaces Collectable y Searchable
 */
export abstract class SearchableCollection<T>
  implements Collectable<T>, Searchable<T>
{
  /**
   * Constructor de la clase abstracta SearchableCollection
   * @param Items Array de objetos de tipo T
   */
  constructor(protected Items: T[]) {}

  /**
   * matodo que añade un item a la collection
   * @param newItem item a añadir
   */
  addItem(newItem: T) {
    this.Items.push(newItem);
  }
  /**
   * metodo que devuelve un elemento especifico
   * @param index indice del elemento
   * @returns elemento deseado
   */
  getItem(index: number): T {
    return this.Items[index];
  }
  /**
   * metodo que elimina un elemento del array y lo devuelve
   * @param index indice del elemento a eliminar
   * @returns elemento eliminado
   */
  removeItem(index: number): T {
    let temp = this.Items[index];
    let primeraMitad: T[] = [];
    let segundaMitad: T[] = [];
    for (let i = 0; i < index - 1; i++) {
      primeraMitad[i] = this.Items[i];
    }
    for (let i = 0; i < this.Items.length - index + 1; i++) {
      segundaMitad[i] = this.Items[i];
    }
    let union: T[] = [];
    union.concat(primeraMitad, segundaMitad);
    this.Items = union;
    return temp;
  }
  /**
   * metodo que devuelve la cantidad de elementos de un array
   * @returns cantidad de elmentos
   */
  getNumberOfItems(): number {
    return this.Items.length;
  }
  /**
   * metodo abstracto que busca un item
   * @param newItem item en busqueda
   */
  abstract search(newItem: T): T[];
}

/**
 * clase que expande SearchableCollection de tipo number
 */
export class NumericSearchableCollection extends SearchableCollection<number> {
  /**
   * constructor de la clase NumericSearchableCollection
   * @param objetos array de numeros
   */
  constructor(objetos: number[]) {
    super(objetos);
  }
  /**
   * metodo para buscar un numero en el array
   * @param newItem item a buscar
   * @returns array con las ocurrencias
   */
  search(newItem: number): number[] {
    return this.Items.filter((numerito) => numerito == newItem);
  }
}

/**
 * clase que expande SearchableCollection de tipo string
 */
export class StringSearchableCollection extends SearchableCollection<string> {
  /**
   * constructor de la clase StringSearchableCollection
   * @param objetos array de strings
   */
  constructor(objetos: string[]) {
    super(objetos);
  }
  /**
   * metodo que busca un los strings que contengan un string
   * @param newItem subcadena a buscar
   * @returns strings que contienen la subcadena
   */
  search(newItem: string): string[] {
    return this.Items.filter((palabras) => palabras.includes(newItem));
  }
}

```

## Conclusion

Gracias a esta práctica se ha conseguido establecer una amplia base con clase e interfaces genericas, abstractas y ambas a la vez.

