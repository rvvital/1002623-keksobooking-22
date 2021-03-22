import { sendData } from './fetch.js';
import { errorPost } from './modal-error.js';
import { successPost } from './modal-error.js';

const filterForm = document.querySelector('.map__filters');
const postForm = document.querySelector('.ad-form');

postForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  sendData(formData, () => {
    successPost();

    postForm.reset();
    filterForm.reset();
  },
  errorPost,
  );

});

postForm.addEventListener('reset', () => {
  postForm.reset();
  filterForm.reset();
});
