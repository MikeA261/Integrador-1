// -------------------------------------
//         variables globales
// -------------------------------------


// -------------------------------------
//         funciones globales
// -------------------------------------
function representarCardsProductos() {
    let cards = ''
    
    if(productos.length) {
        for(let i=0; i<productos.length; i++) {
            let producto = productos[i]
            cards += `<div class="card-container">
                            <a href="">
                                <section class="card">
                                    <h3>${producto.nombre}</h3>
                                    <img src="${producto.foto}" alt="foto de ${producto.nombre}">
                                    <div><p><b>Precio:</b> $${producto.precio}</p></div>
                                    <div><p><b>Stock:</b> ${producto.stock}</p></div>
                                    <div><p><b>Marca:</b> ${producto.marca}</p></div>
                                    <div><p><b>Categoría:</b> ${producto.categoria}</p></div>
                                    <div class="descripcion"><p><b>Detalles:</b> ${producto.detalles}</p></div>
                                    <br>
                                    <div class= "envio"><p><b style="color:gold;">Envío:</b> ${producto.envio? 'Si':'No'}</p>
                                </section>
                            </a>
                        </div>`
        }
    }
    else cards += '<h2>No se encontraron productos para mostrar</h2>'

    document.querySelector('.contenedor-grid').innerHTML = cards
}

function start() {
    console.warn(document.querySelector('title').textContent)

    representarCardsProductos()
}
