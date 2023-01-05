// ARRAY DE PRODUCTOS

let productos = [
    //BUZOS
    { id: "buzo-01", categoria: "buzos", titulo: "Buzo Gris", img: "./img/buzo01.png", descripcion: "Buzo griz con capucha y tipo canguro", precio: 4500 },
    { id: "buzo-02", categoria: "buzos", titulo: "Buzo Gris", img: "./img/buzo02.jpg", descripcion: "Buzo FILA rojo-blanco-azul", precio: 4500 },

    //CAMPERAS
    { id: "campera-01", categoria: "camperas", titulo: "Campera 86", img: "./img/campera01.jpg", descripcion: "Campera celeste y azul con logo del mundial 86", precio: 7500 },
    { id: "campera-02", categoria: "camperas", titulo: "Campera AFA", img: "./img/campera02.jpg", descripcion: "Campera negra y celeste con capucha logo de la AFA", precio: 7500 },
    { id: "campera-03", categoria: "camperas", titulo: "Campera Adidas 01", img: "./img/campera03.jpg", descripcion: "Campera adidas Varilite Down con capucha", precio: 8500 },
    { id: "campera-04", categoria: "camperas", titulo: "Campera Under", img: "./img/campera04.jpg", descripcion: "Campera Under Armour azul y negra", precio: 6500 },
    { id: "campera-05", categoria: "camperas", titulo: "Campera Adidas 02", img: "./img/campera05.jpg", descripcion: "Campera Adidas negra", precio: 7500 },
    { id: "campera-06", categoria: "camperas", titulo: "Campera Lotto", img: "./img/campera06.jpg", descripcion: "Campera Lotto negra", precio: 6500 },
    { id: "campera-07", categoria: "camperas", titulo: "Campera Nike", img: "./img/campera07.jpg", descripcion: "Campera Nike abrigada azul", precio: 8500 },

    //PANTALONES     
    { id: "pantalon-01", categoria: "pantalones", titulo: "Pantalon Fila", img: "./img/pantalones01.jpg", descripcion: "Pantalon chupin de mujer Fila azul", precio: 3500 },
    { id: "pantalon-02", categoria: "pantalones", titulo: "Pantalon Adidas", img: "./img/pantalones02.jpg", descripcion: "Pantalon chupin de mujer Adidas negro", precio: 4500 },
    { id: "pantalon-03", categoria: "pantalones", titulo: "Pantalon Under", img: "./img/pantalones03.jpg", descripcion: "Pantalon chupin de mujer Under Armour gris", precio: 3500 },
    { id: "pantalon-04", categoria: "pantalones", titulo: "Pantalon Reebook", img: "./img/pantalones04.jpg", descripcion: "Pantalon de mujer Reebook gris", precio: 2500 },
    { id: "pantalon-05", categoria: "pantalones", titulo: "Pantalon Nike", img: "./img/pantalones05.jpg", descripcion: "Pantalon de mujer Nike negro", precio: 4500 },

    //REMERAS
    { id: "remeras-01", categoria: "remeras", titulo: "Remera Trival 01", img: "./img/remera01.png", descripcion: "Remera trival colores celeste-blaco-fucsia-amarillo", precio: 2500 },
    { id: "remeras-02", categoria: "remeras", titulo: "Remera Trival 02", img: "./img/remera02.png", descripcion: "Remera trival colores celeste-blaco-fucsia-amarillo", precio: 2500 },
    { id: "remeras-03", categoria: "remeras", titulo: "Remera con manchas", img: "./img/remera03.png", descripcion: "Remera con pintas de colores", precio: 2500 },
    { id: "remeras-04", categoria: "remeras", titulo: "Remera Unisex", img: "./img/remera04.png", descripcion: "Remera celeste y blanca con logo del mundial 86", precio: 2500 },
    { id: "remeras-05", categoria: "remeras", titulo: "Remera Lotto", img: "./img/remera05.jpg", descripcion: "Remera Lotto gris y negra", precio: 3500 },
    { id: "remeras-06", categoria: "remeras", titulo: "Remera Puma", img: "./img/remera06.jpg", descripcion: "Campera Puma celeste", precio: 3500 },

    //ZAPATILLAS
    { id: "zapatillas-01", categoria: "zapatillas", titulo: "Zapatillas Nike 01", img: "./img/zapatillas01.jpg", descripcion: "Zapatillas Nike Air MAX", precio: 25000 },
    { id: "zapatillas-02", categoria: "zapatillas", titulo: "Zapatilla Nike 02", img: "./img/zapatillas02.jpg", descripcion: "Zapatillas Nike Air ZOOM naranja y celeste", precio: 25000 },
    { id: "zapatillas-03", categoria: "zapatillas", titulo: "Zapatilla Nike 03", img: "./img/zapatillas03.jpg", descripcion: "Zapatillas Nike negra y blanca", precio: 25000 },
    { id: "zapatillas-04", categoria: "zapatillas", titulo: "Zapatilla Nike 04", img: "./img/zapatillas04.jpg", descripcion: "Zapatillas Nike Air ZOOM celeste y azul", precio: 25000 },
    { id: "zapatillas-05", categoria: "zapatillas", titulo: "Zapatilla Adidas", img: "./img/zapatillas05.jpg", descripcion: "Zapatillas Adidas negra y blanca", precio: 35000 },
]

