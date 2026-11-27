// SALLE 1 : MINERAIS ET MATÉRIAUX

// 1. Je récupère les éléments avec querySelector / querySelectorAll
const page = document.querySelector("body");
const cartes = document.querySelectorAll(".carte");
const boutonsFermer = document.querySelectorAll(".fermer");

// 2. Pour chaque carte (forEach)
cartes.forEach(function (carte) {

  // La fiche (pop-up) de cette carte : je la garde en mémoire
  const fiche = carte.querySelector(".fiche");

  // Effet de lumière : position de la souris DANS la carte
  carte.addEventListener("mousemove", function (event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    event.currentTarget.style.setProperty("--x", x + "px");
    event.currentTarget.style.setProperty("--y", y + "px");
  });

  // Clic sur la carte : j'ouvre la fiche
  carte.addEventListener("click", function () {
    // append() déplace la fiche dans le body (elle n'est pas dupliquée)
    page.append(fiche);
    fiche.classList.add("ouverte");
  });
});

// 3. Fermeture : animation de fermeture puis remove()
function fermerFiche(event) {
  // closest() remonte du bouton jusqu'à sa fiche
  const fiche = event.currentTarget.closest(".fiche");

  fiche.classList.add("fermeture");

  // J'attends la fin de l'animation (0,3 seconde) avant de nettoyer le DOM
  setTimeout(function () {
    fiche.classList.remove("ouverte");
    fiche.classList.remove("fermeture");
    fiche.remove();
  }, 300);
}

boutonsFermer.forEach(function (bouton) {
  bouton.addEventListener("click", fermerFiche);
});
