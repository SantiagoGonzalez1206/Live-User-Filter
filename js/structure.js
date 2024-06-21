export const structure = async (info) => {
    let plantilla = "";

    for (let i = 0; i < info.length; i++) {
            plantilla += /*html*/`
            <div class="people">
                <img src="${info[i].avatar}" alt="img">
            <div class="text">
                <h3>${info[i].name_full}</h3>
                <p>${info[i].description}</p>
            </div>
            </div> 
            <hr> 
                `;
    }
    return plantilla;
};