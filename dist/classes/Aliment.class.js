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
    afficherValeurNutritive() {
        console.log("Valeurs nutritionnelles : ");
        console.log("Lipide : " + this.lipide);
        console.log("Glucide : " + this.glucide);
        console.log("Protéine : " + this.proteine);
    }
}
Aliment.listeAliments = [];
//# sourceMappingURL=Aliment.class.js.map