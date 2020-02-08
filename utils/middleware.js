const requestLogger = (request, response, next) => {
    console.log('Method: ', request.method),
      console.log('Path: ', request.path),
      console.log('Body: ', request.body),
      console.log('-----')
    next()
  }
  const tokenHandler = (request,response,next) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      const token= authorization.substring(7)
      request.token=token
    }
    next()
  }

const errorHandler = (error, request, response, next) => {
    console.log(error)
    next(error)
  }
  module.exports = {
    requestLogger,
    tokenHandler,
    errorHandler,
  }