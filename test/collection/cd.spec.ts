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