const x = "10"


// Check 10 === Number

if(!Number.isInteger(x)){
    throw new Error('O valor de x não é um número inteiro')
}

console.log('Continuando código...')