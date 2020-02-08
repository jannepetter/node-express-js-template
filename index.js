const http = require('http')
const config = require('./utils/config')
const App=require('./app')

const server=http.createServer(App)
const PORT = config.PORT
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
}) 