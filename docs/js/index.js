let bgSpeed = 0
let laySpeed = 0
let bgSpeed_num = 0.0003;
let laySpeed_num = 0.002;

function updateScroll(event) {
  const image = document.querySelector('.scroll-image');
  const layer = document.querySelector('.layer');
  image.scrollLeft = document.documentElement.scrollTop * bgSpeed;
  layer.scrollLeft = document.documentElement.scrollTop * laySpeed;
}
document.body.onscroll = updateScroll


const scrollNum = document.getElementById('scroll-num')

window.addEventListener('scroll', function () {
  scrollNum.textContent = window.pageYOffset;
  let scroll = window.pageYOffset;

  if (scroll > 70000) {
    if (bgSpeed > 0 && laySpeed > 0) {
      bgSpeed -= bgSpeed_num;
      laySpeed -= laySpeed_num;
    }
  } else if (scroll > 30000) {
    let isTop = Boolean(false);
    let bgSpeed_max;
    let laySpeed_max;
    if(!isTop){
      bgSpeed_max = bgSpeed;
      laySpeed_max = laySpeed;
      bgSpeed = bgSpeed_max;
      laySpeed = laySpeed_max;
      isTop = Boolean(true);
    }else{    
      bgSpeed = bgSpeed_max;
      laySpeed = laySpeed_max;
    }
  } else if (scroll > 5300) {
    bgSpeed += bgSpeed_num;
    laySpeed += laySpeed_num;
  } else {
    bgSpeed = 0;
    laySpeed = 0;
  }

  console.log(bgSpeed);

})