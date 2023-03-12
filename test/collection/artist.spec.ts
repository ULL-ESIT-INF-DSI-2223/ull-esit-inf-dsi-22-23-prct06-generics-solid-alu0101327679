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


describe("artista test", () => {
  it("get generos correcto", () => {
    expect(individual.getListeners()).to.be.equal(35)
  });
  it("get generos incorrecto", () => {
    expect(individual.getListeners()).to.not.be.equal(2)
  });
  it("set generos ", () => {
    individual.setListeners(40)
    expect(individual.getListeners()).to.be.equal(40)
  });
  it("set generos ", () => {
    individual.table()
    expect(individual.getListeners()).to.be.equal(40)
  });

});