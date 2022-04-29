var div1 = document.querySelector("div");

/*
div1.style.backgroundColor = "blue";

div1.style.height = "200px";

div1.style.width = "200px";
*/

div1.classList.add("square");

console.log(div1.classList);

div1.classList.remove("square");

function agregarQuitar() {

    div1.classList.toggle("square");
}

setInterval(agregarQuitar, 1000)