const header = document.getElementById("#intro")

new TypeIt(header, {
  strings: "Hi, I'm Tommy",
  speed: 50,
  waitUntilVisible: true,
}).go();

// document.addEventListener("DOMContentLoaded", function () {
//   new TypeIt("#intro", {
//     strings: ["Hi, I'm Tommy"],
//   }).go();
// });