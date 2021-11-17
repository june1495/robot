const hello = require("./hello")

beforeAll(() => {
  console.log("beforeAll se ejecuta una vez al principaio")
})

beforeEach(() => {
  console.log(" beforeEach se ejecuta antes de cada prueba")
})

afterEach(() => {
  console.log("afterEach se ejecuta después de cada prueba")
})

afterAll(() => {
  console.log("afterAll se ejecuta una vez al final")
})

describe("hola", () => {
  test("should return a string that contains ...", () => {
    // preparación
  
    // ejecutar el código que se va a probar
  
    // verificaciones (assertions)
    expect(1+3).toBe(4)
    expect("hola").toBe("hola")
    expect({}).not.toBe({})
    expect([1, 2, 3]).toEqual([1, 2, 3])
   
    expect(null).toBeNull()
    expect("").not.toBeNull()
  })

  test("retorna un saludo", () => {
    expect(() => hello("Pedro")).not.toThrow()
    expect(hello("Pedro")).toBe("Hola Pedro")
    expect(hello("Maria")).toBe("Hola Maria")
  })

  test("retorna un saludo con números", () => {
    expect(hello(5)).toBe("Hola 5")
  })

  test("genera un error si se el pasa un argumento vacío", () => {
    expect(() => hello()).toThrow(Error)
    expect(() => hello("")).toThrow(Error)
  })
})

// 1. Lo que puede fallar (ejemplo trivial)
// 2. Alternativas que no deberían fallar
// 3. Edge cases (casos borde) - casos en los extremos