function hello(name) {
  if (!name) {
    throw new Error("name no puede ser vacío")
  }

  return `Hola ${name}`
}

module.exports = hello