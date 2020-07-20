const express = require('express')
const app = express()

app.use('/',express.static('./index.html'))
app.use('/home',express.static('./index.html'))
app.use('/login',express.static('./in.html'))


app.listen(process.env.PORT || 3000)