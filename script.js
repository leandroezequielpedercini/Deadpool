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
main.innerHTML = ` <div class="cartas2">

<div>

<img id="carrito1" class="movie1" src="index/img/3-tarjetas/foto1.jpeg" alt="Deadpool 1">

<input id="btrcarrito" class="carroUno" type="button" value="Añadir al carrito" onclick="btrcarro1()">

<p id="pelicula1" class="peliculaUno" > Pelicula: </p>

<p">Deadpool (1)</p>

    <p >Precio:</p>
    <p class="preciouno" id="precio1"></p>

</div>




<div>
<img id="carrito2" class="movie2" src="index/img/3-tarjetas/foto2.jpeg" alt="Deadpool 2">
<input class="carroDos"  type="button" value="Añadir al carrito" onclick="carro2()" >

<p id="pelicula2" class="peliculaDos" > Pelicula: </p>

<p id="precio2">Precio:</p>
</div>


<div>

<img id="carrito1"  class="movie3" src="index/img/3-tarjetas/foto3.jpeg" alt="Deadpool 3">    

<input class="carroTres" type="button" value="Añadir al carrito" onclick="carro3()" >  

<p id="pelicula3" class="peliculaTres" > Pelicula: </p>

<p id="precio3">Precio:</p>

<div>

</div>`


    
    const peliculas = [
        {
            preciouno: "$2.000",
            preciodos: "$2.500",
            preciotres: "$5.000"
        }
    ]




    const contador = 0

    const  carrito =document.getElementById("carrito") 
    carrito.innerHTML = [""];

    function btrcarro1(){
    
    
        for(i=0; i < peliculas.length; i++){

            const peli1 = document.getElementById("precio1")
            peli1.innerHTML +=  (peliculas[i].preciouno) 
    }
    

    while (peli1 < contador  ) {
    
    const sumar = document.getElementById("btrcarrito").value = Number(peliculas[i++].preciouno)

}
       
}




const footer = document.getElementById("footer")
footer.innerHTML = ` <div class="footer"> <p class="parrafoFooter" >Solo en cines.. compr las entradas por la web</p> <div/> `