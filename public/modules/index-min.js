import{cfetch}from"./cfetch-min.js";import{navigate}from"./pages-min.js";import{description}from"./pop-min.js";let count=!0,c=!0;const db=firebase.firestore();document.body.addEventListener("click",description),document.body.addEventListener("click",navigate),document.querySelector(".burgerContainer").addEventListener("click",e=>{(e.target.classList.contains("line")||e.target.classList.contains("burgerContainer")||e.target.classList.contains("fa-arrow-right"))&&(document.querySelector(".side-nav").classList.toggle("toggle"),document.querySelectorAll(".category li").forEach(e=>{e.classList.toggle("toggle")}),c?document.querySelectorAll(".navigation i").forEach(e=>{e.style.display="none",c=!1}):(c=!0,document.querySelectorAll(".navigation i").forEach(e=>{e.style.display="flex"})))});const sn=document.querySelector(".side-nav"),n=document.querySelector(".navigation");function checkLength(){pageYOffset>250?(sn.style.background="white",n.style.background="white",sn.style.transition="all 0.5s linear",document.querySelectorAll(".side-nav p").forEach(e=>{e.style.color="black"}),document.querySelectorAll(".navigation p").forEach(e=>{e.style.color="black"}),document.querySelectorAll(".line").forEach(e=>{e.style.backgroundColor="black"}),document.querySelector(".account-modal").style.top=pageYOffset+"px",document.querySelector(".movieDesDisplay").style.top=pageYOffset+50+"px"):(sn.style.transition="all 0.8s linear",n.style.background="linear-gradient(to right, #243B55, #141E30);",sn.style.background="linear-gradient(to right, #243B55, #141E30);",document.querySelectorAll(".side-nav p").forEach(e=>{e.style.color="white"}),document.querySelectorAll(".line").forEach(e=>{e.style.backgroundColor="white"}),document.querySelectorAll(".navigation p").forEach(e=>{e.style.color="white"}),document.querySelector(".account-modal").style.top=pageYOffset+"px",document.querySelector(".movieDesDisplay").style.top=pageYOffset+50+"px")}window.onscroll=checkLength,window.onload=cfetch,firebase.auth().onAuthStateChanged((function(e){e?(document.querySelector("#name").value=e.displayName,document.querySelector(".picSelect img").src=e.photoURL,document.querySelector("#emailLink").value=e.email):window.location.replace("in")})),document.getElementById("search").addEventListener("keyup",()=>{if(""==document.getElementById("search").value){document.querySelector(".movieContainer").innerHTML="",contentful.createClient({space:"g83j5mjjg3ig",accessToken:"guJQMz5h39zhGLFemZudb_AUudM5d23tf0RkNehkPXY"}).sync({initial:!0}).then(e=>{e.entries.forEach(e=>{const t=e.fields;if(t.hasOwnProperty("videoLink")){const e=`\n            <img src=${t.image["en-US"].fields.file["en-US"].url} alt="">\n           <p class="title" >${t.title["en-US"]}  </p>\n           \n           <p id="description" style="display:none">\n             ${t.description["en-US"]}\n           </p>\n           <video src="${t.videoLink["en-US"]}"  controls style="width: 100%; height: auto; display:none"></video>\n          `,n=`<img src=${t.image["en-US"].fields.file["en-US"].url} alt=""> `,o=document.createElement("div"),i=document.createElement("div");i.className="previews",i.innerHTML=n,o.className="movie",o.innerHTML=e,document.querySelector(".movieContainer").append(o),document.querySelector(".slide").append(i)}})})}else{contentful.createClient({space:"g83j5mjjg3ig",accessToken:"guJQMz5h39zhGLFemZudb_AUudM5d23tf0RkNehkPXY"}).getEntries({content_type:"product","fields.title[match]":document.getElementById("search").value}).then(e=>{e.items.forEach(e=>{const t=e.fields;if(document.querySelector(".movieContainer").innerHTML="",t.hasOwnProperty("videoLink")){const e=`\n            <img src=${t.image.fields.file.url} alt="">\n           <p class="title" >${t.title} <a href=${t.downloadUrl} download><i class="fas fa-cloud-download-alt"></i></a> </p>\n           \n           <p id="description" style="display:none">\n             ${t.description["en-US"]}\n           </p>\n           <video src="${t.videoLink}"  controls style="width: 100%; height: auto; display:none"></video>\n          `,n=`<img src=${t.image.fields.file.url} alt=""> `,o=document.createElement("div"),i=document.createElement("div");i.className="previews",i.innerHTML=n,o.className="movie",o.innerHTML=e,document.querySelector(".movieContainer").append(o)}else{const e=`\n             <img src=${t.image.fields.file.url} alt="">\n            <p class="title" >${t.title} <a href=${t.downloadUrl} download><i class="fas fa-cloud-download-alt"></i></a> </p>\n            \n            <p id="description" style="display:none">\n              ${t.description}\n            </p>\n            <video src=""  controls style="width: 100%; height: auto; display:none"></video>\n            `,n=`<img src=${t.image.fields.file.url} alt=""> `,o=document.createElement("div"),i=document.createElement("div");i.className="previews",i.innerHTML=n,o.className="movie",o.innerHTML=e,document.querySelector(".movieContainer").append(o)}})}).catch(console.error)}}),console.log(process.env.SpaceID);