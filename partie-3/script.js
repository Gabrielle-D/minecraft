// SALLE 3 : LES CRÉATURES MYTHIQUES

const page = document.querySelector("body");
const cartes = document.querySelectorAll(".carte");
const boutonsFermer = document.querySelectorAll(".fermer");

cartes.forEach(function (carte) {

  const fiche = carte.querySelector(".fiche");

  carte.addEventListener("mousemove", function (event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    event.currentTarget.style.setProperty("--x", x + "px");
    event.currentTarget.style.setProperty("--y", y + "px");
  });

  carte.addEventListener("click", function () {
    page.append(fiche);
    fiche.classList.add("ouverte");
  });
});

function fermerFiche(event) {
  const fiche = event.currentTarget.closest(".fiche");

  fiche.classList.add("fermeture");

  setTimeout(function () {
    fiche.classList.remove("ouverte");
    fiche.classList.remove("fermeture");
    fiche.remove();
  }, 300);
}

boutonsFermer.forEach(function (bouton) {
  bouton.addEventListener("click", fermerFiche);
});
