import {slide} from './slide.js'
import {Return} from './slide.js'
import {Fetch} from './fetch.js'
import {cfetch} from './cfectch.js'
import {navigate} from './pages.js'
import {description} from './pop.js'
import { verifyFunc } from './verify.js'

let count = true
let c = true
const db = firebase.firestore()
//deisplay descriptions
document.body.addEventListener('click', description)
document.body.addEventListener('click',navigate)

document.querySelector('.burgerContainer').addEventListener('click',(e)=> {
   
   if(e.target.classList.contains('line') || e.target.classList.contains('burgerContainer') ||e.target.classList.contains('fa-arrow-right')){
       document.querySelector('.side-nav').classList.toggle('toggle')
      //  document.querySelector('h5').classList.toggle('toggle')
       document.querySelectorAll('.category li').forEach(cat => {
           cat.classList.toggle('toggle')
       })
       //for thje icons
      if(c){
        document.querySelectorAll('.navigation i').forEach(i =>{
            i.style.display= 'none'
            c = false
        })
      }
      else{
        c = true
        document.querySelectorAll('.navigation i').forEach(i =>{
            i.style.display = 'flex'
        })
      }
   }
  
}
)
//making sure the side nav is always of lenght
const sn = document.querySelector('.side-nav')
const n = document.querySelector('.navigation')
    function checkLength (){
       if(pageYOffset > 250){
           sn.style.background = `white`
           n.style.background = `white`
           sn.style.transition = 'all 0.5s linear'
           document.querySelectorAll('.side-nav p').forEach(p => {
             p.style.color = 'black'
           })
           document.querySelectorAll('.navigation p').forEach(p => {
             p.style.color = 'black'
           })
           document.querySelectorAll('.line').forEach(line => {
             line.style.backgroundColor = 'black'
           })
           document.querySelector('.account-modal').style.top = `${pageYOffset}px`
           document.querySelector('.movieDesDisplay').style.top = `${pageYOffset - 100}px`
    } 
    else{
      sn.style.transition = 'all 0.8s linear'
      n.style.background = `linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))`
      sn.style.background = `linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))`
      document.querySelectorAll('.side-nav p').forEach(p => {
        p.style.color = 'white'
      })
      document.querySelectorAll('.line').forEach(line => {
        line.style.backgroundColor = 'white'
      })
      document.querySelectorAll('.navigation p').forEach(p => {
        p.style.color = 'white'
      })
      document.querySelector('.account-modal').style.top = `${pageYOffset}px`
      document.querySelector('.movieDesDisplay').style.top = `${pageYOffset - 100}px`
    }
    }
   window.onscroll = checkLength  

window.onload = cfetch



firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.querySelector('#name').value = user.displayName
      document.querySelector('.picSelect img').src = user.photoURL
      document.querySelector('#emailLink').value = user.email
    } else {
      // No user is signed in.
      window.location.replace('in.html')
    }
  });
  

  document.getElementById('search').addEventListener('keyup',()=>{
    // console.log('Running')

    if(document.getElementById('search').value == ''){
      document.querySelector('.movieContainer').innerHTML = ''
      var client = contentful.createClient({
        space:'g83j5mjjg3ig',
        accessToken:'guJQMz5h39zhGLFemZudb_AUudM5d23tf0RkNehkPXY'
      })
      client.sync({initial: true})
      .then((response) => {
        const r = response.entries
      
        r.forEach(r => {
            const R = r.fields
          if(R.hasOwnProperty('videoLink')){
            
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
        })
      })

    }


else{
    const client = contentful.createClient({
     space:'g83j5mjjg3ig',
    accessToken:'guJQMz5h39zhGLFemZudb_AUudM5d23tf0RkNehkPXY'
      })
      
      client.getEntries({
        content_type: 'product',
        'fields.title[match]': document.getElementById('search').value
      })
      .then((response) => {
        const r = response.items
        // console.log(response.items)

        r.forEach(r => {
            const R = r.fields
            // console.log(R)
            document.querySelector('.movieContainer').innerHTML = ''
          if(R.hasOwnProperty('videoLink')){
            
            const temp = `
            <img src=${R.image.fields.file.url} alt="">
           <p class="title" >${R.title} <a href=${R.downloadUrl} download><i class="fas fa-cloud-download-alt"></i></a> </p>
           
           <p id="description" style="display:none">
             ${R.description['en-US']}
           </p>
           <video src="${R.videoLink}"  controls style="width: 100%; height: auto; display:none"></video>
          `
          const tem = `<img src=${R.image.fields.file.url} alt=""> `
          const d = document.createElement('div')
          const slide = document.createElement('div')
          slide.className = 'previews'
          slide.innerHTML = tem
          d.className = 'movie'
          d.innerHTML = temp
          document.querySelector('.movieContainer').append(d)
        }
        else{
           const temp = `
             <img src=${R.image.fields.file.url} alt="">
            <p class="title" >${R.title} <a href=${R.downloadUrl} download><i class="fas fa-cloud-download-alt"></i></a> </p>
            
            <p id="description" style="display:none">
              ${R.description}
            </p>
            <video src=""  controls style="width: 100%; height: auto; display:none"></video>
            `
            const tem = `<img src=${R.image.fields.file.url} alt=""> `
            const d = document.createElement('div')
            const slide = document.createElement('div')
            slide.className = 'previews'
            slide.innerHTML = tem
            d.className = 'movie'
            d.innerHTML = temp
            document.querySelector('.movieContainer').append(d)
            // document.querySelector('.slide').append(slide)
          }
        })
      })
      .catch(console.error)
    }
})

