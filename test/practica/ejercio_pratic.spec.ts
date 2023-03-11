import "mocha";
import { expect } from "chai";
import { Collectable } from "../../src/practica/collectable";
import { Searchable } from "../../src/practica/searchable";
import { SearchableCollection } from "../../src/index";
import { NumericSearchableCollection} from "../../src/practica/ejercio_practic"
import { StringSearchableCollection } from "../../src/practica/ejercio_practic";

const numeros = new NumericSearchableCollection([1,2,3,1,2,4])

describe("pruebas de NumericSearchableCollection: ", () => {
  it("prueba getItems bien", () => {
    expect(numeros.getItem(0)).to.be.equal(1)
  })
  it("prueba getItems mal", () => {
    expect(numeros.getItem(0)).to.not.be.equal(6)
  })
  it("prueba getNumberOfItems bien", () => {
    expect(numeros.getNumberOfItems()).to.be.equal(6)
  })
  it("prueba getNumberOfItems mal", () => {
    expect(numeros.getNumberOfItems()).to.not.be.equal(1)
  })
  it("prueba search bien", () => {
    expect(numeros.search(1)).to.deep.equal([1,1])
  })
  it("prueba search mal", () => {
    expect(numeros.search(1)).to.not.deep.equal([1,1,1,1])
  })
  it("prueba remove bien", () => {
    expect(numeros.removeItem(1)).to.be.equal(2)
  })
  it("prueba remove mal", () => {
    expect(numeros.removeItem(1)).to.not.be.equal(1)
  })
  it("prueba add bien", () => {
    expect(numeros.addItem(5))
  })
})

const strings = new StringSearchableCollection(["hola", "paola", "cereza"])

describe("pruebas de StringSearchableCollection: ", () => {
  it("prueba getItems bien", () => {
    expect(strings.getItem(0)).to.be.equal("hola")
  })
  it("prueba getItems mal", () => {
    expect(numeros.getItem(0)).to.not.be.equal("adios")
  })
  it("prueba getNumberOfItems bien", () => {
    expect(strings.getNumberOfItems()).to.be.equal(3)
  })
  it("prueba getNumberOfItems mal", () => {
    expect(strings.getNumberOfItems()).to.not.be.equal(4)
  })
  it("prueba search bien", () => {
    expect(strings.search("ola")).to.deep.equal(["hola", "paola"])
  })
  it("prueba search mal", () => {
    expect(strings.search("ola")).to.not.deep.equal(["paola"])
  })
  it("prueba remove bien", () => {
    expect(strings.removeItem(0)).to.be.equal("hola")
  })
  it("prueba remove mal", () => {
    expect(strings.removeItem(1)).to.not.be.equal("hola")
  })
  it("prueba add bien", () => {
    expect(strings.addItem("caramelo"))
  })
})










// describe("index test", () => {
//   it("add(1,4,5) == 10", () => {
//     expect(add(1, 4)).to.be.equal(5);
//   });
//   it("add(1,4,5) == 10", () => {
//     expect(add(9, -2)).to.be.equal(7);
//   });
//   it("add(1,4,5) == 10", () => {
//     expect(add(1, 4)).to.not.be.equal(1);
//   });
//   it("add(1,4,5) == 10", () => {
//     expect(add(1, 4)).to.be.greaterThan(1);
//   });
//   it("add(1,4,5) == 10", () => {
//     expect(add(1, 4)).to.be.lessThan(100000);
//   });
// });
