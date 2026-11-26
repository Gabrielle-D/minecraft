// =========================================================
// SCRIPT – PAGE D'ACCUEIL
// =========================================================

// 1. Je récupère les éléments de la page avec querySelector / querySelectorAll
const compteur = document.querySelector(".compteur");
const vitrine = document.querySelector(".vitrine");
const felicitations = document.querySelector(".felicitations");
const cartes = document.querySelectorAll(".carte");
const tresors = document.querySelectorAll(".tresor");

let nombre = 0;

// 2. Effet de lumière : la souris se déplace sur une carte
//    getBoundingClientRect() + clientX - rect.left = position DANS la carte
cartes.forEach(function (carte) {
  carte.addEventListener("mousemove", function (event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // J'envoie ces valeurs au CSS sous forme de variables
    event.currentTarget.style.setProperty("--x", x + "px");
    event.currentTarget.style.setProperty("--y", y + "px");
  });
});

// 3. Clic sur un trésor : il est découvert et rejoint la vitrine
tresors.forEach(function (tresor) {
  tresor.addEventListener("click", function (event) {
    const tresorClique = event.currentTarget;

    // Si le trésor est déjà découvert, on ne le compte pas deux fois
    if (tresorClique.classList.contains("decouvert")) {
      return;
    }

    tresorClique.classList.add("decouvert");

    // append() déplace le trésor dans la vitrine (sans le dupliquer)
    vitrine.append(tresorClique);

    nombre = nombre + 1;
    compteur.textContent = nombre + " / " + tresors.length;

    // Tous les trésors trouvés : on affiche le message de félicitations
    if (nombre === tresors.length) {
      felicitations.classList.add("visible");
    }
  });
});
