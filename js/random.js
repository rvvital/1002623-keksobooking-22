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

export {randomInteger, randomFloat};
