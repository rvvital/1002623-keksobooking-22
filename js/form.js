import { sendData } from './fetch.js';
import { errorPost } from './modal-error.js';
import { successPost } from './modal-error.js';

const filterForm = document.querySelector('.map__filters');
const postForm = document.querySelector('.ad-form');

const formResetHandler = () => {postForm.reset();
  filterForm.reset();
  postForm.querySelector('#price').setAttribute('placeholder', '1000');
  postForm.querySelector('#price').setAttribute('min', '1000')

}

postForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  sendData(formData, () => {
    successPost();
    formResetHandler();
  },
  errorPost,
  );

});

postForm.addEventListener('reset', formResetHandler);
