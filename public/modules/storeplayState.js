export const storePlayState = () => {
    const duration = video.currentTime
    const title = document.getElementById('video')
    const Title = title.parentElement.querySelector('#title').textContent
    localStorage.setItem(Title,duration)
}

export const getPlayState = ()=>{
    const title = document.getElementById('video')
    const Title = title.parentElement.querySelector('#title').textContent
    const time = localStorage.getItem(Title)
    video.currentTime = time
}