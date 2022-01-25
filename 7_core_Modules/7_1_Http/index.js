const http = require('http')

const port = 3000

const server = http.createServer((req, res)=>{
    res.write('Hi Http')
    res.end()
})

server.listen(port, ()=>{
    console.log(`Servidor: ${port} rodando`)
})