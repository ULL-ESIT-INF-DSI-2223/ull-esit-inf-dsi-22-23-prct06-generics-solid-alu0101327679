export interface Streamable<T> {
  name: string;
  date: number;
  genere: string;
  searchByName(newItem: string): T[];
  searchByDate(newItem: number): T[];
  searchByGenere(newItem: string): T[];
}
