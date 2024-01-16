gsap.registerPlugin(ScrollTrigger);

let mainWrapper = document.querySelector(".main-wrapper");
let sections = gsap.utils.toArray(".scroll-x");

let wrapper = document.querySelector(".wrapper");
let section = document.querySelector(".section0002");


let tm = gsap.timeline({
    scrollTrigger: {
        trigger: mainWrapper,
        pin: true,
        scrub: 1,
        start: "left top",
        end: "right top",
        markers: true
    }
})

tm.to(sections, {xPercent: -100 * (sections.length - 1), ease: "none"})
.to(section, {clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)"})


gsap.to(".text", {
    y: 0,
    opacity: 1,
    duration: 1,

    scrollTrigger: {
        trigger: ".main-wrapper",
        start: "left 40%",
        end: "left 10%",
        scrub: 1,
    }
});