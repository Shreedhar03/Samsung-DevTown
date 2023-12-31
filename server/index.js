const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require("dotenv").config()
const { MONGO_URL, PORT } = process.env
const authRoute = require('./Routes/appRoute')

app.use(express.json())
app.use(cors())
app.use("/api/", authRoute)

mongoose.connect(MONGO_URL).then(() => {
    console.log('Connected to mongodb')
    app.listen(PORT, () => console.log('server running at ', PORT))
}).catch(err => {
    console.log("ERROR", err.message)
})

