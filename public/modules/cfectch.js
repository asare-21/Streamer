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
            // console.log(R.videoLink['en-US'])
            // console.log(R.video['en-US'].fields.file['en-US'].url)
       
          // if(R.title['en-US'] == 'Triple Frontier'){
          //   document.getElementById('video').src = R.video['en-US'].fields.file['en-US'].url 
          // }
          // console.log(R.videoLink['en-US'])
          if(R.hasOwnProperty('background')){

          }
         else {if(R.hasOwnProperty('videoLink')){
            
            const temp = `
            <img src=${R.image['en-US'].fields.file['en-US'].url} alt="">
           <p class="title" >${R.title['en-US']} <a href=${R.downloadUrl} download><i class="fas fa-cloud-download-alt"></i></a> </p>
           
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
            <p class="title" >${R.title['en-US']} <a href=${R.downloadUrl} download><i class="fas fa-cloud-download-alt"></i></a> </p>
            
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

// export const Firebase = () => {

// }
// const storageRef = firebase.storage().ref().child('Videos/')

// storageRef.listAll().then(function(url) {
//   // `url` is the download URL for 'images/stars.jpg'
//   console.log(url.items[0].name)
//   const v = firebase.storage().ref().child(`Videos/${url.items[0].name}`)
//   v.getDownloadURL().then((url)=>{
//     // console.log(url)
//   })
//   // This can be downloaded directly:
//   // var xhr = new XMLHttpRequest();
//   // xhr.responseType = 'blob';
//   // xhr.onload = function(event) {
//   //   var blob = xhr.response;
//   // };
//   // xhr.open('GET', url);
//   // xhr.send();

//   // // Or inserted into an <img> element:
//   // var img = document.getElementById('myimg');
//   // img.src = url;
// }).catch(function(error) {
//   // Handle any errors
// });
