import "mocha";
import { expect } from "chai";
import { Streamable } from "../../src/ejercicio-1/stremeable";
import { BasicStreamableCollection } from "../../src/ejercicio-1/colecctions/BasicColection";
import { Serie } from "../../src/ejercicio-1/clases/serie";
import { SeriesCollection } from "../../src/ejercicio-1/colecctions//SeriesCollection";
import { Pelicula } from "../../src/ejercicio-1/clases/pelicula";
import { PelisCollection } from "../../src/ejercicio-1/colecctions/PelisCollection";
import { Documental } from "../../src/ejercicio-1/clases/Documental";
import { DocumentalCollection } from "../../src/ejercicio-1/colecctions/DocumentalCollection";

const serie_1 = new Serie("serie 1", 1999, "animacion", 45);
const serie_2 = new Serie("serie 2", 2000, "terror", 34);
const muchasSeries = new SeriesCollection(
  [serie_1, serie_2],
  "muchas series 1",
  2020,
  "terror"
);

describe("pruebas de coleccion de series", () => {
  it("busqueda por genero bien", () => {
    expect(muchasSeries.searchByGenere("terror")).to.deep.equal([serie_2]);
  });
  it("busqueda por genero mal", () => {
    expect(muchasSeries.searchByGenere("terror")).to.not.deep.equal([serie_1]);
  });
  it("busqueda por fecha bien", () => {
    expect(muchasSeries.searchByDate(2000)).to.deep.equal([serie_2]);
  });
  it("busqueda por fecha mal", () => {
    expect(muchasSeries.searchByDate(2000)).to.not.deep.equal([serie_1]);
  });
  it("busqueda por capitulos bien", () => {
    expect(muchasSeries.searchByCaps(34)).to.deep.equal([serie_2]);
  });
  it("busqueda por capitulos mal", () => {
    expect(muchasSeries.searchByCaps(35)).to.not.deep.equal([serie_1]);
  });
  it("busqueda por nombre bien", () => {
    expect(muchasSeries.searchByName("serie 2")).to.deep.equal([serie_2]);
  });
  it("busqueda por nombre mal", () => {
    expect(muchasSeries.searchByName("serie 2")).to.not.deep.equal([serie_1]);
  });
});

const pelicula_1 = new Pelicula("frozen", 2012, "animacion", false);
const pelicula_2 = new Pelicula("IT", 2015, "terror", true);
const muchasPelis = new PelisCollection(
  [pelicula_1, pelicula_2],
  "pelis favoritas",
  2023,
  "animacion"
);

describe("pruebas de coleccion de peliculas", () => {
  it("busqueda por genero bien", () => {
    expect(muchasPelis.searchByGenere("terror")).to.deep.equal([pelicula_2]);
  });
  it("busqueda por genero mal", () => {
    expect(muchasPelis.searchByGenere("terror")).to.not.deep.equal([
      pelicula_1,
    ]);
  });
  it("busqueda por fecha bien", () => {
    expect(muchasPelis.searchByDate(2015)).to.deep.equal([pelicula_2]);
  });
  it("busqueda por fecha mal", () => {
    expect(muchasPelis.searchByDate(2015)).to.not.deep.equal([pelicula_1]);
  });
  it("busqueda por capitulos bien", () => {
    expect(muchasPelis.searchOscars(true)).to.deep.equal([pelicula_2]);
  });
  it("busqueda por capitulos mal", () => {
    expect(muchasPelis.searchOscars(true)).to.not.deep.equal([pelicula_1]);
  });
  it("busqueda por nombre bien", () => {
    expect(muchasPelis.searchByName("IT")).to.deep.equal([pelicula_2]);
  });
  it("busqueda por nombre mal", () => {
    expect(muchasPelis.searchByName("IT")).to.not.deep.equal([pelicula_1]);
  });
});

const docu_1 = new Documental("leones", 1998, "animales", "amazon prime");
const docu_2 = new Documental(
  "tiroteo escolar",
  2022,
  "actualidad",
  "antena 3"
);
const muchosDocus = new DocumentalCollection(
  [docu_1, docu_2],
  "documentales mas vistos",
  2023,
  "realidad"
);

describe("pruebas de coleccion de documentales", () => {
  it("busqueda por genero bien", () => {
    expect(muchosDocus.searchByGenere("actualidad")).to.deep.equal([docu_2]);
  });
  it("busqueda por genero mal", () => {
    expect(muchosDocus.searchByGenere("actualidad")).to.not.deep.equal([
      docu_1,
    ]);
  });
  it("busqueda por fecha bien", () => {
    expect(muchosDocus.searchByDate(2022)).to.deep.equal([docu_2]);
  });
  it("busqueda por fecha mal", () => {
    expect(muchosDocus.searchByDate(2022)).to.not.deep.equal([docu_1]);
  });
  it("busqueda por canal bien", () => {
    expect(muchosDocus.searchCanal("antena 3")).to.deep.equal([docu_2]);
  });
  it("busqueda por canal mal", () => {
    expect(muchosDocus.searchCanal("antena 3")).to.not.deep.equal([docu_1]);
  });
  it("busqueda por nombre bien", () => {
    expect(muchosDocus.searchByName("tiroteo escolar")).to.deep.equal([docu_2]);
  });
  it("busqueda por nombre mal", () => {
    expect(muchosDocus.searchByName("tiroteo escolar")).to.not.deep.equal([
      docu_1,
    ]);
  });
});
