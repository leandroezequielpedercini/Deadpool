const header = document.getElementById("header")
header.innerHTML = `<div><img src="index/img/1-header/foto1.jpg" alt="MARVEL STUDIOS" class="titulo" ></div>
                    
                    <div><img src="index/img/2-titulo/titulo.jpg" alt="DEADPOOL" class="subtitulo" ></div>`



const seccion = document.getElementById("seccion")
seccion.innerHTML = `<div class="cartas1">

    <div class="trailer1">
    <video id="primerTrailer" class="video1" src="index/Video/traillerUno.mp4"></video>
    <input  type="button" value="Trailer" class="btr1" onclick="bton1()">
    </div>
    
    <div class="tariler2">
    <video id="segundoTrailer" class="video2" src="index/Video/traillerDos.mp4"></video>
    <input class="btr2" type="button" value="Trailer"    onclick="bton2()">
    </div>

    <div>
    <video id="tercerTrailer" class="video3" src="index/Video/traillerTres.mp4"></video>
    <input class="btr3" type="button" value="Trailer"    onclick="bton3()">
    </div>

    </div>`

    function bton1() {
        document.getElementById("primerTrailer").play()
    }
    
    function bton2() {
        document.getElementById("segundoTrailer").play()
    }   
    
    function bton3() {
        document.getElementById("tercerTrailer").play()
    }



    //main//

const main = document.getElementById("main")
main.innerHTML = `
<div class="cartas2">

    <div>
    <img id="carrito1" src="index/img/3-tarjetas/foto1.jpeg" alt="Deadpool 1">
    <input class="carroUno" type="button" value="Añadir al carrito" onclick="carro1()">
    </div>

    <div>
    <img id="carrito2" src="index/img/3-tarjetas/foto2.jpeg" alt="Deadpool 2">
    <input class="carroDos"  type="button" value="Añadir al carrito" onclick="carro2()" >
    </div>

    <div>
    <img id="carrito1" src="index/img/3-tarjetas/foto3.jpeg" alt="Deadpool 3">    
    <input class="carroTres" type="button" value="Añadir al carrito" onclick="carro3()" >  
    
    </div>

    </div>`

const footer = document.getElementById("footer")
footer.innerHTML = ` <div class="footer"> <p class="parrafoFooter" >Solo en cines..</p> <div/> `