import {slide} from './slide.js'
import {Return} from './slide.js'
import {Fetch} from './fetch.js'
import {cfetch} from './cfectch.js'
require('dotenv').config()
const left = document.querySelector('.left')
const right = document.querySelector('.right')
let count = true
document.querySelector('.burgerContainer').addEventListener('click',(e)=> {

   if(e.target.classList.contains('line') || e.target.classList.contains('burgerContainer') ||e.target.classList.contains('fa-arrow-right')){
       document.querySelector('.side-nav').classList.toggle('toggle')

       if(screen.width < 600){
        document.querySelector('.burgerContainer').classList.toggle('toggle')
       }

       document.querySelectorAll('.line').forEach(line =>{
           line.classList.toggle('animate')
       })
       document.querySelectorAll('p').forEach(p => {
           p.classList.toggle('show')
       })
       const l = document.querySelector('.burgerContainer')
       if(count){
           l.innerHTML = ` <div class="line"></div>
           <div class="line"></div>
           <div class="line"></div>`
           count = false
       }
       else{
        l.innerHTML = `<i class="fas fa-arrow-right"></i>`
           count = true
       }
   }
}
)
//making sure the side nav is always of lenght
const sn = document.querySelector('.side-nav')
    function checkLength (){
       if(pageYOffset > 100){
           sn.style.height = `${pageYOffset+10}vh`
    } 
    else{
        sn.style.height = `${100}vh`

    }
    }
   onscroll = checkLength

window.onload = cfetch
right.addEventListener('click',slide)
left.addEventListener('click',Return)