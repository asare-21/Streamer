export const cfetch=()=>{fetch("/data").then(e=>e.json()).then(e=>{e.data.items.forEach(e=>{const i=e;if(i.fields.hasOwnProperty("background"));else if(i.fields.hasOwnProperty("description"))if(i.hasOwnProperty("videoLink")){console.log(i);const e=`\n            <img src=${i.fields.image.fields.file.url} alt="">\n           <p class="title" >${i.title["en-US"]}  </p>\n           \n           <p id="description" style="display:none">\n             ${i.fields.description}\n           </p>\n           <video src="${i.fields.videoLink}"  controls style="width: 100%; height: auto; display:none"></video>\n          `,n=`<img src=${i.fields.image.fields.file.url} alt=""> `,s=document.createElement("div"),t=document.createElement("div");t.className="previews",t.innerHTML=n,s.className="movie",s.innerHTML=e,document.querySelector(".movieContainer").append(s)}else{const e=`\n             <img src=${i.fields.image.fields.file.url} alt="">\n            <p class="title" >${i.fields.title}  </p>\n            \n            <p id="description" style="display:none">\n              ${i.fields.description}\n            </p>\n            <video src=""  controls style="width: 100%; height: auto; display:none"></video>\n            `,n=`<img src=${i.fields.image.fields.file.url} alt=""> `,s=document.createElement("div"),t=document.createElement("div");t.className="previews",t.innerHTML=n,s.className="movie",s.innerHTML=e,document.querySelector(".movieContainer").append(s)}else{const e=` <img src=${i.fields.image.fields.file.url} alt="">\n                <p class="t">${i.fields.title}</p>`,n=document.createElement("div");n.className="previews",n.innerHTML=e,document.querySelector(".slide").append(n)}})})};