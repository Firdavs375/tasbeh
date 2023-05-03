let count = document.querySelector(".count")
let start = document.querySelector(".btn1")
let reset = document.querySelector(".btn2")
let audio1 = document.getElementById("audio1")
let audio2 = document.getElementById("audio2")
// console.log(audio2);

let a = 0;
start.onclick = () => {
    a += 1
    count.innerHTML = a;
    if (count.innerHTML == 100) {
        a = 0;
        audio1.play()
    } 
    audio2.play()
}

reset.onclick = () => {
    a = 0;
    count.innerHTML = a;
    audio2.play()
}