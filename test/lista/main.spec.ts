import "mocha";
import { expect } from "chai";
import { lista } from "../../src/lista/main";

const prueba = new lista([1, 2, 3, 4]);
const prueba_2 = new lista(["hola", "paola", "rey hielo"]);

describe("pruebas de la clase lista", () => {
  it("prueba de append bien", () => {
    expect(
      prueba.append(new lista([1, 2, 3, 4]), new lista([5, 6, 7]))
    ).to.deep.equal(new lista([1, 2, 3, 4, 5, 6, 7]));
  });
  it("prueba de append mal", () => {
    expect(
      prueba.append(new lista([1, 2, 3, 4]), new lista([5, 6, 7]))
    ).to.not.deep.equal(new lista([1, 2, 4, 5, 6, 7]));
  });
  it("prueba de filter  bien", () => {
    let test = prueba.filter((element) => {
      const test = new lista([""]);
      for (let i = 0; i < prueba.lenght(); i++) {
        if (element[i] % 2) {
          test.addElement("impar");
        } else {
          test.addElement("par");
        }
      }
      return test;
    });
    expect(test).to.deep.equal(new lista(["", "impar", "par", "impar", "par"]));
  });
  it("prueba de filter mal", () => {
    let test = prueba.filter((element) => {
      const test = new lista([""]);
      for (let i = 0; i < prueba.lenght(); i++) {
        if (element[i] % 2) {
          test.addElement("impar");
        } else {
          test.addElement("par");
        }
      }
      return test;
    });
    expect(test).to.not.deep.equal(
      new lista(["", "par", "impar", "par", "impar"])
    );
  });
  it("prueba de reverse bien", () => {
    const testeo = new lista([1, 2, 3, 4]);
    testeo.reverse()
    expect(testeo).to.deep.equal(new lista([4, 3, 2, 1]));
  });
  it("prueba de reverse mal", () => {
    const testeo = new lista([1, 2, 3, 4]);
    testeo.reverse()
    expect(testeo).to.not.deep.equal(new lista([4, 3, 2]));
  });
  it("prueba de lenght bien", () => {
    expect(prueba.lenght()).to.be.equal(4);
  });
  it("prueba de lenght mal", () => {
    expect(prueba.lenght()).to.not.be.equal(9);
  });
  it("prueba de map bien", () => {
    const test = new lista([1,2,3,4])
    test.map(element => {
      for(let i = 0; i < prueba.lenght(); i++){
        element[i] = element[i] + 2
      }
    })
    expect(test).to.deep.equal(new lista([3,4,5,6]));
  });
  it("prueba de map mal", () => {
    const test = new lista([1,2,3,4])
    test.map(element => {
      for(let i = 0; i < prueba.lenght(); i++){
        element[i] = element[i] + 2
      }
    })
    expect(test).to.not.deep.equal(new lista([3,5,6]));
  });
  it("prueba de reduce bien", () => {
    const test = new lista([1,2,3,4])
    let valorInicial: number = 0
    let suma = prueba.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      valorInicial
    );
    expect(suma).to.be.equal(10)
  });
  it("prueba de reduce mal", () => {
    const test = new lista([1,2,3,4])
    let valorInicial: number = 0
    let suma = prueba.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      valorInicial
    );
    expect(suma).to.not.be.equal(100)
  });
  it("prueba de forEach bien", () => {
    const test = new lista([1,2,3,4])
    test.forEach((elemento) => {
      elemento = elemento + 2;
      return elemento;
    });
    expect(test).to.deep.equal(new lista([3,4,5,6]))
  });
  it("prueba de forEach mal", () => {
    const test = new lista([1,2,3,4])
    test.forEach((elemento) => {
      elemento = elemento + 2;
      return elemento;
    });
    expect(test).to.not.deep.equal(new lista([3,5,6]))
  });
  it("prueba de concatenate  bien", () => {
    prueba.concatenate(new lista([5, 6, 7]));
    expect(prueba).to.deep.equal(new lista([1, 2, 3, 4, 5, 6, 7]));
  });
  it("prueba de concatenate mal", () => {
    prueba_2.concatenate(new lista(["hola"]));
    expect(prueba_2).to.not.deep.equal(new lista(["hola"]));
  });
});
