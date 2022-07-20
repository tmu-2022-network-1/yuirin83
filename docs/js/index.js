let bgSpeed = 0
let laySpeed = 0

let beforeY
let correntY
const image = document.querySelector('.scroll-image')
const layer = document.querySelector('.layer')

// function updateScroll(event) {
//   image.scrollLeft = document.documentElement.scrollTop * bgSpeed
//   layer.scrollLeft = document.documentElement.scrollTop * laySpeed
// }
// document.body.onscroll = updateScroll

const scrollNum = document.getElementById('scroll-num')

// window.addEventListener('scroll', function () {
//   scrollNum.textContent = window.scrollY
//   let scroll = window.scrollY

//   if (beforeY < scroll) {
//     // if (scroll > 70000) {
//     //   // if (bgSpeed > 0 && laySpeed > 0) {
//     //   //   bgSpeed -= bgSpeed_num
//     //   //   laySpeed -= laySpeed_num
//     //   // }
//     // } else if (scroll > 30000) {
//     //   let isTop = Boolean(false)
//     //   let bgSpeed_max
//     //   let laySpeed_max
//     //   if (!isTop) {
//     //     bgSpeed_max = bgSpeed
//     //     laySpeed_max = laySpeed
//     //     bgSpeed = bgSpeed_max
//     //     laySpeed = laySpeed_max
//     //     isTop = Boolean(true)
//     //   } else {
//     //     bgSpeed = bgSpeed_max
//     //     laySpeed = laySpeed_max
//     //   }
//     // } else
//     if (scroll > 5300) {
//       bgSpeed += bgSpeed_num
//       laySpeed += laySpeed_num
//     } else {
//       bgSpeed = 0
//       laySpeed = 0
//     }
//   }

//   beforeY = window.pageYOffset
//   // console.log(bgSpeed)

//   var targetElement = document.getElementById('tonnel-entrance')
//   var clientRect = targetElement.getBoundingClientRect()
//   var x = clientRect.left

//   if (x <= 350) {
//   }
// })

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
  image.scrollLeft = luxyScroll * (1 + bgSpeed);
  layer.scrollLeft = luxyScroll * (1 + laySpeed);
  scrollNum.textContent = luxyScroll;

  if(luxyScroll > 5300){
    bgSpeed += 0.001
    laySpeed += 0.0015
  }else{
    bgSpeed = -1
    laySpeed = -1
  }
})

const config = {
  attributes: true,
}
observer.observe(elem, config)
