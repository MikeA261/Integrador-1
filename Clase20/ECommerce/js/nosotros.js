// -------------------------------------
//         variables globales
// -------------------------------------


// -------------------------------------
//         funciones globales
// -------------------------------------

function mostrarOcultar(id){
    const parrafo = document.getElementById(id)
    if (parrafo.style.display == "none") {
        parrafo.style.display = "block";
    }else {
        parrafo.style.display = "none";
    }
}


function start() {
    console.warn(document.querySelector('title').textContent)
}