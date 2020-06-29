document.querySelector('.burgerContainer').addEventListener('click',(e)=> {
   if(e.target.classList.contains('line')){
       document.querySelector('.side-nav').classList.toggle('toggle')
   }
}
)