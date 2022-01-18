// Podemos passar argumentos via CMD - Com "node argumentos-linha-comando/leitura.js nome=julio"

const arg = process.argv.slice(2)

const dados = {
    nome: arg[0].split("=")[1],
    idade: arg[1].split("=")[1],
    sexo: arg[2].split("=")[1],

}

console.log(dados)
