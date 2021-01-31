function randomInteger(min, max) {
  if (min < 0 || max <= min) {
    return ('Введите корректный диапазон');
  }
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

randomInteger();

function randomFloat(min, max, fixed) {
  if (min < 0 || max <= min) {
    return ('Введите корректный диапазон');
  }
  let rand = min + Math.random() * (max - min);
  return rand.toFixed(fixed);
}

randomFloat();
