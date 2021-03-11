import{baseMarkerToMap} from './map-marker.js';
import {showAlert} from './utils.js';

const postForm = document.querySelector('.ad-form');


fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((posters) => {
    baseMarkerToMap(posters);
  })
  .catch((err) => {
    showAlert('Не удалось получить данные. Попробуйте ещё раз');
  });


postForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  fetch('https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  );
});


