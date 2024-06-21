import { getAllInfo } from "./apps.js";
import { structure } from "./structure.js";

let searchbar = document.querySelector("#searchbar")
let main_info = document.querySelector(".infor");


addEventListener("DOMContentLoaded", async()=>{
    let info = await getAllInfo()
    console.log(info);

    main_info.innerHTML = await structure(info)

    searchbar.addEventListener("input", async e => {
        
        const validation = e.target.value.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Obtener el valor del input y convertirlo a minusculas y sin espacios

        const filteredProfiles = info.filter(person => {
            return person.name_full.toLowerCase().includes(validation) || person.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(validation)  ; // Comparar si el nombre de la persona incluye el termino de busqueda
        });
    
        main_info.innerHTML = await structure(filteredProfiles);

    });
})


