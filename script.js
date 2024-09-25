/* header */
let cabezal = document.getElementById("header")

cabezal.innerHTML =  `<div class="div-header"> <img class="header-img1" src="/img/1-header/foto1.jpg" alt="" > <img class="header-img2" src="/img/1-header/foto2.jpg" alt="" > <img class="header-img3"  src="/img/1-header/foto3.jpg" alt="" > </div>`

/* titulo */
let titulo = document.getElementById("titulo")
titulo.innerHTML = `<img class="titulo" src="/img/2-titulo/titulo.jpg" alt="">`

let botonUno = document.getElementById("btn-uno").onclick = function() {
let traillerUno = document.getElementById("trailer-uno").play() 
}

let botonDos = document.getElementById("btn-dos").onclick = function() {
let traillerDos = document.getElementById("trailer-dos").play()
}

let botonTres = document.getElementById("btn-tres").onclick = function() {
let trailerTres = document.getElementById("trailer-tres").play()
}

