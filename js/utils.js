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
const randonElementArray = function (arr) {
  let element = arr[randomInteger(0, arr.length-1)];
  return element;
}

//массив случайной длинный
let randomArray = function (arr) {
  let index = randomInteger(0, arr.length - 1);
  let newarr = arr.slice(index, index + randomInteger(1, arr.length));
  return newarr;
};

export {randomInteger, randomFloat, randonElementArray, randomArray};
