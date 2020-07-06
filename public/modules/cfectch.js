export const cfetch = () =>{
    var client = contentful.createClient({
        space:process.env.SpaceID,
        accessToken:process.env.ContentDeliveryApi
      })
      client.sync({initial: true})
      .then((response) => {
        const r = response.entries
        // console.log(r)
        r.forEach(r => {
            const R = r.fields

          if(R.hasOwnProperty('background')){

          }
         else {if(R.hasOwnProperty('videoLink')){
            
            const temp = `
            <img src=${R.image['en-US'].fields.file['en-US'].url} alt="">
           <p class="title" >${R.title['en-US']}  </p>
           
           <p id="description" style="display:none">
             ${R.description['en-US']}
           </p>
           <video src="${R.videoLink['en-US']}"  controls style="width: 100%; height: auto; display:none"></video>
          `
          const tem = `<img src=${R.image['en-US'].fields.file['en-US'].url} alt=""> `
          const d = document.createElement('div')
          const slide = document.createElement('div')
          slide.className = 'previews'
          slide.innerHTML = tem
          d.className = 'movie'
          d.innerHTML = temp
          document.querySelector('.movieContainer').append(d)
          document.querySelector('.slide').append(slide)
          // console.log(d)

        }
        else{
           const temp = `
             <img src=${R.image['en-US'].fields.file['en-US'].url} alt="">
            <p class="title" >${R.title['en-US']}  </p>
            
            <p id="description" style="display:none">
              ${R.description['en-US']}
            </p>
            <video src=""  controls style="width: 100%; height: auto; display:none"></video>
            `
            const tem = `<img src=${R.image['en-US'].fields.file['en-US'].url} alt=""> `
            const d = document.createElement('div')
            const slide = document.createElement('div')
            slide.className = 'previews'
            slide.innerHTML = tem
            d.className = 'movie'
            d.innerHTML = temp
            document.querySelector('.movieContainer').append(d)
            document.querySelector('.slide').append(slide)
          }}
        })
      })


}


