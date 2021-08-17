let sections = document.querySelectorAll(".projects .project").length;
const projectArr = gsap.utils.toArray(".projects .project");
let footerNote = document.querySelector("footer > p");

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

gsap.to("#dro-svg path", {
  duration: 1,
  strokeDashoffset: 0,
  fill: "white",
  stagger: 0.3,
});

document.querySelector(".project-btn").addEventListener("click", () => {
  gsap.to(window, { duration: 1, scrollTo: { y: ".projects" } });
});

var options = {
  strings: [
    "I'm <span>Seun Taiwo</span> AKA <span>Dro</span>",
    "I'm a Full Stack Web Developer",
    "I'm a Mobile App Developer",
    "I build fully responsive websites",
    "I love Games😍",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1500,
  cursorChar: "_",
  smartBackspace: true,
  loop: true,
};

var typed = new Typed("#mainText", options);

projectArr.map((project, index) => {
  if (index === projectArr.length - 1) {
    return ScrollTrigger.create({
      trigger: project,
      start: "top top",
    });
  }
  ScrollTrigger.create({
    trigger: project,
    start: "top top",
    snap: {
      snapTo: 1,
      duration: 1,
      delay: 0.05,
    },
    pin: true,
    pinSpacing: false,
  });
});
