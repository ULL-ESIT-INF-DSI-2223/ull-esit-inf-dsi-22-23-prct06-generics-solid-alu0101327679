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
const discografia_bdos = new Discografy([CD_dos]);

const individual = new Single("hernesto", 35, discografia_base);
const grupo_de_musica = new Group(
  "javier",
  6,
  discografia_bdos,
  "casi a cenar"
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
});

describe("collection test", () => {
  it("busqueda de un artista correcta", () => {
    expect(myCollection.searchArtist("hernesto")).to.deep.equal(individual);
  });
  it("busqueda de un artista incorrecta", () => {
    expect(myCollection.searchArtist("samuel")).to.be.false;
  });
  it("busqueda de un disco correcta", () => {
    expect(myCollection.searchCD("disco")).to.be.true;
  });
  it("busqueda de un disco incorrecta", () => {
    expect(myCollection.searchCD("discossssss")).to.be.false;
  });
  it("busqueda de una cancion correcta", () => {
    expect(myCollection.searchCancion("cacatua")).to.be.true;
  });
  it("busqueda de una cancion incorrecta", () => {
    expect(myCollection.searchCancion("cacaasastua")).to.be.false;
  });
  it("calculo de la curacion de un disco correcto", () => {
    expect(myCollection.getDuracion("disco")).to.be.equal(366);
  });
  it("calculo de la curacion de un disco incorrecto", () => {
    expect(myCollection.getDuracion("disco")).to.not.be.equal(655);
  });
  it("calculo de la cantidad de canciones de un disco correcto", () => {
    expect(myCollection.getNCanciones("disco")).to.be.equal(1);
  });
  it("calculo de la cantidad de canciones de un disco incorrecto", () => {
    expect(myCollection.getNCanciones("disco")).to.not.be.equal(655);
  });
  it("calculo de la cantidad de reproducciones de un disco corracto", () => {
    expect(myCollection.getReproducciones("disco")).to.be.equal(6);
  });
  it("calculo de la cantidad de reproducciones de un disco incorrecto", () => {
    expect(myCollection.getReproducciones("disco")).to.not.be.equal(655);
  });
});
