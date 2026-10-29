/* =====================================================
   CATÁLOGO: filtros, búsqueda, orden y links a WhatsApp.
   Los datos están en js/productos.js.
   ===================================================== */

function linkWhatsapp(mensaje) {
    return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(mensaje);
}

function formatearPrecio(precio) {
    return "$" + precio.toLocaleString("es-AR");
}

function normalizar(texto) {
    return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

const estado = {
    genero: "",
    busqueda: "",
    orden: "",
    soloDisponibles: false
};

function tarjeta(p) {
    const articulo = document.createElement("article");
    articulo.className = "producto";

    const img = document.createElement("img");
    img.src = "img/productos/" + p.imagen;
    img.alt = p.nombre;
    img.loading = "lazy";
    img.width = 400;
    img.height = 500;

    const stock = document.createElement("span");
    stock.className = "stock " + (p.disponible ? "stock-si" : "stock-consultar");
    stock.textContent = p.disponible ? "Disponible" : "Consultar stock";

    const nombre = document.createElement("h3");
    nombre.textContent = p.nombre;

    const precio = document.createElement("p");
    precio.className = "precio";
    precio.textContent = formatearPrecio(p.precio);

    const boton = document.createElement("a");
    boton.className = "btn btn-consulta";
    boton.href = linkWhatsapp("Hola! Me gustaría consultar por el " + p.nombre + " (" + formatearPrecio(p.precio) + ").");
    boton.target = "_blank";
    boton.rel = "noopener";
    boton.textContent = "Consultar";

    articulo.append(img, stock, nombre, precio, boton);
    return articulo;
}

function render() {
    const texto = normalizar(estado.busqueda.trim());

    let lista = PRODUCTOS.filter(function (p) {
        return (!estado.genero || p.genero === estado.genero || p.genero === "unisex") &&
            (!texto || normalizar(p.nombre).includes(texto)) &&
            (!estado.soloDisponibles || p.disponible);
    });

    if (estado.orden === "menor") lista.sort(function (a, b) { return a.precio - b.precio; });
    if (estado.orden === "mayor") lista.sort(function (a, b) { return b.precio - a.precio; });
    if (estado.orden === "nombre") lista.sort(function (a, b) { return a.nombre.localeCompare(b.nombre, "es"); });

    document.getElementById("productos").replaceChildren.apply(
        document.getElementById("productos"), lista.map(tarjeta));
    document.getElementById("sin-resultados").hidden = lista.length > 0;
    document.getElementById("contador").textContent =
        lista.length + (lista.length === 1 ? " perfume" : " perfumes");
}

document.querySelectorAll(".pestana").forEach(function (boton) {
    boton.addEventListener("click", function () {
        document.querySelectorAll(".pestana").forEach(function (b) { b.classList.remove("activa"); });
        boton.classList.add("activa");
        estado.genero = boton.dataset.genero;
        render();
    });
});

document.getElementById("busqueda").addEventListener("input", function (e) {
    estado.busqueda = e.target.value;
    render();
});

document.getElementById("orden").addEventListener("change", function (e) {
    estado.orden = e.target.value;
    render();
});

document.getElementById("solo-disponibles").addEventListener("change", function (e) {
    estado.soloDisponibles = e.target.checked;
    render();
});

// Todos los links de WhatsApp fijos de la página (header, banner, footer, botón flotante)
document.querySelectorAll("[data-whatsapp]").forEach(function (link) {
    link.href = linkWhatsapp(link.dataset.whatsapp);
    link.target = "_blank";
    link.rel = "noopener";
});

document.getElementById("anio").textContent = new Date().getFullYear();

render();
