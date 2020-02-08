const config = require('./utils/config')
const express = require('express')
const App = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const noteRouter = require('./controllers/notes')
const middleware = require('./utils/middleware')

const mongooseUrl = config.dburl

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(mongooseUrl)
    .then(() => {
        console.log('connected to MongoDB')
    }).catch((error) => {
        console.log('error connection to MongoDB:', error.message)
    })

App.use(cors())
App.use(bodyParser.json()) 
App.use(middleware.tokenHandler)
App.use(middleware.requestLogger)
App.use('/api/notes', noteRouter)
App.use(middleware.errorHandler)

module.exports=App