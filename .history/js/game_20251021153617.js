
// Target btn reset
const $resetBtn = document.getElementById('reset-btn')
// Prévoit la detection du click sur le btn
$resetBtn.addEventListener('click', resetGame)




document.addEventListener('keydown', (event) => {
  if (event.key === 'Space') {
    // lancer le jeu
    resetGame();
  }
});

function resetGame() {
// Logique pour réinitialiser le jeu
console.log('Jeu réinitialisé');
}