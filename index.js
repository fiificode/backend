//how to create an express app with nodejs?
const express = require('express')
const cors = require('cors')
const { db } = require('./database/db')
const {readdirSync} = require('fs')

const app = express()

require('dotenv').config()


const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


//Routes
readdirSync('./routes').map((route) => app.use('/api/', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log("listening on port:", PORT)
    })
}

server()

