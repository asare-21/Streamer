require('dotenv').config()

export const cfetch = () =>{
    var client = contentful.createClient({
        space: process.env.SpaceID,
        accessToken: process.env.ContentDeliveryApi
      })
      client.sync({initial: true})
      .then((response) => {
        console.log(response.entries)
        console.log(response.assets)
      })
}