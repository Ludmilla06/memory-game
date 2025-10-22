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




document.getElementById("gameGrid").addEventListener("click", function(event) {
    const target = event.target;    
});