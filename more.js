const fst = document.querySelector(".fst");
const snd = document.querySelector(".snd");
const trd = document.querySelector(".trd");
const fth = document.querySelector(".fth");
const titles = document.querySelector(".titles");

const tl = new TimelineMax();

tl.fromTo(titles, 2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut });