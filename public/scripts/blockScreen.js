export function block() {

    document.getElementById("block").style.display = "flex";
    document.querySelector("body").style.cursor = "wait";
};

export function unblock() {
    
    document.querySelector("body").style.cursor = "default";
    document.getElementById("block").style.display = "none";
};