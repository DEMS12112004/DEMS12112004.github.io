//alert("esta es la pagina");
//este es el codigo para la animacion
let app= document.getElementById('typewriter');

let typewriter= new Typewriter (app, {
    loop: true,
    delay: 75,
});
typewriter
.pauseFor(2500)
.typeString('desarrollo sitios web y escribo articulos de programacion')
.pauseFor(200)
.delatteChars(10)
.start();