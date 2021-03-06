let selectElements = document.querySelector('.ad-form__element--time');
let selectTimes = selectElements.querySelectorAll('select');

for (let i = 0; i < selectTimes.length; i++) {

  selectTimes[i].addEventListener('change', function() {

    let idSelectTime = this.getAttribute('id');
    let select;

    if( idSelectTime === 'timein' ) {
      select = selectElements.querySelector('#timeout');

    }
    else if( idSelectTime === 'timeout' ) {
      select = selectElements.querySelector('#timein');
    }

    select.value = this.value;
  })
}

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

let selectRoomNumber = document.querySelector('#room_number');
let selectCapacity = document.querySelector('#capacity');
let optionsCapacity = selectCapacity.querySelectorAll('option');

selectRoomNumber.addEventListener('change', function() {
  if( this.value === '1' ) {
    optionsCapacity[0].disabled = true;
    optionsCapacity[1].disabled = true;
    optionsCapacity[2].disabled = false;
    optionsCapacity[3].disabled = true;

    selectCapacity.value = optionsCapacity[2].value;
  }

  if( this.value === '2' ) {
    optionsCapacity[0].disabled = true;
    optionsCapacity[1].disabled = false;
    optionsCapacity[2].disabled = false;
    optionsCapacity[3].disabled = true;

    selectCapacity.value = optionsCapacity[2].value;
  }

  if( this.value === '3' ) {
    optionsCapacity[0].disabled = false;
    optionsCapacity[1].disabled = false;
    optionsCapacity[2].disabled = false;
    optionsCapacity[3].disabled = true;

    selectCapacity.value = optionsCapacity[2].value;
  }

  if( this.value === '100' ) {
    optionsCapacity[0].disabled = true;
    optionsCapacity[1].disabled = true;
    optionsCapacity[2].disabled = true;
    optionsCapacity[3].disabled = false;

    selectCapacity.value = optionsCapacity[3].value;
  }
});






