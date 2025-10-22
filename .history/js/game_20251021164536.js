
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
  { id: 2, label: "Chien Assis", src: "assets/chienassis.webp" },
  { id: 3, label: "Chiot", src: "assets/chiot.webp" },
  { id: 4, label: "Labrador", src: "assets/labrador.webp" },
  { id: 5, label: "Malinois", src: "assets/malinois.webp" },
  { id: 6, label: "Rottweiler", src: "assets/rott.webp" }
];
]
