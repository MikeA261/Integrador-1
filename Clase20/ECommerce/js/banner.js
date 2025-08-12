let imagenAcutal = 0;
const imagen = document.querySelectorAll('.banner');
const imagenes = imagen.length;
const duracionSlide = 5000;




function cambiarImagen(index){
    imagen.forEach((imagen, i) => {
        imagen.classList.remove('activar');
        if (i === index) {
            imagen.classList.add('activar');
        }
    });
}

function nextSlide(){
    imagenAcutal = (imagenAcutal + 1) % imagenes;
    cambiarImagen(imagenAcutal);
}

function prevSlide() {
    imagenAcutal = (imagenAcutal - 1 + imagenes) % imagenes;
    cambiarImagen(imagenAcutal);
}

setInterval(nextSlide, duracionSlide);
