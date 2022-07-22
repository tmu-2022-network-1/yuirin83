let bgSpeed = 0
let laySpeed = 0

let beforeY

let scrollDown = new Boolean(true)

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

  image.scrollLeft = luxyScroll * bgSpeed
  layer.scrollLeft = luxyScroll * laySpeed
  scrollNum.textContent = luxyScroll * bgSpeed + "m"



  let vector = luxyScroll - beforeY
  if(vector > 0){
    scrollDown = Boolean(true) //下方向へスクロール中
  }else if(vector < 0){
    scrollDown = Boolean(false) //上方向へスクロール中
  }

  if(luxyScroll > 6300){
    if(scrollDown){
      bgSpeed += 0.0002
      laySpeed += 0.0005
    }
    if(!scrollDown){
      bgSpeed -= 0.0002
      laySpeed -= 0.0005
    }
  }else{
    bgSpeed = 0
    laySpeed = 0
  }

  console.log(luxyScroll * bgSpeed);
  console.log(scrollDown);


  if(luxyScroll > 21000){
    appearGetOffButton();
  }else{
    disappearGetOffButton();
  }

  if(luxyScroll * bgSpeed > 3800 && luxyScroll * bgSpeed < 9200){
    inTonnel();
  }else{
    exitTonnel();
  }
  // if(luxyScroll * bgSpeed > 16000 && luxyScroll * bgSpeed < 20000){
  //   inTonnel();
  // }else{
  //   exitTonnel();
  // }

  beforeY = luxyScroll;
})

const config = {
  attributes: true,
}
observer.observe(elem, config)

