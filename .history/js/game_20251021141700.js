// Création du contexte graphique
const canvas = document.getElementById("gameCanvas");
canvas.width = 800;
canvas.height = 850;
const ctx = canvas.getContext("2d"); // Contexte 2D pour le dessin ctx = contexte
const largImg = 120;
const hautImg = 160;
const xO = 10; // Origine X 
const yO = 10; // Origine Y

// Création des images
for (let i=0; i<14; i++) {
    window["img"+i] = new Image();
    window["img"+i].src = "assets/img"+i+".webp";
}

// Stockage des images dans un tableau
const tabImages = [];
for (let i=0; i<14; i++) {
    tabImages[2*i] = window["img"+(i)]; // Image paire
    tabImages[2*i+1] = window["img"+(i)]; // Image impaire
}

// dessin du plateau de jeu
function drawGameBoard() {
    let x = xO;
    let y = yO;
    let imgIndex = 0;
    for (let row=0; row<4; row++) {
        for (let col=0; col<7; col++) {
            ctx.drawImage(tabImages[imgIndex], x, y, largImg, hautImg);
            x += largImg + 10; // Espacement entre les images
            imgIndex++;
        }
        x = xO; // Réinitialiser x pour la nouvelle ligne
        y += hautImg + 10; // Espacement entre les lignes
    }
}



document.getElementById("gameGrid").addEventListener("click", function(event) {
    const target = event.target;    
});