const fs = require('fs')

const old_name_file = 'arquivo.txt'
const new_name_file = 'file.txt'

fs.rename(old_name_file,new_name_file,(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('Arquivo renomeado!'+` O arquivo ${old_name_file} foi renomeado para ${new_name_file}`)
})