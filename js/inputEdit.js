//Обработка времени заезда и выезда

let selectElements = document.querySelector('.ad-form__element--time');
let selectTime = selectElements.querySelectorAll('select');

for (let i = 0; i < selectTime.length; i++) {

  selectTime[i].addEventListener('change', function() {

    let id = this.getAttribute('id');
    let select;

    if( id === 'timein' ) {
      select = selectElements.querySelector('#timeout');

    }
    else if( id === 'timeout' ) {
      select = selectElements.querySelector('#timein');
    }

    select.value = this.value;
  })
}

//Обработка типа жилья и цены

let typeFlat = document.querySelector('#type');
let inputPrice = document.querySelector('#price');

typeFlat.addEventListener('change', function() {

  if( this.value === 'bungalow' ) {
    inputPrice.setAttribute('min', '0');
    inputPrice.setAttribute('placeholder', '0');
  }

  if( this.value === 'flat' ) {
    inputPrice.setAttribute('min', '1000');
    inputPrice.setAttribute('placeholder', '1000');
  }

  if( this.value === 'house' ) {
    inputPrice.setAttribute('min', '5000');
    inputPrice.setAttribute('placeholder', '5000');
  }

  if( this.value === 'palace' ) {
    inputPrice.setAttribute('min', '10000');
    inputPrice.setAttribute('placeholder', '10000');
  }
})

