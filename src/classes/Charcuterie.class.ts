
class Charcuterie extends Aliment {
    public static listeCharcuterie: Charcuterie[] = [];
    constructor(
        nom: string,
        calorie: number,
        lipide: number,
        glucide: number,
        proteine: number,
        image: string,
    ) {
        super(nom, ClasseAliment.MAUVAIS, calorie, lipide, glucide, proteine, image);
        Charcuterie.listeCharcuterie.push(this);
    }

    public afficherAliment() {
        console.log("Charcuterie : " + this._nom);
        this.afficherValeurNutritive();      
    }
}