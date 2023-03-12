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
  4
);

const myCollection = new ArtistCollection([individual, grupo_de_musica]);


const singular = new Disco_Single(" prueba 32", 2023, cancion_base)
const discografia_singular = new Discografy([singular])
const art_sing = new Artist("solo",1,discografia_singular)
const mi_singular_coll = new ArtistCollection([art_sing])

describe("collection test", () => {
  it("busqueda de un artista correcta", () => {
    expect(myCollection.searchArtist("hernesto")).to.deep.equal(individual);
  });
  it("busqueda de un artista incorrecta", () => {
    expect(myCollection.searchArtist("samuel")).to.be.false;
  });
  it("busqueda de un disco correcta", () => {
    expect(myCollection.searchCD("disco")).to.deep.equal(CD_base);
  });
  it("busqueda de un disco incorrecta", () => {
    expect(myCollection.searchCD("discossssss")).to.be.false;
  });
  it("busqueda de un single correcta", () => {
    expect(mi_singular_coll.searchCD(" prueba 32")).to.deep.equal(singular);
  });
  it("busqueda de un single incorrecta", () => {
    expect(mi_singular_coll.searchCD("prueba 32")).to.be.false;
  });
  it("busqueda de una cancion correcta", () => {
    expect(myCollection.searchCancion("cacatua")).to.deep.equal(cancion_base);
  });
  it("busqueda de una cancion incorrecta", () => {
    expect(myCollection.searchCancion("cacaasastua")).to.be.false;
  });
  it("busqueda de una cancion single correcta", () => {
    expect(mi_singular_coll.searchCancion("cacatua")).to.deep.equal(cancion_base);
  });
  it("busqueda de una cancion single incorrecta", () => {
    expect(mi_singular_coll.searchCancion("cacaasastua")).to.be.false;
  });
  it("calculo de la curacion de un disco correcto", () => {
    expect(myCollection.getDuracion("disco")).to.be.equal(366);
  });
  it("calculo de la curacion de un disco incorrecto", () => {
    expect(myCollection.getDuracion("disco")).to.not.be.equal(655);
  });
  it("calculo de la curacion de un disco correcto", () => {
    expect(mi_singular_coll.getDuracion(" prueba 32")).to.be.equal(366);
  });
  it("calculo de la curacion de un disco incorrecto", () => {
    expect(mi_singular_coll.getDuracion(" prueba 32a")).to.not.be.equal(655);
  });
  it("calculo de la cantidad de canciones de un disco correcto", () => {
    expect(myCollection.getNCanciones("disco")).to.be.equal(1);
  });
  it("calculo de la cantidad de canciones de un disco incorrecto", () => {
    expect(myCollection.getNCanciones("disco")).to.not.be.equal(655);
  });
  it("calculo de la cantidad de canciones de un disco correcto", () => {
    expect(mi_singular_coll.getNCanciones(" prueba 32")).to.be.equal(1);
  });
  it("calculo de la cantidad de canciones de un disco incorrecto", () => {
    expect(mi_singular_coll.getNCanciones(" prueba 32a")).to.not.be.equal(655);
  });
  it("calculo de la cantidad de reproducciones de un disco corracto", () => {
    expect(myCollection.getReproducciones("disco")).to.be.equal(6);
  });
  it("calculo de la cantidad de reproducciones de un disco incorrecto", () => {
    expect(myCollection.getReproducciones("disco")).to.not.be.equal(655);
  });
  it("calculo de la cantidad de reproducciones de un disco corracto", () => {
    expect(mi_singular_coll.getReproducciones(" prueba 32")).to.be.equal(6);
  });
  it("calculo de la cantidad de reproducciones de un disco incorrecto", () => {
    expect(mi_singular_coll.getReproducciones(" prueba 32a")).to.not.be.equal(655);
  });
  it("add artist", () => {
    myCollection.addArtist(grupo_de_musica)
  });
  it("add artist", () => {
    expect(myCollection.getSize()).to.be.equal(3)
  });
  it("table correcta", () => {
    myCollection.table()
  });
});
