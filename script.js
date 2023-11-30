document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".input-field").forEach((element, id) => {
        element.addEventListener("focus", () => {
            if (id === 0) {
                document.getElementById("first-text").style.cssText = "transform: translate(15%, -50%); background-color: red; z-index: 2";
            } else if (id === 1) {
                document.getElementById("second-text").style.cssText = "transform: translate(15%, -50%); background-color: red; z-index: 2";
            }
        });

        element.addEventListener("blur", () => {
            if (!element.value.trim() && id === 0) {
                document.getElementById("first-text").style.cssText = "transform: translate(40%, 35%); background: transparent; z-index: 0;";
            } else if (!element.value.trim() && id === 1) {
                document.getElementById("second-text").style.cssText = "transform: translate(40%, 35%); background: transparent; z-index: 0;";
            }
        });
    });

    document.getElementById("text-area").addEventListener("focus", () => {
        document.getElementById("three-text").style.cssText = "transform: translate(15%, -50%); background-color: red; z-index: 2";
    });
    
    document.getElementById("text-area").addEventListener("blur", () => {
        document.getElementById("three-text").style.cssText = "transform: translate(20%, 35%); background: transparent; z-index: 0;";
    });

});
