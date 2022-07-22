let bgSpeed = 0
let laySpeed = 0

const image = document.querySelector('.scroll-image')
const layer = document.querySelector('.layer')

const scrollNum = document.getElementById('scroll-num')

let luxyScroll = 0;
const elem = document.getElementById('luxy')

var observer = new MutationObserver(function () {
  const style = window.getComputedStyle(elem)
  const luxyCheck = style.getPropertyValue('transform')
  luxyScroll = luxyCheck.slice(23, -1)
  if(!luxyScroll){
    luxyScroll = 0
  }
  
  console.log(luxyScroll)
  image.scrollLeft = luxyScroll * bgSpeed
  layer.scrollLeft = luxyScroll * laySpeed
  scrollNum.textContent = luxyScroll + "m"

  if(luxyScroll > 6300){
    // if(bgSpeed < 0.5){
    //   bgSpeed += 0.0008
    // }
    // if(laySpeed < 0.75){
    //   laySpeed += 0.0015
    // }
    bgSpeed = 1
    laySpeed = 1
  }else{
    bgSpeed = 1
    laySpeed = 1
  }

  if(luxyScroll > 26000){
    appearGetOffButton();
  }else{
    disappearGetOffButton();
  }

  if(luxyScroll > 9600 && luxyScroll < 20000){
    inTonnel();
  }else{
    exitTonnel();
  }
})

const config = {
  attributes: true,
}
observer.observe(elem, config)


