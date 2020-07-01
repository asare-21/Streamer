const left = document.querySelector('.left')
const right = document.querySelector('.right')
const num = 10
let incr = 0
const length = document.querySelector('.slide').childElementCount
const s = (100/length)
 
export function slide(){
 incr = incr + s
  if(incr !== length*10){
    document.querySelector('.slide').style = `transform:translateX(${incr}%)`
  }
  if(incr == length*10){
    document.querySelector('.slide').style = `transform:translateX(0%)`
    document.querySelector('.slide').style = `transition:all 2s linear`
    incr = 0
      }
}
export function Return(){
 incr = incr - s
  if(incr !== length*10){
    document.querySelector('.slide').style = `transform:translateX(${incr}%)`
  }

  if(incr < 0 ){
    document.querySelector('.slide').style = `transform:translateX(0%)`
    document.querySelector('.slide').style = `transition:all 2s linear`
    incr = 0
      }

}
