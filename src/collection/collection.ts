import { Artist } from "./artist";
import { Cancion } from "./cancion";
import { Discografy } from "./discografy";
import { CD } from "./cd";

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
  searchCD(busqueda: string): boolean {
    let encontrado: boolean = false;
    this.artistas.forEach((element) => {
      const discografia_var = element.getDiscografy();
      // console.log(discografia_var)
      discografia_var.getDiscos().forEach((elementDos: CD) => {
        if (elementDos.getName() == busqueda) {
          console.table(elementDos);
          encontrado = true;
        }
      });
    });
    return encontrado;
  }

  /**
   * funcion que busca una cancion en concreto en nuestra coleccion e imprime su informacion por pantalla en formato tabla
   * @param busqueda variable de tipo string (nombre del disco)
   * @returns true si encuentra lo buscado, false si no lo encuentra
   */
  searchCancion(busqueda: string): boolean {
    let encontrado: boolean = false;
    this.artistas.forEach((element) => {
      const discografia_var = element.getDiscografy();
      discografia_var.getDiscos().forEach((elementDos: CD) => {
        elementDos.getCanciones().forEach((elementTres) => {
          if (elementTres.getname() == busqueda) {
            console.table(elementTres);
            encontrado = true;
          }
        });
      });
    });
    return encontrado;
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
      discografia_var.getDiscos().forEach((elementDos: CD) => {
        if (elementDos.getName() == busqueda) {
          counter = elementDos.getCanciones().length;
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
      discografia_var.getDiscos().forEach((elementDos: CD) => {
        if (elementDos.getName() == busqueda) {
          elementDos.getCanciones().forEach((elementTres) => {
            duracion += elementTres.getDuracion();
          });
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
      discografia_var.getDiscos().forEach((elementDos: CD) => {
        if (elementDos.getName() == busqueda) {
          elementDos.getCanciones().forEach((elementTres) => {
            reproducciones_totales += elementTres.getProduce();
          });
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
