
// Target btn reset
const $resetBtn = document.getElementById('reset-btn')
// Prévoit la detection du click sur le btn
$resetBtn.addEventListener('click', resetGame)

function resetGame() {
  // Logique pour réinitialiser le jeu
  console.log('Jeu réinitialisé');
}



document.addEventListener('keydown', (event) => {
  console.log(event);
  
  if (event.key === ' ') {
    // lancer le jeu
    resetGame();
  } else   console.log('raté');

});

const cardsArray = [
  { name: "Berger Allemand", img: "assets/BA.webp" },
  { name: "Chien Assis", img: "assets/chienassis.webp" },
  { name: "Chiot", img: "assets/chiot.webp" },
  { name: "Labrador", img: "assets/labrador.webp" },
  { name: "Malinois", img: "assets/malinois.webp" },
  { name: "Rottweiler", img: "assets/rott.webp" },
];

// Récupérez le div avec un identifiant root
const game = document.getElementById('game')

// Créer une section avec une classe de grille
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')

// Attacher la grille au jeu
game.appendChild(grid)

// Dupliquer le tableau pour créer une correspondance pour chaque carte
let gameGrid = cardsArray.concat(cardsArray) // concat permet de fusionner deux tableaux

// Randomiser la grille de jeu à chaque chargement de la page
gameGrid.sort(() => 0.5 - Math.random()) 
// La méthode sort() trie les éléments d'un tableau et renvoie le tableau trié. La fonction de comparaison fournie détermine l'ordre de tri. 
// Ici, elle génère un nombre aléatoire entre -0.5 et 0.5, ce qui entraîne un ordre aléatoire des éléments du tableau.

// Puis créer les cartes avec le tableau dupliqué (gameGrid au lieu de cardsArray)
gameGrid.forEach((item) => {
// Créer une div 
const card = document.createElement('div')

// Appliquer une classe de carte à ce div
 card.classList.add('card')

// Définissez l'attribut data-name du div sur le nom cardsArray 
 card.dataset.name = item.name

 // Appliquer l'image d'arrière-plan du div à l'image cardsArray
 card.style.backgroundImage = `url(${item.img})` //on va appeler l'image à partir du tableau cardsArray

 // Ajouter le div à la section de grille
 grid.appendChild(card)
})



