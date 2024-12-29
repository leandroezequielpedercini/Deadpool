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
    <input class="btr2" type="button" value="Trailer" onclick="bton2()">
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

<p id="pelicula1" class="peliculaUno" > Pelicula: Deadpool (1) </p>



    <p>Precio:</p>
    <div id="carritouno" class="pesos">$0</div>

</div>




<div>
<img id="carrito2" class="movie2" src="index/img/3-tarjetas/foto2.jpeg" alt="Deadpool 2">
<input class="carroDos"  type="button" value="Añadir al carrito" onclick="btrcarro2()" >

<p id="pelicula2" class="peliculaDos" > Pelicula:Deadpool (2) </p>



<p>Precio:</p>
<div id="carritodos" class="pesos">$0</div>


</div>


<div>
<img id="carrito3" class="movie3" src="index/img/3-tarjetas/foto2.jpeg" alt="Deadpool 3">
<input class="carroTres"  type="button" value="Añadir al carrito" onclick="btrcarro3()" >

<p id="pelicula3" class="peliculaTres" > Pelicula:Deadpool (3) </p>


<p>Precio:</p>
<div id="carritotres" class="pesos">$0</div>


</div>




`






    
    const peliculas = [
        {
            preciouno:  2000,
            preciodos:  2500,
            preciotres: 5000,
            }
    ]


    /* Carrito Uno */

    let contadoruno = 0

    function btrcarro1(){

    
    carritouno = []


    for(let i= 0; i < peliculas.length; i++){
        carritouno.push(peliculas[i].preciouno)
       
        } 

    const preciouno = document.getElementById("carritouno") 
        
    contadoruno += Number(carritouno)
    preciouno.innerHTML =  `$${contadoruno} `
    console.log(carritouno)
}

/* Carrito 2 */
let contadordos = 0

    function btrcarro2(){

    
    carritodos = []


    for(let i= 0; i < peliculas.length; i++){
        carritodos.push(peliculas[i].preciodos)
       
        } 

    const preciodos = document.getElementById("carritodos") 
        
    contadordos += Number(carritodos)
    preciodos.innerHTML =  `$${contadordos} `
    console.log(carritodos)
}

/* Carrito 3 */
let contadortres = 0

    function btrcarro3(){

    
    carritotres = []


    for(let i= 0; i < peliculas.length; i++){
        carritotres.push(peliculas[i].preciotres)
       
        } 

    const preciotres = document.getElementById("carritotres") 
        
    contadortres += Number(carritotres)
    preciotres.innerHTML =  `$${contadortres} `
    console.log(carritotres)
}



        

const footer = document.getElementById("footer") 
footer.innerHTML = ` <div class="footer"> <p class="parrafoFooter" >Solo en cines.. compra las entradas por la web</p> <div/> `




