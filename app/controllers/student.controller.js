const db = require('../models')
const Student = db.student

exports.getAllStudent = (req, res) => {
    Student.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error while getting all students."
            })
        });
}

exports.getStudentByName = (req, res) => {
    const nameQuery = req.params.name

    Student.find({
        "name": nameQuery
    })
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error while retrieving student ."
            })
        });
}