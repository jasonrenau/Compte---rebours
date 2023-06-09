// récupérer mes constantes
const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const mins = document.querySelector('.mins');
const second = document.querySelector('.second');

// date à laquel l'offre se termine
const dateTimer = new Date(2023, 05, 26, 19, 30, 0).getTime();

function compteur() {
  const dateToday = new Date().getTime();
  let reste = dateTimer - dateToday;
  let secondes = Math.floor((reste / 1000) % 60);
  let minutes = Math.floor((reste / 1000 / 60) % 60);
  let heures = Math.floor((reste / (1000 * 60 * 60)) % 24);
  let jours = Math.floor(reste / (1000 * 60 * 60 * 24));

  const elements = document.querySelectorAll('.time');

  second.innerHTML = secondes;
  mins.innerHTML = minutes;
  hour.innerHTML = heures;
  day.innerHTML = jours;
  // si un element est à moins de 10 j'ajoute un zero
  elements.forEach(function (element) {
    if (element.children[0].textContent < 10) {
      element.children[0].textContent = `0 ${element.children[0].textContent}`;
    }
  });

  // s'il reste zero j'affiche une banniere de fin
  const timer = document.querySelector('.timer');
  if (reste < 0) {
    clearInterval(lance);
    const span = document.createElement('span');
    span.classList.add('fin');
    span.textContent = 'La promotion est terminer';
    timer.append(span);
  }
}

const lance = setInterval(compteur, 1000);
