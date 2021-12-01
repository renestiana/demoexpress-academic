const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const db = require('./app/models')
db.mongoose
    .connect(db.url, {})
    .then(() => {
        console.log(`Database connected!`);
    }).catch((err) => {
        console.log(`Can't connect to DB!`, err)
        process.exit()
    });

app.get('/',(req, res) => {
    res.json({
        message: "welcome!"
    })
})

require('./app/routes/student.routes')(app)

const PORT = 8000
app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`)
})