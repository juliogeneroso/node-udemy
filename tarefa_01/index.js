const chalck = require('chalk')
const inquirer = require('inquirer')

inquirer.prompt([
    {
        name:'name', 
        message:'Qual seu nome?'
    },
    {
        name:'age', 
        message:'Qual sua idade?'
    }
])
.then((answers)=>{
    //console.log(answers)
    if(!answers.name || !answers.age)
        throw new Error('O nome e a idade são obrigatórios!')

    console.log(chalck.bgYellow.black(`O nome é: ${answers.name} e a idade é: ${parseInt(answers.age)}`))
})
.catch((err)=>{console.log(`Error:  ${err}`)})