let productos_guardados_localstorage = JSON.stringify(productos);
localStorage.setItem("productos", productos_guardados_localstorage);


/* 
FUNCION CREADA PARA DAR LA BIENVENIA A LA PERSONA QUE INGRESE SU NOMBRE
EN LA VENTANA EMERGENTE DE LA PAGINA DE INICIO
*/
function enviar() {

    let div_popup_container = document.createElement("div");
    div_popup_container.classList.add("popup__container");
    div_popup_container.innerHTML = `<div id="ventana_emergente" class="ventana__emergente-popup">
                                        <label for="btn-popup">X</label>
                                        <h2>Bienvenido/a al sistema ${suscribite_nombre.value}</h2>
                                    </div>`
    hero_boton.append(div_popup_container);

}

let suscribite_enviar = document.getElementById("suscribite_enviar");
let hero_boton = document.getElementById("hero_boton");

suscribite_enviar.addEventListener("click", enviar);



let contenedor_productos = document.getElementById("productos_container");

let productos_en_localstorage = localStorage.getItem("productos");
let array_productos = JSON.parse(productos_en_localstorage);

let contenedor_carrito = document.getElementById("productos_carrito");
let botones_menu_categoria = document.querySelectorAll(".menu_categoria");
let comprar_carrito = document.querySelector(".comprar_carrito");
let productos_en_carrito = [];

function cargar_los_productos() {

    contenedor_productos.innerHTML = "";

    array_productos.forEach(function (producto) {
    
        let div_productos = document.createElement("div");
        div_productos.className = "productos_container-producto";
        div_productos.innerHTML = `<img class="imagen_producto" src=${producto.img} alt=${producto.id}>
                                    <div class="contenido_producto">
                                    <h3 class="titulo_producto">${producto.titulo}</h3>
                                    <p class="descripcion_producto">${producto.descripcion}</p>
                                    <h4 class="precio_producto">$${producto.precio}</h4>
                                    </div>`
        contenedor_productos.append(div_productos);
    
        let btn_agregar = document.createElement("button");
        btn_agregar.className = "boton_producto";
        btn_agregar.innerText = "Agregar";
    
        div_productos.append(btn_agregar);
    
        btn_agregar.addEventListener("click", function () {
            
            productos_en_carrito.push({
                imagen: producto.img,
                nombre: producto.titulo,
                precio: producto.precio

            });

            contenedor_carrito.innerHTML = "";
            
            productos_en_carrito.forEach(function (producto) {
    
                let div_carrtio = document.createElement("div");
                div_carrtio.className ="productos_carrito-producto";
                div_carrtio.innerHTML = `<img src=${producto.imagen} class="imagen_producto-carrito" alt="Imagen del producto">
                                        <h2>${producto.nombre}</h2>
                                        <input type="text"  class="cantidad_producto" min="1" value="0">
                                        <h2 class="precio_producto">$${producto.precio}</h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-trash trash_carrito" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>`
            
                contenedor_carrito.append(div_carrtio)
            

            });

            comprar_carrito.innerHTML = "";

            function calcular_total(acu, producto) {
                
                acu = acu + producto.precio
                return acu
            }

            let costo_total = productos_en_carrito.reduce(calcular_total, 0);

            let total_carrito = document.createElement("div");
            total_carrito.className = "total_carrito";
            total_carrito.innerHTML = `<h3>Total</h3>
                                        <h2 id="costo_total">$${costo_total}</h2>`;
            comprar_carrito.append(total_carrito);

            let btn_comprar = document.createElement("button");
            btn_comprar.innerText = "Comprar";
            comprar_carrito.append(btn_comprar);
            
        });

    });

}

cargar_los_productos();

botones_menu_categoria.forEach(function (boton) {

    boton.addEventListener("click", function (e) {

        botones_menu_categoria.forEach(function (boton) {
            
            boton.classList.remove("activo");

        })

        e.target.classList.add("activo");

        if (e.target.id != "todos") {
            
            array_productos = array_productos.filter(function (producto_elegido) {

                return producto_elegido.categoria == e.target.id

            });

            cargar_los_productos(array_productos)

            productos_en_localstorage = localStorage.getItem("productos");
            array_productos = JSON.parse(productos_en_localstorage)

        }else{

            cargar_los_productos(array_productos);

        }

    });
    
});