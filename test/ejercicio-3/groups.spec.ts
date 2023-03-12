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

const individual = new Single("hernesto", 35, discografia_base);
const grupo_de_musica = new Group(
  "javier",
  6,
  discografia_base,
  "casi a cenar",
  5
);

const myCollection = new ArtistCollection([individual, grupo_de_musica]);

describe("group test", () => {
  it("get nombre correcto", () => {
    expect(grupo_de_musica.getName()).to.be.equal("casi a cenar")
  });
  it("get nombre incorrecto", () => {
    expect(grupo_de_musica.getName()).to.not.be.equal("casi a desayunar")
  });
  it("get generos correcto", () => {
    expect(grupo_de_musica.getIntegrantes()).to.be.equal(5)
  });
  it("get generos incorrecto", () => {
    expect(grupo_de_musica.getIntegrantes()).to.not.be.equal(55)
  });
});