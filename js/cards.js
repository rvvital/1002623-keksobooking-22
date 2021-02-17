import{generateTestObjects} from './test-data.js';

let testObjectsArr = generateTestObjects();
// Контейнер для объявлений
let cardContainer = document.querySelector('.map__canvas');
//Коллекция всех объявлений
//let cards = cardContainer.children;
//Шаблон для объявлений
let cardTemplate = document.querySelector('#card').content;
let newCardTemplate = cardTemplate.querySelector('.popup');
let TypeOfHouses = {
  'flat': 'Квартира',
  'bungalo': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
};

let createFragmentPhotos = function (photoArr) {
  let fragmentPhotos = document.createDocumentFragment();
  for (let i = 0; i < photoArr.length; i++) {
    let img = document.createElement('img');
    img.src = photoArr[i];
    img.width = 100;
    img.height = 100;

    img.classList.add('popup__photo');
    fragmentPhotos.appendChild(img);
  }
  return fragmentPhotos;
};

let getCard = function (obj) {
  // Клонируем шаблон объявления
  let newCard = newCardTemplate.cloneNode(true);
  // Отрисовка
  newCard.querySelector('.popup__title').textContent = obj.offer.title;
  newCard.querySelector('.popup__text--address').textContent = obj.offer.address;
  newCard.querySelector('.popup__text--price').textContent = obj.offer.price + ' ₽/ночь';
  newCard.querySelector('.popup__type').textContent = TypeOfHouses[obj.offer.type];
  newCard.querySelector('.popup__text--capacity').textContent = obj.offer.rooms + ' комнаты для ' + obj.offer.guests + ' гостей';
  newCard.querySelector('.popup__text--time').textContent = 'Заезд после ' + obj.offer.checkin + ', выезд до ' + obj.offer.checkout;
  newCard.querySelector('.popup__features').textContent = obj.offer.features.join(', ');
  newCard.querySelector('.popup__description').textContent = obj.offer.description;
  newCard.querySelector('.popup__photos').innerHTML = '';
  newCard.querySelector('.popup__photos').appendChild(createFragmentPhotos(obj.offer.photos));
  newCard.querySelector('.popup__avatar').src = obj.author.avatar;

  // Добавляем объявление на страницу
  cardContainer.appendChild(newCard);
  return newCard;
}

let randomCard = getCard(testObjectsArr[1]);

export {randomCard};
