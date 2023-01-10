const http = require('http')
const port = 4004

const routes = {
  '/': 'Curso de node.js',
  '/books': 'Books page',
  '/author': 'Author page',
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(routes[req.url] || 'Not found!')
})

server.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}`)
})
