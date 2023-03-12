import "mocha";
import { expect } from "chai";
import { Cancion } from "../../src/collection/cancion";
import { CD } from "../../src/collection/cd";
import { Single } from "../../src/collection/single";
import { Discografy } from "../../src/collection/discografy";
import { Group } from "../../src/collection/group";
import { ArtistCollection } from "../../src/collection/collection";

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
  it("get generos correcto", () => {
    expect(individual.getName()).to.deep.equal("hernesto")
  });
  it("get generos incorrecto", () => {
    expect(individual.getName()).to.not.deep.equal("hernestos")
  });
});