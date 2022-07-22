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


function appearGetOffButton(){
  document.getElementById("get-off").classList.remove("default");
  document.getElementById("get-off").classList.add("appear");
}

function disappearGetOffButton(){
  document.getElementById("get-off").classList.remove("appear");
  document.getElementById("get-off").classList.add("default");
}

function GetOffTrain(){
  document.getElementById("end-text").classList.add("active-text");
  document.getElementById("left-door").classList.remove("left-pos");
  document.getElementById("left-door").classList.add("activeLeft");
  document.getElementById("right-door").classList.remove("right-pos");
  document.getElementById("right-door").classList.add("activeRight");
  document.getElementById("get-off").classList.add("hide");
  document.getElementById("back-button").classList.add("appear");
}

function inTonnel(){
  document.getElementById("nowTonnel").classList.add("inTonnel");
}

function exitTonnel(){
  document.getElementById("nowTonnel").classList.remove("inTonnel");
}

function backToStart(){
  document.getElementById("end-text").classList.remove("active-text");
  document.getElementById("left-door").classList.add("left-pos");
  document.getElementById("left-door").classList.remove("activeLeft");
  document.getElementById("right-door").classList.add("right-pos");
  document.getElementById("right-door").classList.remove("activeRight");
  document.getElementById("get-off").classList.remove("hide");
  document.documentElement.scrollTop = 0;
  document.getElementById("back-button").classList.remove("appear");
}