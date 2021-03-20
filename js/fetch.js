import './map-marker.js';

import { showAlert } from './utils.js';
import { errorPost } from './modal-error.js';
import { successPost } from './modal-error.js';


let getData = function (onSuccess, onError) {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((posters) => {
      onSuccess(posters);

      /*  baseMarkerToMap(posters);


      let filterTypeFlat = document.querySelector('#housing-type');


      filterTypeFlat.addEventListener('change', (evt) => {
        const filterTypeFlatValue = evt.target.value;

        let res = posters.filter((poster) => ((poster.offer.type === filterTypeFlatValue) || filterTypeFlatValue === 'any'));

        baseMarkerToMap(res.slice(0, 10));
      });
*/
    })
    .catch(() => {
      onError(showAlert('Не удалось получить данные. Попробуйте ещё раз'));
      // showAlert('Не удалось получить данные. Попробуйте ещё раз');
    });




}


















let sendData = function (data) {

  fetch('https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: data,
    },
  )
    .then((response) => {
      if (response.ok) {
        successPost();

        document.querySelector('.ad-form').reset(); //сброс формы после отправки
        document.querySelector('.map__filters').reset(); //сброс фильтра после отправки
      }
      else {
        errorPost();
      }
    })
    .catch(() => {
      errorPost();
    });
};

export { getData, sendData };
