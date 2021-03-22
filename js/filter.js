/* global _:readonly */
import { baseMarkerToMap } from './map-marker.js';

const TIME_DEBOUNCE = 500;

let allForm = document.querySelector('.map__filters');


const setFilterForm = (posters) => {
  allForm.addEventListener('change', (_.debounce((
    () => {
      let checkTypeValue = (poster) => {
        let filterTypeFlatValue = allForm.querySelector('#housing-type').value;
        return (poster.offer.type === filterTypeFlatValue) || filterTypeFlatValue === 'any';
      };

      let checkRoomsValue = (poster) => {
        let filterRoomsValue = allForm.querySelector('#housing-rooms').value;
        return (poster.offer.rooms === +filterRoomsValue) || filterRoomsValue === 'any';
      };

      let checkGuestsValue = (poster) => {
        let filterGuestsValue = allForm.querySelector('#housing-guests').value;
        return (poster.offer.guests === +filterGuestsValue) || filterGuestsValue === 'any';
      };

      let checkPriceValue = (poster) => {
        let filterPriceValue = allForm.querySelector('#housing-price').value;
        switch (filterPriceValue) {
          case 'middle':
            return poster.offer.price >= 10000 && poster.offer.price < 50000;
          case 'low':
            return (poster.offer.price < 10000);
          case 'high':
            return (poster.offer.price >= 50000);
          default:
            return filterPriceValue === 'any';
        }
      }

      let features = document.querySelector('#housing-features');
      let checkFeatures = (poster) => {
        let checkedElem = features.querySelectorAll('input:checked');

        let checkedFeatures = [].map.call(checkedElem, function (input) {
          return input.value;
        });

        return checkedFeatures.every(function (elem) {
          return poster.offer.features.includes(elem);
        });
      };

      let checkedFilter = posters.filter((poster) =>
        (checkTypeValue(poster) && checkRoomsValue(poster)
        && checkGuestsValue(poster) && checkPriceValue(poster) && checkFeatures(poster)
        && checkFeatures(poster)
        ));
      baseMarkerToMap(checkedFilter.slice(0, 10));
    }), TIME_DEBOUNCE)));
};

export { setFilterForm }
