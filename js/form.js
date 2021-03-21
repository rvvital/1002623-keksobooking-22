import {sendData} from './fetch.js';

const postForm = document.querySelector('.ad-form');

postForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  sendData(formData);

});

postForm.addEventListener('reset', () => {
  document.querySelector('.ad-form').reset(); //сброс формы после отправки
  document.querySelector('.map__filters').reset(); //сброс фильтра после отправки
});
