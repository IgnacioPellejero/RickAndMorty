
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

sr.reveal(`.home_img`, { origin: "top" }, { delay: 200 },)

const ubicaciones = async ()=>{
const respuesta = await fetch("https://rickandmortyapi.com/api/location")
const datos = await respuesta.json();

datos.forEach(()=> {
    const articulo = document.createRange().createContextualFragment(
` <div class="home_card">
        <h2>${nombre.name}</h2>
        <p>${tipo.type}</p>
        <p>${dimen.dimension}</p>
        <p>${resid.residents}</p>
    </div>
`
    )
    const main = document.querySelector(".home_card");
    main.append(articulo)
})
};
ubicaciones()

