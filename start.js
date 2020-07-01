const express = require('express')
const app = express()
const port = 3000
const dotenv = require('dotenv')
require('dotenv').config()
app.use(express.static('public'))

var contentful = require('contentful');

var client = contentful.createClient({
  space: process.env.SpaceID,
  accessToken:process.env.ContentDeliveryApi
});


app.listen(port, () => console.log(`Listening at http://localhost:${port}`))