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

<div>
<input id="btrcarrito" class="carroUno" type="button" value="Añadir al carrito" onclick="btrcarro1()"> 
</div>


<p id="pelicula1" class="peliculaUno" > Pelicula: Deadpool (1) </p>



    <p>Precio:</p>
    <div id="carritouno" class="pesos"> <h2 class="peso1"> $0</h2/></div>

</div>




<div>
<img id="carrito2" class="movie2" src="index/img/3-tarjetas/foto2.jpeg" alt="Deadpool 2">


<div>
<input class="carroDos"  type="button" value="Añadir al carrito" onclick="btrcarro2()" >
</div>

<p id="pelicula2" class="peliculaDos" > Pelicula:Deadpool (2) </p>



<p>Precio:</p>
<div id="carritodos" class="pesos"> <h2 peso2 > $0</h2/></div>


</div>


<div>
<img id="carrito3" class="movie3" src="index/img/3-tarjetas/foto3.jpeg" alt="Deadpool 3">


<div>
<input class="carroTres"  type="button" value="Añadir al carrito" onclick="btrcarro3()" >
</div>
<p id="pelicula3" class="peliculaTres" > Pelicula:Deadpool (3) </p>


<p>Precio:</p>
<div id="carritotres" class="pesos"> <h2 > $0</h2/> </div>

</div>

`



const agregar = document.getElementById("agregar")
agregar.innerHTML = ` <button class="btncomprar" onclick="compra()" > COMPRÁR</button> `

const total = document.getElementById("total")
total.innerHTML = `<h1 class="sumafinal">$0</h1>`


document.getElementById("agregar").addEventListener("click", () =>{
    const totalfinal = document.getElementById("total")
    totalfinal.innerHTML = `<h1 class="sumafinal">$${contadoruno + contadordos + contadortres }</h1> `
    contadoruno.remover()
})


    /*  Formulario */
const formulario = document.getElementById ("formulario")
formulario.innerHTML = `<form action="https://formspree.io/f/xyzzdzaz" method="POST" class="form" id="datosrequeridos">
        
    
<label class="labelnombrecompleto" >Nombre completo</label  >  
   <input class="nombrecompleto" type="text" id="inpunombrecompleto" name="nombrecompleto" placeholder="Nombre completo..........................................................."> 
   </div>

   <div>
       <label class="labelapellido" >Apellido</label>
       <input class="apellido" type="text" id="inpunapellido" name="apellido" placeholder="Apellido.........................................................................">
   </div>

   <div>
      <label class="labeldni" >DNI</label>
       <input class="dni" type="text" id="inpundni" name="dni" placeholder="DNI.............................................................................................................................">
   </div>

   <div>
       <label class="labelmail" >E-mails-</label>
        <input class="mail" type="email" id="inpunmail" name="mail" placeholder="E-mail............................................................................">
   </div>

   <div>
       <label class="labelcelular" >Celular-</label>
       <input class="celular" type="text" id="inpuncelular" name="celular" placeholder="Celular..........................................................................">
       </div>
      
   <div><input type="button" value="ENVIAR" id="btn-formulario" name="boton" class="boton" >

</form>`

document.getElementById("btn-formulario").addEventListener("click", (event) =>{
   const formulario = document.getElementById("datosrequeridos")

   const nombrecompleto = document.getElementById("inpunombrecompleto")
  nombrecompleto.innerText = formulario.nombrecompleto.value

  console.log(nombrecompleto)

const apellido = document.getElementById("inpunapellido")
apellido.innerText = formulario.apellido.value
console.log(apellido)
const dni = document.getElementById("inpundni")
dni.innerText = formulario.dni.value
console.log(dni)

const mail = document.getElementById("inpunmail")
mail.innerText = formulario.mail.value
console.log(mail)

const celular = document.getElementById("inpuncelular")
celular.innerText = formulario.celular.value
console.log(celular)
const mensaje = alert("¡ Correo enviado !")




})

    
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

    
    const carritotres = []


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


