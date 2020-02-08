const Note = require('../models/note')
const noteRouter= require('express').Router()

noteRouter.get('/', async (request, response, next)=>{
    try {
        const notes= await Note.find({})
        response.status(201).json(notes)
    } catch (error) {
        next(error)
    }
})
noteRouter.post('/', async (request, response, next) =>{
    const body = request.body
    try {
        const note =new Note({
            content:body.notefield
        }) 
        const savedNote=await note.save()
        response.status(201).json(savedNote.toJSON())
    } catch (error) {
        next(error)
    }
})
noteRouter.delete('/:id', async (request, response, next) => {
    try {
      await Note.findByIdAndDelete(request.params.id)
      response.status(200)
    } catch (error) {
        next(error)
    }
})
module.exports= noteRouter