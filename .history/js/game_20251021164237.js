
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

const imagesData = [
  { id: 1, label: "Berger Allemand", src: "assets/BA.webp" },
  { id: 2, label: "chien", src: "images/chien.jpg" },
  { id: 3, label: "pomme", src: "images/pomme.jpg" },
  { id: 4, label: "voiture", src: "images/voiture.jpg" },
  { id: 5, label: "maison", src: "images/maison.jpg" },
  { id: 6, label: "fleur", src: "images/fleur.jpg" }
];
]
