document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        let scrollY = window.scrollY;

        scrollY > window.innerHeight ? scrollY = window.innerHeight : 0;

        document.getElementById("cutter1").style.bottom = `${scrollY}px`;
        document.getElementById("cutter2").style.top = `${scrollY}px`;
        document.getElementById("cutter3").style.bottom = `${scrollY}px`;

        document.getElementById("cutter-2-1").style.top = `${window.innerHeight - scrollY}px`;
        document.getElementById("cutter-2-2").style.bottom = `${window.innerHeight - scrollY}px`;
        document.getElementById("cutter-2-3").style.top = `${window.innerHeight - scrollY}px`;

    });
});


const races = document.querySelector(".wrapper");
console.log(races.offsetWidth)

function getScrollAmount() {
    let racesWidth = races.scrollWidth;
    return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
    x: getScrollAmount,
    duration: 3,
    ease: "none",
});


ScrollTrigger.create({
    trigger: ".zewrapper",
    start: "top top",
    end: () => `+=${getScrollAmount() * -1}`,
    pin: true,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true,
})

