/* global L:readonly */

let markerBase;


let mainForm = document.querySelector('.ad-form');
let adFormHeader = document.querySelector('.ad-form-header');
let adFormElements = document.querySelectorAll('.ad-form__element');
let mapFilters = document.querySelector('.map__filters');
let mapFilter = document.querySelectorAll('.map__filter');
let mapFeatures = document.querySelector('.map__features');
let inputAdress = document.querySelector('#address');

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

const map = L.map('map-canvas')
  .on('load', () => {
    mainForm.classList.remove('ad-form--disabled');
    adFormHeader.removeAttribute('disabled');
    adFormElements.forEach((element) => {
      element.removeAttribute('disabled');
    });
    inputAdress.setAttribute('readonly', 'readonly');
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

markerBase = L.layerGroup().addTo(map);


const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

let mainPinMarker = L.marker(
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

mainPinMarker.on('move', (evt) => {
  let coordinates = evt.target.getLatLng();
  inputAdress.setAttribute('value', (coordinates.lat.toFixed(5) + ', ' + coordinates.lng.toFixed(5)));
});


let buttonReset = document.querySelector('.ad-form__reset');
buttonReset.addEventListener('click', () => {
  mainPinMarker.setLatLng([35.66872, 139.75355]).update();
});


let buttonSend = document.querySelector('.ad-form__submit');
buttonSend.addEventListener('click', () => {
  mainPinMarker.setLatLng([35.66872, 139.75355]).update();
});


const baseIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

let baseMarkerToMap = (arrayPosts) => {
  if (!markerBase) {markerBase = L.layerGroup().addTo(map)}

  markerBase.clearLayers();
  arrayPosts.forEach ((element) => {

    let createCustomPopup = () => {
      let balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
      let popupElement = balloonTemplate.cloneNode(true);

      popupElement.querySelector('.popup__avatar').src = element.author.avatar;

      popupElement.querySelector('.popup__title').textContent = element.offer.title;
      popupElement.querySelector('.popup__text--address').textContent = element.offer.address;
      popupElement.querySelector('.popup__text--price').textContent = `${element.offer.price} ₽/ночь`;
      popupElement.querySelector('.popup__type').textContent = element.offer.type;
      popupElement.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;
      popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;
      popupElement.querySelector('.popup__features').textContent = element.offer.features;
      popupElement.querySelector('.popup__description').textContent = element.offer.description;
      popupElement.querySelector('.popup__photo').src = element.offer.photos;

      return popupElement;
    };

    let baseMarker = L.marker(
      {
        lat: element.location.lat,
        lng: element.location.lng,
      },
      {
        icon: baseIcon,
      },
    );

    baseMarker.addTo(markerBase)
      .bindPopup(createCustomPopup(),
        {
          keepInView: true,
        },
      );
  });
}

export {baseMarkerToMap};
