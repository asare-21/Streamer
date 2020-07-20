const express = require('express')
const app = express()
const contentful = require('contentful')
const { request } = require('express')
require('dotenv').config()
app.use('/',express.static(__dirname+'/'))
app.use('/home',express.static(__dirname+'/'))
app.use('/login',express.static(__dirname+'/in.html'))
app.use('/in',express.static(__dirname+'/in.html'))

//make request from contentful
app.get('/data',(request,response)=>{
    console.log(request.url)
    var client = contentful.createClient({
        space: process.env.spaceID,
        accessToken: process.env.ContentDeliveryApi
      })
      client.getEntries()
      .then((entry)=>{
        response.json({
            status:'sucess',
            data:entry
        })
        
      })
})

app.post('/data',(request,response)=>{
    let value= request.headers.body
    var client = contentful.createClient({
        space: process.env.spaceID,
        accessToken: process.env.ContentDeliveryApi
      })
      client.getEntries({
        content_type: 'product',
        'fields.title[match]': value
      }).then(res=>{
          response.json(res)
      })
})


app.listen(process.env.PORT || 3000)