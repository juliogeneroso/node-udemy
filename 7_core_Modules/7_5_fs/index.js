const fs = require('fs')
const http = require('http')

const port = 3000

const server = http.createServer((req, res)=>{
        fs.readFile('mensagem.html', (err, data) => {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        return res.end()
    })
})

server.listen(port, ()=>{
    console.log(`Servidor: ${port} rodando`)
})

//Modo para estudos