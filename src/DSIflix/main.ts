interface Streamable <T>{
  name: string
  date: number
  genere: string
  searchByName(newItem: string): T[]
  searchByDate(newItem: number): T[]
  searchByGenere(newItem: string): T[]
}

abstract class BasicStreamableCollection<T> implements Streamable<T>{
  abstract name: string
  abstract date: number
  abstract genere: string
  constructor(protected Items: T[], name: string, date: number, genere: string){}
  abstract searchByName(newItem: string): T[]
  abstract searchByDate(newItem: number): T[]
  abstract searchByGenere(newItem: string): T[]
}

class Serie {
  private caps: number = 0
  constructor( private nombre: string, private date: number, private genere: string, private capitulos: number ){
    this.caps = capitulos
  }
  getName(){ return this.nombre }
  getDate(){ return this.date }
  getGenere(){ return this.genere }
  getCaps(){ return this.caps}
}


class SeriesCollection extends BasicStreamableCollection<Serie> {
  name = ''
  date = 0
  genere = ""
  constructor(Items: Serie[], name: string, date: number, genere: string) {
    super(Items, name, date, genere)
  }
  searchByDate(newItem: number): Serie[] {
    return this.Items.filter(elemento => elemento.getDate() === newItem )
  }
  searchByGenere(newItem: string): Serie[] {
    return this.Items.filter(elemento => elemento.getGenere() === newItem)
  }
  searchByName(newItem: string): Serie[] {
    return this.Items.filter(elemento => elemento.getName() === newItem)
  }
  searchCaps(newItem: number): Serie[] {
    return this.Items.filter(elemento => elemento.getCaps() === newItem)
  }
}

const muchasSeries = new SeriesCollection([
  new Serie("serie 1", 1999, "animacion", 45),
  new Serie("serie 2", 2000, "terror", 34)
], "muchas series 1", 2020, "terror")

console.log(muchasSeries.searchByGenere("terror"))

class Pelicula {
  private oscar: boolean = false
  constructor(private nombre: string, private date: number, private genere: string, private Oscar: boolean ){
    this.oscar = Oscar
  }
  getName(){ return this.nombre }
  getDate(){ return this.date }
  getGenere(){ return this.genere }
  isAnOscar(){return this.Oscar}
}

class PelisCollection extends BasicStreamableCollection<Pelicula> {
  name = ''
  date = 0
  genere = ""
  constructor(Items: Pelicula[], name: string, date: number, genere: string) {
    super(Items, name, date, genere)
  }
  searchByDate(newItem: number): Pelicula[] {
    return this.Items.filter(elemento => elemento.getDate() === newItem )
  }
  searchByGenere(newItem: string): Pelicula[] {
    return this.Items.filter(elemento => elemento.getGenere() === newItem)
  }
  searchByName(newItem: string): Pelicula[] {
    return this.Items.filter(elemento => elemento.getName() === newItem)
  }
  searchOscars(newItem: boolean): Pelicula[] {
    return this.Items.filter(elemento => elemento.isAnOscar() === newItem)
  }
}

class Documental {
  private channel: string = ""
  constructor(private nombre: string, private date: number, private genere: string, private Channel: string ){
    this.channel = Channel
  }
  getName(){ return this.nombre }
  getDate(){ return this.date }
  getGenere(){ return this.genere }
  getCanal(){ return this.Channel }

}


class DocumentalCollection extends BasicStreamableCollection<Documental> {
  name = ''
  date = 0
  genere = ""
  constructor(Items: Documental[], name: string, date: number, genere: string) {
    super(Items, name, date, genere)
  }
  searchByDate(newItem: number): Documental[] {
    return this.Items.filter(elemento => elemento.getDate() === newItem )
  }
  searchByGenere(newItem: string): Documental[] {
    return this.Items.filter(elemento => elemento.getGenere() === newItem)
  }
  searchByName(newItem: string): Documental[] {
    return this.Items.filter(elemento => elemento.getName() === newItem)
  }
  searchCanal(newItem: string): Documental[] {
    return this.Items.filter(elemento => elemento.getCanal() === newItem)
  }
}