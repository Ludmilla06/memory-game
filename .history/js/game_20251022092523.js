
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
const game =document.getElementById('game')

// Créer une section avec une classe de grille
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')

// Attacher la grille au jeu
game.appendChild(grid)
