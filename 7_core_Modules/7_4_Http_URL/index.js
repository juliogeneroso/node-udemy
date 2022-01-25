const http = require('http')
const url = require('url')

const port = 3000

const server = http.createServer((req, res)=>{

    let urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')

    if(!name)
        res.end(
            '<h1>Preencha seu nome!</h1><br><form method="get"><input type="text" name="name"><input type="submit" value="Submit"></form>'
            )
    else
        res.end(
            `<h1>Seja Bem Vindo ${name}</h1>`
            )

})

server.listen(port, ()=>{
    console.log(`Servidor: ${port} rodando`)
})

//Sem UTF-8
//Modo para estudos