// document.querySelectorAll('.movie').forEach(movie => {
//     movie.addEventListener('click', description )
// })

export const description = (e) =>{
    console.log('Running')
    let store

    if(e.target.className == 'far fa-window-close'){
        document.querySelector('.movieDesDisplay').style.display = 'none'
    }

  else{
  if(e.target.parentElement.className == 'movie') { store=  e.target.parentElement.querySelector('#description').textContent 
    document.querySelector('.movieDesDisplay #l').textContent = store
    document.querySelector('.movieDesDisplay').style.display = 'flex'}
}   
}