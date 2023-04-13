
new Fruit("Pomme", 53, 0.2, 14, 0.3, "pomme.png");
new Fruit("Poire", 45, 0.4, 13, 0.1, "poire.png");
new Charcuterie("Salami", 270, 26.5, 1.3, 12, "salami.png");
new Charcuterie("Saucisson", 370, 36.5, 2.2, 15, "saucisson.png");

for(let aliment of Aliment.listeAliments) {
    aliment.afficherAliment();
    console.log("--------------------------");
    
}
