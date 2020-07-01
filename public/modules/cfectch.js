// 
export const cfetch = () =>{
    var client = contentful.createClient({
        space:'g83j5mjjg3ig',
        accessToken:'guJQMz5h39zhGLFemZudb_AUudM5d23tf0RkNehkPXY'
      })
      client.sync({initial: true})
      .then((response) => {
        const r = response.entries
        // console.log(r)
        r.forEach(r => {
            const R = r.fields
            // console.log(R)
            const temp = `
            
            <img src=${R.image['en-US'].fields.file['en-US'].url} alt="">
            <p class="title" >${R.title['en-US']} <a href=${R.downloadUrl} download><i class="fas fa-cloud-download-alt"></i></a> </p>
        
            `
            const tem = `
            
            <img src=${R.image['en-US'].fields.file['en-US'].url} alt="">
           
        
            `
            const d = document.createElement('div')
            const slide = document.createElement('div')
            slide.className = 'previews'
            slide.innerHTML = tem
            d.className = 'movie'
            d.innerHTML = temp
            document.querySelector('.movieContainer').append(d)
            document.querySelector('.slide').append(slide)
        })
      })


}