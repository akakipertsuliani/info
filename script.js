document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        document.getElementById("cutter1").style.top = `${window.scrollY}px`;
        document.getElementById("cutter2").style.bottom = `${window.scrollY}px`;
    });
});
