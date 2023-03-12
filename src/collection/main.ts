import { Cancion } from "./cancion";
import { CD } from "./cd";
import { Single } from "./single";
import { Discografy } from "./discografy";
import { Group } from "./group";
import { ArtistCollection } from "./collection";

const cancion_base = new Cancion("cacatua", 366, ["country", "rock"], true, 6);
const cancion_dos = new Cancion("selfmade", 366, ["country", "rock"], true, 2);

const CD_base = new CD("disco", 1932, [cancion_base]);
const CD_dos = new CD("segundo", 1935, [cancion_dos]);
const discografia_base = new Discografy([CD_base, CD_dos]);
const discografia_bdos = new Discografy([CD_dos]);

const individual = new Single("hernesto", 35, discografia_base);
const grupo_de_musica = new Group(
  "javier",
  6,
  discografia_bdos,
  "casi a cenar"
);

const myCollection = new ArtistCollection([individual, grupo_de_musica]);

let variable: boolean = myCollection.searchCD("disco");
// console.log(variable);
// console.log(CD_base)

// console.log(myCollection.getDuracion("disco"))
// console.log(myCollection.getReproducciones("disco"))
