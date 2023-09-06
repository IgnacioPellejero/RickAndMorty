
const menu = document.getElementById("nav-menu")

const boton = document.getElementById("check-icon");

boton.addEventListener("click", () => {
    menu.classList.toggle("active")

});


const sr = ScrollReveal({
    distance: "100px",
    duration: 3000
})

sr.reveal(`.home_data`, { delay: 200 })
sr.reveal(`.home_img`, { origin: "top" }, { delay: 200 },);
sr.reveal(`.home_dat`, { origin: "bottom" }, { delay: 200 },);

sr.reveal(`.home_pers`, { origin: "bottom" }, { delay: 200 },);

const ubicaciones = async () => {
    const respuesta = await fetch("https://rickandmortyapi.com/api/location");
    const datos = await respuesta.json();

    // Debes recorrer la matriz 'results' dentro de 'datos'
    datos.results.forEach((ubicacion) => {
        const nombre = ubicacion.name;
        const tipo = ubicacion.type;
        const dimen = ubicacion.dimension;


        // Debes crear un nuevo elemento div para cada ubicación
        const articulo = document.createElement("div");
        articulo.classList.add("card");
        articulo.innerHTML = `
            <h2>${nombre}</h2>
            <p>${tipo}</p>
            <p>${dimen}</p>

        `;

        const main = document.querySelector(".home_dat"); // Usar la clase correcta
        main.appendChild(articulo); // Usar appendChild para agregar elementos al contenedor
    });
};

ubicaciones();


const personajes = async () => {
    const respuesta = await fetch("https://rickandmortyapi.com/api/character");
    const datos = await respuesta.json();

    // Debes recorrer la matriz 'results' dentro de 'datos'
    datos.results.forEach((personajes) => {
        const nombre = personajes.name;
        const img = personajes.image;
        const estado = personajes.status;
        const especie = personajes.species;
        const genero = personajes.gender;


        // Debes crear un nuevo elemento div para cada ubicación
        const articulo = document.createElement("div");
        articulo.classList.add("card");
        articulo.innerHTML = `
            <h2>${nombre}</h2>
            <img src="${img}" alt="">
            <p>${estado}</p>
            <p>${especie}</p>
            <p>${genero}</p>
        `;

        const main = document.querySelector(".home_pers"); // Usar la clase correcta
        main.appendChild(articulo); // Usar appendChild para agregar elementos al contenedor
    });
};

personajes();