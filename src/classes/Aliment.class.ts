enum ClasseAliment {MAUVAIS="C", MOYEN="B", BON="A"};

class Aliment {

    public static listeAliments: Aliment[] = [];
    
    constructor(
        private _nom: string,
        private _sante: ClasseAliment,
        public readonly calorie: number,
        public readonly lipide: number,
        public readonly glucide: number,
        public readonly proteine: number,
        private _image: string,
    ) {
        Aliment.listeAliments.push(this);
    }

    get nom(): string {return this._nom};
    get sante(): ClasseAliment {return this._sante};
    get image(): string {return this._image};

    set nom(newNom: string) {this._nom = newNom};
    set sante(newSante: ClasseAliment) {this._sante = newSante};
    set image(newImage: string) {this._image = newImage};
}

let a1 = new Aliment("Pomme", ClasseAliment.BON, 53, 0.2, 14, 0.3, "pomme.png");
let a2 = new Aliment("Salami", ClasseAliment.MAUVAIS, 270, 26.5, 1.3, 12, "salami.png");
console.log(Aliment.listeAliments);

