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

const singular = new Disco_Single(" prueba 32", 2023, cancion_base)

const individual = new Single("hernesto", 35, discografia_base);
const grupo_de_musica = new Group(
  "javier",
  6,
  discografia_base,
  "casi a cenar",
  5
);



describe("disco singular test", () => {
  it("get nombre correcto", () => {
    expect(singular.getName()).to.be.equal(" prueba 32")
  });
  it("get nombre incorrecto", () => {
    expect(singular.getName()).to.not.be.equal("prueba 32")
  });
  it("get published correcto", () => {
    expect(singular.getPublished()).to.be.equal(2023)
  });
  it("get published incorrecto", () => {
    expect(singular.getPublished()).to.not.be.equal(2022)
  });
  it("get canciones correcto", () => {
    expect(singular.getCanciones()).to.be.equal(cancion_base)
  });
  it("get canciones incorrecto", () => {
    expect(singular.getCanciones()).to.not.be.equal(cancion_dos)
  });
});