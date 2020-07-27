export const cfetch = ()=>{
    fetch('/data').then(response=>response.json())
.then(e=>{
    
        e.data.items.forEach(e=>{
            const n = e;
            if (n.fields.hasOwnProperty("background")){

            }
          else {
             if(!n.fields.hasOwnProperty('description') ){
              
                const e = ` <img data-src=${n.fields.image.fields.file.url} alt="" data-lazy-load >
                <p class="t">${n.fields.title}</p>`
                const div = document.createElement('div')
                div.className = 'previews'
                div.innerHTML = e
                document.querySelector(".slide").append(div)
            }
            else{
            // console.log('here')
            if (n.hasOwnProperty("videoLink")) {
                
                const e = `\n            <img data-src=${n.fields.image.fields.file.url} alt="" data-lazy-load >\n           <p class="title" >${n.title["en-US"]}  </p>\n           \n           <p id="description" style="display:none">\n             ${n.fields.description}\n           </p>\n           <video data-src=${n.fields.videoLink}  controls style="width: 100%; height: auto; display:none"></video>\n          `
                  , i = `<img data-src=${n.fields.image.fields.file.url} alt="" data-lazy-load > `
                  , t = document.createElement("div")
                  , s = document.createElement("div");
                s.className = "previews",
                s.innerHTML = i,
                t.className = "movie",
                t.innerHTML = e,
                document.querySelector(".movieContainer").append(t)
                // console.log(n.fields.videoLink)
                
            } else {
              // console.log('Here too')
                const e = `\n             <img data-src=${n.fields.image.fields.file.url} alt="" data-lazy-load >\n            <p class="title" >${n.fields.title}  </p>\n            \n            <p id="description" style="display:none">\n              ${n.fields.description}\n            </p>\n            <video data-src=${n.fields.videoLink}  controls style="width: 100%; height: auto; display:none"></video>\n            `
                  , i = `<img data-src=${n.fields.image.fields.file.url} alt="" data-lazy-load > `
                  , t = document.createElement("div")
                  , s = document.createElement("div");
                s.className = "previews",
                s.innerHTML = i,
                t.className = "movie",
                t.innerHTML = e,
                document.querySelector(".movieContainer").append(t)
            }
 }       }
}
        )

        //intersection observer
const images = document.querySelectorAll('[data-src]')
// console.log(images)
const imgOptions = {}
const observer = new IntersectionObserver((entries,observer)=>{
  document.querySelector('.loader').classList.add('show')
  document.body.style = 'overflow-y: scroll'
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return
    else{
      preloadImage(entry.target)
      observer.unobserve(entry.target)
    }
  })
},imgOptions)

function preloadImage(image){
  const src = image.getAttribute('data-src')
  if(!src) return
  else{
    image.src = src
  }
  // console.log('Run')
}
images.forEach(image=>{
  observer.observe(image)
})


    }
    )
}
