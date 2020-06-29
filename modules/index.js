import {slide} from './slide.js'
import {Return} from './slide.js'
const left = document.querySelector('.left')
const right = document.querySelector('.right')
let count = true
document.querySelector('.burgerContainer').addEventListener('click',(e)=> {

   if(e.target.classList.contains('line') || e.target.classList.contains('burgerContainer') ||e.target.classList.contains('fas')){
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
           l.innerHTML = `<i class="fas fa-arrow-right"></i>`
           count = false
       }
       else{
           l.innerHTML = ` <div class="line"></div>
           <div class="line"></div>
           <div class="line"></div>`
           count = true
       }
   }
}
)
right.addEventListener('click',slide)
left.addEventListener('click',Return)