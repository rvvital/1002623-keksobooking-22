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




const baseMarkerToMap = (arrayPosts) => {
  if (!markerBase) { markerBase = L.layerGroup().addTo(map) }
  markerBase.clearLayers();
  arrayPosts.forEach((element) => {

    let createFragmentPhotos = function (photos) {
      let fragmentPhotos = document.createDocumentFragment();
      photos.forEach(function (photo) {
        let img = document.createElement('img');
        img.src = photo;
        img.width = 45;
        img.height = 45;
        img.classList.add('popup__photo');
        fragmentPhotos.appendChild(img);
      });
      return fragmentPhotos;
    };

    let createCustomPopup = () => {


      let balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
      let popupElement = balloonTemplate.cloneNode(true);
      if (element.author.avatar) {
        popupElement.querySelector('.popup__avatar').src = element.author.avatar;
      }
      else { popupElement.querySelector('.popup__avatar').remove(); }

      if (element.offer.title) {
        popupElement.querySelector('.popup__title').textContent = element.offer.title;
      }
      else { popupElement.querySelector('.popup__title').remove(); }

      if (element.offer.address) {
        popupElement.querySelector('.popup__text--address').textContent = element.offer.address;
      }
      else { popupElement.querySelector('.popup__text--address').remove(); }

      if (element.offer.price) {
        popupElement.querySelector('.popup__text--price').textContent = `${element.offer.price} ₽/ночь`;
      }
      else { popupElement.querySelector('.popup__text--price').remove(); }

      if (element.offer.type) {
        popupElement.querySelector('.popup__type').textContent = element.offer.type;
      }
      else { popupElement.querySelector('.popup__type').remove(); }

      if (element.offer.rooms && element.offer.guests) {
        popupElement.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`;
      }
      else { popupElement.querySelector('.popup__text--capacity').remove(); }

      if (element.offer.checkin && element.offer.checkout) {
        popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`;
      }
      else { popupElement.querySelector('.popup__text--time').remove(); }

      if (element.offer.features.length > 0) {
        popupElement.querySelector('.popup__features').textContent = element.offer.features;
      }
      else { popupElement.querySelector('.popup__features').remove(); }

      if (element.offer.description) {
        popupElement.querySelector('.popup__description').textContent = element.offer.description;
      }
      else { popupElement.querySelector('.popup__description').remove(); }


      if (element.offer.photos.length > 0) {
        let templateImg = popupElement.querySelector('.popup__photo');
        templateImg.remove();
        popupElement.querySelector('.popup__photos').appendChild(createFragmentPhotos(element.offer.photos));
      }
      else { popupElement.querySelector('.popup__photos').remove(); }


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

export { baseMarkerToMap };
