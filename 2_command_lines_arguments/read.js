// Podemos passar argumentos via CMD - Com "node command-lines-arguments/read.js name=julio"

const arg = process.argv.slice(2)

const dados = {
    name: arg[0].split("=")[1],
    age: arg[1].split("=")[1],
    gender: arg[2].split("=")[1],

}

console.log(dados)
