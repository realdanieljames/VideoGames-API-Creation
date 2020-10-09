
const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express();
require('dotenv').config()


const videoGames = require('./routes/gameRoutes');


const port = process.env.PORT || 3000;
// general middleware
app.use(morgan('dev'))

//middleware for POST requests
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//game routes midddleware
app.use('/api/v1/games', videoGames);
// console.log(videoGames)



app.listen(port, () => {
    console.log(`Listening on port ${port}`)

})
