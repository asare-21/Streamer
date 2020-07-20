export const cfetch = ()=>{
    fetch('/data').then(response=>response.json())
.then(e=>{
    
        e.data.items.forEach(e=>{
            const n = e;
            if (n.fields.hasOwnProperty("background")){

            }
          else { if(!n.fields.hasOwnProperty('description') ){
              
                const e = ` <img src=${n.fields.image.fields.file.url} alt="">
                <p class="t">${n.fields.title}</p>`
                const div = document.createElement('div')
                div.className = 'previews'
                div.innerHTML = e
                document.querySelector(".slide").append(div)
            }
            else{
            
            if (n.hasOwnProperty("videoLink")) {
                console.log(n)
                const e = `\n            <img src=${n.fields.image.fields.file.url} alt="">\n           <p class="title" >${n.title["en-US"]}  </p>\n           \n           <p id="description" style="display:none">\n             ${n.fields.description}\n           </p>\n           <video src="${n.fields.videoLink}"  controls style="width: 100%; height: auto; display:none"></video>\n          `
                  , i = `<img src=${n.fields.image.fields.file.url} alt=""> `
                  , t = document.createElement("div")
                  , s = document.createElement("div");
                s.className = "previews",
                s.innerHTML = i,
                t.className = "movie",
                t.innerHTML = e,
                document.querySelector(".movieContainer").append(t)
                
            } else {
                const e = `\n             <img src=${n.fields.image.fields.file.url} alt="">\n            <p class="title" >${n.fields.title}  </p>\n            \n            <p id="description" style="display:none">\n              ${n.fields.description}\n            </p>\n            <video src=""  controls style="width: 100%; height: auto; display:none"></video>\n            `
                  , i = `<img src=${n.fields.image.fields.file.url} alt=""> `
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
    }
    )
}
