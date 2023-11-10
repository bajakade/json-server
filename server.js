require('dotenv').config();
const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/api', router)
server.use(router)

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log('JSON Server is running on port ' + PORT)
})