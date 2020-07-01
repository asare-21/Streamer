// console.log(process.env.S )
require('dotenv').config()
const fs = require('fs')
fs.writeFileSync('./.env', `SpaceID=${process.env.SpaceID},

ContentDeliveryApi=${process.env.ContentDeliveryApi}`)
