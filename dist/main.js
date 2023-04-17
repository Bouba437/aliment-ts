"use strict";
new Fruit("Pomme", 53, 0.2, 14, 0.3, "pomme.png");
new Fruit("Poire", 45, 0.4, 13, 0.1, "poire.png");
new Charcuterie("Salami", 270, 26.5, 1.3, 12, "salami.png");
new Charcuterie("Saucisson", 370, 36.5, 2.2, 15, "saucisson.png");
listeAliment();
function listeAliment() {
    const typeAlimentSouhaite = document.querySelector("#type").value;
    console.log(typeAlimentSouhaite);
    const baliseTbody = document.querySelector("#listeAliments");
    let listeAlimentBalise = "";
    for (let aliment of Aliment.listeAliments) {
        listeAlimentBalise += `
            <tr>
                <td>${aliment.nom}</td>
                <td>${aliment.lipide}</td>
                <td>${aliment.glucide}</td>
                <td>${aliment.proteine}</td>
                <td>${aliment.sante}</td>
                <td><img src="images/${aliment.image}" width="100px" /></td>
            </tr>
        `;
    }
    baliseTbody.innerHTML = listeAlimentBalise;
}
//# sourceMappingURL=main.js.map