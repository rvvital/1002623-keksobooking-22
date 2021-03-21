const ALERT_SHOW_TIME = 5000;

//Нахождени случайного целого числа из диапозона включительно
function randomInteger(min, max) {
  if (min < 0 || max <= min) {
    return ('Введите корректный диапазон');
  }
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

//Нахождени случайного дробного числа из диапозона включительно с заданной точностью
function randomFloat(min, max, fixed) {
  if (min < 0 || max <= min) {
    return ('Введите корректный диапазон');
  }
  let rand = min + Math.random() * (max - min);
  return rand.toFixed(fixed);
}

//нахождение случайного элемена массива
const randonElementArray = (arr) => {
  let element = arr[randomInteger(0, arr.length-1)];
  return element;
}

//массив случайной длинный
let randomArray = (arr) => {
  let index = randomInteger(0, arr.length - 1);
  let newarr = arr.slice(index, index + randomInteger(1, arr.length));
  return newarr;
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

export {randomInteger, randomFloat, randonElementArray, randomArray, showAlert};
