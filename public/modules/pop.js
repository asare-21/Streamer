// document.querySelectorAll('.movie').forEach(movie => {
//     movie.addEventListener('click', description )
// })

export const description = (e) =>{
    // console.log('Running')
    let store
    let title

    if(e.target.className == 'far fa-window-close'){
        document.querySelector('.movieDesDisplay').style.display = 'none'
        // console.log('closed')
      const vid = e.target.parentElement.querySelector('video')
      vid.pause()
      // localStorage.setItem('VideoLink', vide)
    }

  else{
  if(e.target.parentElement.className == 'movie') {
    store=  e.target.parentElement.querySelector('#description').textContent 
    title=  e.target.parentElement.querySelector('.title').textContent 
////////  code for streaming the video goes here
    
    // console.log(e.target.parentElement.querySelector('video'))
      if(e.target.parentElement.querySelector('video').src !== '' ){
        document.querySelector('.video').src = e.target.parentElement.querySelector('video').src
      }

    document.querySelector('.movieDesDisplay #l').textContent = store
    document.querySelector('.movieDesDisplay #title').textContent = title
    document.querySelector('.movieDesDisplay').style.display = 'flex'
}
}   
}
