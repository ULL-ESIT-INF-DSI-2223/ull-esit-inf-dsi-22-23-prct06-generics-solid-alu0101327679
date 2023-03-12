import "mocha";
import { expect } from "chai";
import { Cancion } from "../../src/ejercicio-3/cancion";
import { CD } from "../../src/ejercicio-3/cd";
import { Single } from "../../src/ejercicio-3/single";
import { Discografy } from "../../src/ejercicio-3/discografy";
import { Group } from "../../src/ejercicio-3/group";
import { ArtistCollection } from "../../src/ejercicio-3/collection";
import { Disco_Single } from "../../src/ejercicio-3/disco_single";
import { Artist } from "../../src/ejercicio-3/artist";

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
  "casi a cenar",
  5
);


describe("discografía test test", () => {
  it("get generos correcto", () => {
    expect(discografia_base.getDiscos()).to.deep.equal([CD_base, CD_dos])
  });
  it("get generos correcto", () => {
    discografia_base.addDisco(CD_dos)
  });
  it("table", () => {
    discografia_base.table()
  });
});