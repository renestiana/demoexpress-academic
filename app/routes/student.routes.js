module.exports = (app) => {
    const student = require('../controllers/student.controller')
    const router = require('express').Router()
   
    router.get('/', student.getAllStudent)
    router.get('/:name', student.getStudentByName)
    
    app.use('/academic/student',router)
}