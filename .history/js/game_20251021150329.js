document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
  // lancer le jeu
  resetGame();
  }
});

export function resetGame() {
// Logique pour réinitialiser le jeu
console.log('Jeu réinitialisé');
}