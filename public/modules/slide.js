const left = document.querySelector('.left')
const right = document.querySelector('.right')
let num = 0
let incr = 0
let l
let s = 0
 
var client = contentful.createClient({
  space:'g83j5mjjg3ig',
  accessToken:'guJQMz5h39zhGLFemZudb_AUudM5d23tf0RkNehkPXY'
})
client.sync({initial: true})
.then(response => {
  l = response.entries
  l.forEach(el => {
    num++
  })
  console.log(num)
})


export function slide(){
s = (100/num)
incr = incr + s
if(incr !== s*num){
    document.querySelector('.slide').style = `transform:translateX(${incr}%)`
  }
  else{
    document.querySelector('.slide').style = `transform:translateX(0%)`
    document.querySelector('.slide').style = `transition:all 2s linear`
    incr = 0
      }
}
export function Return(){
 incr = incr - s
 if(incr !== 0 && incr > 0){
    document.querySelector('.slide').style = `transform:translateX(${incr}%)`
  }
  else{
    document.querySelector('.slide').style = `transform:translateX(0%)`
    document.querySelector('.slide').style = `transition:all 2s linear`
    incr = 0
      }

}
