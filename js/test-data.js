import {randomInteger, randomFloat, randonElementArray, randomArray} from './utils.js';

const quantityObject = 10;

const avatarNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const titlePosts = ['Вилла на побережье', 'Общага в промзоне', 'Хостел в центре'];
const priceMin = 100;
const priceMax = 10000;
const type= ['palace', 'flat', 'house', 'bungalow'];
const roomMin = 1;
const roomMax = 5;
const guestMin = 1;
const guestMax = 10;
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const description = ['Тут вы найдёте всё что нужно для вашего отдыха', 'Для тех кто хочет выживать', 'Райское место'];
const photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const locationMinX = 35.65000;
const locationMaxX = 35.70000;
const locationMinY = 139.70000;
const locationMaxY = 139.80000;

const creatObject = function () {
  let locationX = (randomFloat(locationMinX, locationMaxX, 5));
  let locationY = (randomFloat(locationMinY, locationMaxY, 5));
  return {
    author: {
      avatar: 'img/avatars/user0' + randonElementArray(avatarNumbers) + '.png',
    },

    offer: {
      title: randonElementArray(titlePosts),
      address: locationX + ', ' + locationY,
      price: randomInteger(priceMin, priceMax),
      type: randonElementArray(type),
      rooms: randomInteger(roomMin, roomMax),
      guests: randomInteger(guestMin, guestMax),
      checkin: randonElementArray(checkin),
      checkout: randonElementArray(checkout),
      features: randomArray(features),
      description: randonElementArray(description),
      photos: randomArray(photos),
    },

    location: {
      x: locationX,
      y: locationY,
    },
  }
};

let testObjects = function () {
  let objects = [];
  for (let i = 0; i < quantityObject; i++) {
    objects.push(creatObject());
  }
  return objects;
};

testObjects();

