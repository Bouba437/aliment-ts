"use strict";
class Charcuterie extends Aliment {
    constructor(nom, calorie, lipide, glucide, proteine, image) {
        super(nom, ClasseAliment.MAUVAIS, calorie, lipide, glucide, proteine, image);
        Charcuterie.listeCharcuterie.push(this);
    }
    afficherAliment() {
        console.log("Charcuterie : " + this._nom);
        this.afficherValeurNutritive();
    }
}
Charcuterie.listeCharcuterie = [];
//# sourceMappingURL=Charcuterie.class.js.map