require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./src/routes')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use('/search', routes)
app.listen(process.env.APP_PORT, () => {
  console.log(`Server listening on port ${process.env.APP_PORT}`)
})

module.exports = app
