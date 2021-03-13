import {sendData} from './fetch.js';
//let mainForm = document.querySelector('.ad-form');
//mainForm.classList.add('ad-form--disabled');

const postForm = document.querySelector('.ad-form');

postForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  sendData(formData);

  //document.querySelector('.ad-form').reset(); //сброс формы после отправки
  //document.querySelector('.map__filters').reset(); //сброс фильтра после отправки
});

postForm.addEventListener('reset', () => {
  document.querySelector('.ad-form').reset(); //сброс формы после отправки
  document.querySelector('.map__filters').reset(); //сброс фильтра после отправки
});
