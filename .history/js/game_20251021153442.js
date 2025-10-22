
// Target btn reset
const $resetBtn = document.getElementById('reset-btn')
$resetBtn.addEventListener('click', resetGame)




document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
  // lancer le jeu
  
  resetGame();
  }
});

function resetGame() {
// Logique pour réinitialiser le jeu
console.log('Jeu réinitialisé');
}