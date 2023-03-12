import "mocha";
import { expect } from "chai";
import { Cancion } from "../../src/ejercicio-3/cancion";
import { CD } from "../../src/ejercicio-3/cd";
import { Single } from "../../src/ejercicio-3/single";
import { Discografy } from "../../src/ejercicio-3/discografy";
import { Group } from "../../src/ejercicio-3/group";
import { ArtistCollection } from "../../src/ejercicio-3/collection";

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

const myCollection = new ArtistCollection([individual, grupo_de_musica]);

describe("Cancion test", () => {
  it("get generos correcto", () => {
    expect(cancion_base.getGeneres()).to.deep.equal(["country", "rock"]);
  });
  it("get generos incorrecto", () => {
    expect(cancion_base.getGeneres()).to.not.deep.equal(["asdasda", "tarde"]);
  });
  it("get generos longitud", () => {
    expect(cancion_base.getGeneres().length).to.equal(2);
  });
  it("table ", () => {
    cancion_base.table()
    expect(cancion_base.getGeneres().length).to.equal(2);
  });
});