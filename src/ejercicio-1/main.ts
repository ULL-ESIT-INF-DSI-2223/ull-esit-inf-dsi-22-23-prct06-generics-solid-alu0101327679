import { Streamable } from "./stremeable";
import { BasicStreamableCollection } from "./colecctions/BasicColection";
import { Serie } from "./clases/serie";
import { SeriesCollection } from "./colecctions/SeriesCollection";
import { Pelicula } from "./clases/pelicula";
import { PelisCollection } from "./colecctions/PelisCollection";
import { Documental } from "./clases/Documental";

const muchasSeries = new SeriesCollection(
  [
    new Serie("serie 1", 1999, "animacion", 45),
    new Serie("serie 2", 2000, "terror", 34),
  ],
  "muchas series 1",
  2020,
  "terror"
);

console.log(muchasSeries)