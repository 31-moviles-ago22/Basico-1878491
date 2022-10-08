// variables
var carrito = 0;
var idArticulo = 0;

var carritoSpan = document.getElementById("cantArticulos");

//Donde va a agregar el contenido
var contenedorCarrito = document.getElementById("carroCompras");

function agregarAlCarrito(imagenSrc, nombreArticulo) {
    carrito++;

    carritoSpan.innerHTML = "Articulos en el carrito: " + carrito;

    //Crea elementos para agregar
    var articulo = document.createElement("div");
    articulo.classList.add("articuloCarrito");
    articulo.setAttribute("id", "idArt" + idArticulo++)

    var imagen = document.createElement("img");
    imagen.src = imagenSrc;

    var nombre = document.createElement("p")
    nombre.innerHTML = nombreArticulo;

    var boton = document.createElement("button");

    boton.addEventListener("click", function() {
        eliminar(this.parentElement.id);
    })
    boton.innerHTML = "Eliminar"

    articulo.appendChild(imagen);
    articulo.appendChild(nombre);
    articulo.appendChild(boton);


    //agrega articulo
    contenedorCarrito.appendChild(articulo);
}

function eliminar(id) { //Elimminar carrito
    if (carrito > 0) {
        carrito--;
        carritoSpan.innerHTML = "Articulos en el carrito: " + carrito;
        var articuloEliminar = document.getElementById(id);
        articuloEliminar.remove();
    }
}