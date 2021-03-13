import{baseMarkerToMap} from './map-marker.js';
import {showAlert} from './utils.js';
import {errorPost} from './modal-error.js';
import {successPost} from './modal-error.js';


//let mainPage = document.querySelector('main');

let getData = function () {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((posters) => {
      baseMarkerToMap(posters);
    })
    .catch(() => {
      showAlert('Не удалось получить данные. Попробуйте ещё раз');
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
      if (response.ok)
      {
        successPost();

        document.querySelector('.ad-form').reset(); //сброс формы после отправки
        document.querySelector('.map__filters').reset(); //сброс фильтра после отправки
      }
      else
      {
        errorPost();
      }
    })
    .catch(() => {
      errorPost();
    });
};

export {getData, sendData};
