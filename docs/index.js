const items = document.querySelectorAll(".item");
for (const item of items) {
  item.innerHTML = new Array(100)
    .fill(0)
    .map((d, i) => `<span class="num">${i + 1}</span>`)
    .join(" ");
}

// bottomの初期スクロール位置を下部に移動
// bottom.scrollLeft = bottom.scrollWidth - bottom.clientWidth;

function updateScroll(event) {
  const image = document.querySelector(".scroll-image");
  const layer = document.querySelector(".layer");
  image.scrollLeft = document.documentElement.scrollTop * 0.02;
  layer.scrollLeft = document.documentElement.scrollTop * 0.7;
}

document.body.onscroll = updateScroll;
