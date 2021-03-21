import './map-marker.js';
import { showAlert } from './utils.js';
import { errorPost } from './modal-error.js';
import { successPost } from './modal-error.js';


let getData = (onSuccess, onError) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((posters) => {
      onSuccess(posters);
    })
    .catch(() => {
      onError(showAlert('Не удалось получить данные. Попробуйте ещё раз'));
    });
}

let sendData = (data) => {

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
