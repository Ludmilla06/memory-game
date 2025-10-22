// Target btn reset
const $resetBtn = document.getElementById("reset-btn");
// Prévoit la detection du click sur le btn
$resetBtn.addEventListener("click", resetGame);

function resetGame() {
  // Logique pour réinitialiser le jeu
  console.log("Jeu réinitialisé");
}

// Écouter les événements de la touche espace pour réinitialiser le jeu
document.addEventListener("keydown", (event) => {
  console.log(event);

  if (event.key === " ") {
    // lancer le jeu
    resetGame();
  } else console.log("raté");
});

// Autoriser uniquement la sélection de deux cartes à la fois
let count = 0; // Compteur pour suivre le nombre de cartes sélectionnées

// Ajouter des variables pour suivre les premières et deuxièmes sélections
let firstGuess = "";
let secondGuess = "";

// Tableau des cartes
const cardsArray = [
  { name: "Berger Allemand", img: "assets/BA.webp" },
  { name: "Chien Assis", img: "assets/chienassis.webp" },
  { name: "Chiot", img: "assets/chiot.webp" },
  { name: "Labrador", img: "assets/labrador.webp" },
  { name: "Malinois", img: "assets/malinois.webp" },
  { name: "Rottweiler", img: "assets/rott.webp" },
];

// Récupérez le div avec un identifiant root
const game = document.getElementById("game");

// Créer une section avec une classe de grille
const grid = document.createElement("section");
grid.setAttribute("class", "grid");

// Attacher la grille au jeu
game.appendChild(grid);

// Dupliquer le tableau pour créer une correspondance pour chaque carte
let gameGrid = cardsArray.concat(cardsArray); // concat permet de fusionner deux tableaux

// Randomiser la grille de jeu à chaque chargement de la page
gameGrid.sort(() => 0.5 - Math.random());
// La méthode sort() trie les éléments d'un tableau et renvoie le tableau trié. La fonction de comparaison fournie détermine l'ordre de tri.
// Ici, elle génère un nombre aléatoire entre -0.5 et 0.5, ce qui entraîne un ordre aléatoire des éléments du tableau.

// Puis créer les cartes avec le tableau dupliqué (gameGrid au lieu de cardsArray)
gameGrid.forEach((item) => {
  const card = document.createElement("div"); // Créer une div pour chaque carte

  card.classList.add("card"); // Appliquer une classe de carte à ce div

  card.dataset.name = item.name; // Définissez l'attribut data-name du div sur le nom cardsArray

  // Appliquer l'image d'arrière-plan du div à l'image cardsArray
  card.style.backgroundImage = `url(${item.img})`; //on va appeler l'image à partir du tableau cardsArray

  grid.appendChild(card); // Ajouter le div à la section de grille
});

// Ajouter un CSS de correspondance
const match = () => {
  const selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.add("match"); // Ajouter la classe de correspondance
  });
};

// Ajouter un écouteur d'événements à la grille
grid.addEventListener("click", function (event) {
  // Définir clicked en premier
  let clicked = event.target;

  // Ne pas autoriser la sélection de la section de grille elle-même ;
  // sélectionner uniquement les divs à l'intérieur de la grille
  if (clicked.nodeName === "SECTION" || clicked === previousTarget) {
    return;
  }

  // Ne pas permettre de cliquer sur une carte déjà matchée
  if (clicked.classList.contains("match")) {
    return;
  }
  // Ne pas permettre de cliquer sur une carte déjà sélectionnée
  if (clicked.classList.contains("selected")) {
    return;
  }

  // Vérifier le compteur et ajouter la classe sélectionnée si moins de 2 cartes sont sélectionnées
  if (count < 2) {
    count++;
    clicked.classList.add("selected"); // Une seule carte peut être sélectionnée à la fois

    // Enregistrer la première ou deuxième supposition
    if (count === 1) {
      firstGuess = clicked.dataset.name;
    } else {
      secondGuess = clicked.dataset.name;
    }
  }

  // Si les deux suppositions sont complètes
  if (firstGuess !== "" && secondGuess !== "") {
    // et la première supposition correspond à la deuxième correspondance...
    if (firstGuess === secondGuess) {
      // exécuter la fonction de correspondance
      match();
      resetGuesses();
    } else {
      // Sinon réinitialiser les suppositions après un court délai
      setTimeout(() => {
        resetGuesses();
      }, 1000);
    }
  }
  // Définir la cible précédente sur cliquée
  previousTarget = clicked;

    // Réinitialiser pour la prochaine paire
    const resetGuesses = () => {
      firstGuess = "";
      secondGuess = "";
      count = 0;
      // Retirer la classe 'selected' des cartes non matchées
      const selected = document.querySelectorAll(".selected");
      selected.forEach((card) => {
        card.classList.remove("selected");
      });
    };
  }
);
