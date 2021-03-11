import{baseMarkerToMap} from './map-marker.js';
import {showAlert} from './utils.js';


let getData = function () {
fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((posters) => {
    baseMarkerToMap(posters);
  })
  .catch((err) => {
    showAlert('Не удалось получить данные. Попробуйте ещё раз');
  });
}

let sendData = function (data) {

  fetch('https://22.javascript.pages.academy/keksobooking',
  {
    method: 'POST',
    body: data,
  },
);
};
export {getData, sendData};
