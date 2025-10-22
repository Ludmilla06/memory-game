
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
  { id: 1, label: "chat", image: "asset/11.webp" },
  { id: 2, label: "chien", image: "chien.jpg" },
  { id: 3, label: "chat", image: "chat.jpg" },
  { id: 4, label: "chien", image: "chien.jpg" },
  { id: 5, label: "chat", image: "chat.jpg" },
  { id: 6, label: "chien", image: "chien.jpg" },
  
]
