let body = document.querySelector("body");
let cursor = document.querySelector(".cursor");
let images = document.querySelector(".photo");
let li = document.querySelector("li a");
let page = document.querySelector(".project-page");
let proBox = document.querySelector(".pro-box");
let map = document.querySelector(".map");

function DownloadFile() {
  let link = document.createElement("a");
  link.href = "./assets/resume.pdf";
  link.download = "./assets/resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

body.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.5,
    opacity: 1,
    ease: "power2.out",
  });
});

images.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
    scale: 1.8,
  });
});
images.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 1,
  });
});

li.addEventListener("mouseover", function () {
  gsap.to(cursor, {
    opacity: 0,
  });
});

page.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
    visibility: "hidden",
  });
});
page.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    visibility: "visible",
  });
});
