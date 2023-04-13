"use strict";
var ClasseAliment;
(function (ClasseAliment) {
    ClasseAliment["MAUVAIS"] = "C";
    ClasseAliment["MOYEN"] = "B";
    ClasseAliment["BON"] = "A";
})(ClasseAliment || (ClasseAliment = {}));
;
class Aliment {
    constructor(_nom, _sante, calorie, lipide, glucide, proteine, _image) {
        this._nom = _nom;
        this._sante = _sante;
        this.calorie = calorie;
        this.lipide = lipide;
        this.glucide = glucide;
        this.proteine = proteine;
        this._image = _image;
        Aliment.listeAliments.push(this);
    }
    get nom() { return this._nom; }
    ;
    get sante() { return this._sante; }
    ;
    get image() { return this._image; }
    ;
    set nom(newNom) { this._nom = newNom; }
    ;
    set sante(newSante) { this._sante = newSante; }
    ;
    set image(newImage) { this._image = newImage; }
    ;
}
Aliment.listeAliments = [];
let a1 = new Aliment("Pomme", ClasseAliment.BON, 53, 0.2, 14, 0.3, "pomme.png");
let a2 = new Aliment("Salami", ClasseAliment.MAUVAIS, 270, 26.5, 1.3, 12, "salami.png");
console.log(Aliment.listeAliments);
//# sourceMappingURL=Aliment.class.js.map