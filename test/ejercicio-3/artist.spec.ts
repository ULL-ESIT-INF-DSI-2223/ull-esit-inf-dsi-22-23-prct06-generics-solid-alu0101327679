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