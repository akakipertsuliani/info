document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        document.getElementById("cutter1").style.bottom = `${window.scrollY}px`;
        document.getElementById("cutter2").style.top = `${window.scrollY}px`;
        document.getElementById("cutter3").style.bottom = `${window.scrollY}px`;

        document.getElementById("cutter-2-1").style.top = `${window.innerHeight - window.scrollY}px`;
        document.getElementById("cutter-2-2").style.bottom = `${window.innerHeight - window.scrollY}px`;
        document.getElementById("cutter-2-3").style.top = `${window.innerHeight - window.scrollY}px`;
    });
});
