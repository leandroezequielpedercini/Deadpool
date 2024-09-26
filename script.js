/* header */
let cabezal = document.getElementById("header")

cabezal.innerHTML =  `<div class="div-header"> <img class="header-img1" src="/img/1-header/foto1.jpg" alt="" > <img class="header-img2" src="/img/1-header/foto2.jpg" alt="" > <img class="header-img3"  src="/img/1-header/foto3.jpg" alt="" > </div>`

/* titulo */
let titulo = document.getElementById("titulo")
titulo.innerHTML = `<img class="titulo" src="/img/2-titulo/titulo.jpg" alt="">`


/* main */
let main = document.getElementById("main")
main.innerHTML = `<div class="main-tarjetas " >

            <div class="primera-tarjeta">
            <div class="card" style="width: rem;">
                <img class="img-uno" src="/img/3-tarjetas/foto1.jpg
                " class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Pelicula 1</h5>
                  <p class="card-text"></p>
                <a id="btn-uno" href="#" class="btn btn-primary">Ver el trailer</a>
          
                    </div>
              </div>
        </div>

        <div class="segunda-tarjeta">
            <div class="card" style="width: 10.7rem;">
                <img class="img-dos" src="/img/3-tarjetas/foto2.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Pelicula 2</h5>
                  <p class="card-text"></p>
                  <a id="btn-dos" href="#" class="btn btn-primary">Ver el trailer</a>
                </div>
              </div>
        </div>

        <div class="primera-tarjeta">
            <div class="card" style="width: 11.2rem;">
                <img class="img-tres" src="/img/3-tarjetas/foto3.jpg
                " class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Pelicula 3</h5>
                  <p class="card-text"></p>
                  <a id="btn-tres" href="#" class="btn btn-primary">Ver el trailer</a>
                </div>`


let botonUno = document.getElementById("btn-uno").onclick = function() {
document.getElementById("trailer-uno").play()

}


let botonDos = document.getElementById("btn-dos").onclick = function() {
  document.getElementById("trailer-dos").play()
}

let botonTres = document.getElementById("btn-tres").onclick = function() {
  document.getElementById("trailer-tres").play()
}

