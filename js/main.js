/* global L:readonly */
import{generateTestObjects} from './test-data.js';

let mainForm = document.querySelector('.ad-form');
let adFormHeader = document.querySelector('.ad-form-header');
let adFormElements = document.querySelectorAll('.ad-form__element');
let mapFilters = document.querySelector('.map__filters');
let mapFilter = document.querySelectorAll('.map__filter');
let mapFeatures = document.querySelector('.map__features');
let inputAdress = document.querySelector('#address');
//Делаем форму неактивной
mainForm.classList.add('ad-form--disabled');
adFormHeader.setAttribute('disabled', 'disabled');
adFormElements.forEach((element) => {
  element.setAttribute('disabled', 'disabled');
});
mapFilters.classList.add('ad-form--disabled');
mapFilter.forEach((element) => {
  element.setAttribute('disabled', 'disabled');
});
mapFeatures.setAttribute('disabled', 'disabled');

//Добавляем главный маркер
const map = L.map('map-canvas')
  .on('load', () => {
    mainForm.classList.remove('ad-form--disabled');
    adFormHeader.removeAttribute('disabled');
    adFormElements.forEach((element) => {
      element.removeAttribute('disabled');
    });
    inputAdress.setAttribute('disabled', 'disabled');
    mapFilters.classList.remove('ad-form--disabled');
    mapFilter.forEach((element) => {
      element.removeAttribute('disabled');
    });
    mapFeatures.removeAttribute('disabled');
  })
  .setView({
    lat: 35.66872,
    lng: 139.75355,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.66872,
    lng: 139.75355,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

inputAdress.setAttribute('value', (mainPinMarker.getLatLng().lat.toFixed(5) + ', ' + mainPinMarker.getLatLng().lng.toFixed(5)));

mainPinMarker.on('moveend', (evt) => {
  let coordinates = evt.target.getLatLng();
  inputAdress.setAttribute('value', (coordinates.lat.toFixed(5) + ', ' + coordinates.lng.toFixed(5)));
});

////////////////////////

const baseIcon = L.icon({
  iconUrl: '../../img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

let baseMarkerToMap = function (array) {


  array.forEach ((element) => {
    const createCustomPopup = () => `<section>
    <h3 >${element.offer.title}</h3>
    <p>Координаты: ${element.offer.address}</p>
    <p>Цена: ${element.offer.price}</p>
    <p>Тип: ${element.offer.type}</p>
    <p>Комнат: ${element.offer.rooms}</p>
    <p>Гостей: ${element.offer.guests}</p>
    <p>Удобства: ${element.offer.features}</p>
    <p>Примечание: ${element.offer.description}</p>
  </section>`;

    const baseMarker = L.marker(
      {
        lat: element.location.x,
        lng: element.location.y,
      },
      {
        icon: baseIcon,
      },
    );

    baseMarker.addTo(map)
      .bindPopup(createCustomPopup(generateTestObjects()),
        {
          keepInView: true,
        },
      );
  });
}

baseMarkerToMap(generateTestObjects());
