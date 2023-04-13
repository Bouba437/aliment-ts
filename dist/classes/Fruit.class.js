"use strict";
class Fruit extends Aliment {
    constructor(nom, calorie, lipide, glucide, proteine, image) {
        super(nom, ClasseAliment.BON, calorie, lipide, glucide, proteine, image);
        Fruit.listeFruit.push(this);
    }
    afficherAliment() {
        console.log("Fruit : " + this._nom);
        this.afficherValeurNutritive();
    }
}
Fruit.listeFruit = [];
//# sourceMappingURL=Fruit.class.js.map