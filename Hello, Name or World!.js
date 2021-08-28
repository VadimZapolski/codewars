function hello(name) {

  if(!name) return 'Hello, World!'
  if(name) {
    return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
  }
}
