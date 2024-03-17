// console.log(`jay shree ram`);

const tl = gsap.timeline();
let preloaderData = document.querySelector(".prealoder span");
let line = document.querySelector(".line");
function timeIncrease() {
  let x = 1;

  setInterval(() => {
    x = x + Math.floor(Math.random() * 20);
    if (x <= 100) {
      preloaderData.innerHTML = `${x}%`;
      line.style.width = `${x}%`;
    } else {
      x = 100;
      preloaderData.innerHTML = `${x}%`;
      line.style.width = `${x}%`;
    }
  }, 120);
}

timeIncrease();


tl.to('.prealoder', {
    opacity : 0,
    delay : 1.3,
})

tl.from(".left_item, .menu_items, .right_item", {
  y: -100,
  duration: 0.4,
  stagger: 0.2,
  opacity: 0,
});
tl.from(".textHeading, .textPera", {
  x: -100,
  duration: 0.7,
  stagger: 0.2,
  opacity: 0,
});

tl.from(".circle", {
  opacity: 0,
});

tl.from(".img_bottle", {
  y: 700,
  duration: 0.6,
  opacity: 0,
});
tl.from(".btn_grp button", {
  x: -100,
  duration: 0.4,
  opacity: 0,
  stagger: 0.3,
});

tl.from(".bottle_data li", {
  y: -70,
  opacity: 0,
  stagger: 0.3,
});
tl.from(".scroll_down, .right_hero_bottom", {
  y: -80,
  opacity: 0,
  stagger: 0.3,
});

tl.from(".dot", {
  y: -45,
  opacity: 0,
  repeat: -1,
  yoyo: true,
});
