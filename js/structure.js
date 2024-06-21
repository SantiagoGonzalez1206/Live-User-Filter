export const structure = async (info) => {
    let plantilla = "";

    for (let i = 0; i < info.length; i++) {
            plantilla += /*html*/`
            <div class="info_person">
                <div>
                    <img src="${info[i].avatar}" alt="img">
                </div> 
                <div class="text">
                    <h3>${info[i].name_full}</h3>
                    <div class="description">
                        <p>${info[i].description}</p>
                    </div>
                </div>
            </div>
            <hr> 
                `;
    }
    return plantilla;
};