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

describe("CD test", () => {
  it("get name correcta", () => {
    expect(CD_base.getName()).to.deep.equal("disco");
  });
  it("get name incorrecta", () => {
    expect(CD_base.getName()).to.not.deep.equal("discoA");
  });
  it("get published correcta", () => {
    expect(CD_base.getPublished()).to.be.equal(1932);
  });
  it("get published incorrecta", () => {
    expect(CD_base.getPublished()).to.not.be.equal(19326);
  });
  it("get canciones correcta", () => {
    expect(CD_base.getCanciones()).to.deep.equal([cancion_base]);
  });
  it("get canciones incorrecta", () => {
    expect(CD_base.getCanciones()).to.not.deep.equal(cancion_dos);
  });
  it("table", () => {
    CD_base.table()
  });
});