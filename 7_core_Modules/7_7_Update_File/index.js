const fs = require('fs')
const http = require('http')
const url = require('url')

const port = 3000

const server = http.createServer((req, res)=>{
        
    let urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    } else {

        let nameNewLine = name + ',\r\n'

        fs.appendFile('file.txt', nameNewLine, (err,data)=>{
            res.writeHead(302,{
                Location: '/',
            })
        return res.end()
        })
    }   
})

server.listen(port, ()=>{
    console.log(`Servidor: ${port} rodando`)
})

//Modo para estudos