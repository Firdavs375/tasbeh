let count = document.querySelector(".count")
let start = document.querySelector(".btn1")
let reset = document.querySelector(".btn2")

let a = 0;
start.onclick = () => {
    a++
    count.innerHTML = a;
    if (count.innerHTML == 100) {
        a=0;
    }
}

reset.onclick = () =>{
    b = 0;
    count.innerHTML = b;
}
   