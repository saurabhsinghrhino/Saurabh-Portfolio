let liText = document.querySelector(".change-text");

let texts = ["Projects", "ToDo App", "Tic Tac Toe", "Calculator", "Portfolio"];
let index = 0;

function animatedText() {
  liText.textContent = texts[index];
  liText.style.color = "black";

  gsap.fromTo(
    liText,
    { y: 0, opacity: 0 },
    {
      y: -50,
      opacity: 1,
      duration: 1.5,
      ease: "ease",
    }
  );

  gsap.to(liText, {
    y: 0,
    opacity: 0,
    delay: 1.5,
    duration: 1,
    ease: "power2.in",
    onComplete: () => {
      index = (index + 1) % texts.length;
      animatedText(); // 🔁 loop
    },
  });
}

animatedText(); // start animation

let nav = document.querySelector("nav");
let tl = gsap.timeline();

tl.from(nav, {
  y: "-150%",
  duration: 1,
  ease: "circ-out",
});

tl.from(".logo", {
  x: "-100%",
  duration: 1,
  ease: "circ-out",
  opacity: 0,
});
tl.from(".ul li", {
  x: 500,
  duration: 0.8,
  stagger: 0.28,
  ease: "bounce-out",
});
tl.from(".port h1", {
  y: 100,
  opacity: 0,
  duration: 0.8,
  ease: "bounce-out",
});

gsap.from(".center .title", {
  scale: 0,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".center .title",
    scroller: "body",
    scrub: 2,
  },
});

gsap.from(".center .center-page img", {
  scale: 0,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".center .center-page ",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    scrub: 1,
  },
});
