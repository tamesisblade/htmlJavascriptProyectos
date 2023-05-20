//variables 
const carrito           = document.querySelector("#carrito")
const contenedorCarrito = document.querySelector("#lista-carrito tbody")
const vaciarCarriboBtn  = document.querySelector("#vaciar-carrito")
const listaCursos       = document.querySelector("#lista-cursos")
let articulosCarrito    = []
cargarEventListeners()
function cargarEventListeners(){
    //cuando agregar un curso presionando "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

//Funciones
function agregarCurso(e){
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)

    }
}
//Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
    console.log("entro",curso)
    //crear un objeto con el curso
    const c     = new Object()
    c.imagen    = curso.querySelector("img").src
    c.titulo    = curso.querySelector("div h4").innerHTML
    c.precio    = curso.querySelector(".precio span").innerHTML
    c.id        = curso.querySelector("a").getAttribute('data-id')
    c.cantidad  = 1
    articulosCarrito = [...articulosCarrito,c]
    carritoHTML()
}
//Muestra el carrito de compras en el HTML
function carritoHTML(){
    //limpiar el HTML
    limpiarHTML()
    //Recorre el carrito y genera el HTML
    console.log("carrito",articulosCarrito)
    articulosCarrito.forEach(p => {
        const { id, imagen, titulo, precio, cantidad } = p
        const row = document.createElement("tr");
        row.innerHTML = `
         <td><img width="50" src="${ imagen }"/></td>
         <td>${ titulo }</td>
         <td>${ precio }</td>
         <td>${ cantidad }</td>
         <td>
         <a href="#" class="borrar-curso" data-id="${ id }">X</a>
         </td>
        `;
        console.log("raaaa",row)
        console.log("res",contenedorCarrito)
        //agrega el HTML del carrito en tbody
        contenedorCarrito.appendChild(row)
    })
}

//eliminar los cursos del tbody
function limpiarHTML(){
    //forma lenta
    //contenedorCarrito.innerHTML = ""
    //forma rapida
    //mientras haya un hijo
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}