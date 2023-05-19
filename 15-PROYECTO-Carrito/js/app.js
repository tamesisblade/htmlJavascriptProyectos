//variables 
const carrito           = document.querySelector("#carrito")
const contenedorCarrito = document.querySelector("lista-carrito tbody")
const vaciarCarriboBtn  = document.querySelector("vaciar-carrito")
const listaCursos       = document.querySelector("#lista-cursos")
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
    console.log("aaa",c)
}