let errorPost = function () {
  let mainPage = document.querySelector('main');
  let temp = document.querySelector('#error');

  mainPage.appendChild(temp.content.cloneNode(true));

  let errorModule = mainPage.querySelector('.error__button');
  let errorCode = mainPage.querySelector('.error');

  errorModule.addEventListener('click', () => {
    errorCode.remove();
  });

  errorCode.addEventListener('click', () => {
    errorCode.remove();
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      errorCode.remove();
    }
  });

};


let successPost = () => {
  let mainPage = document.querySelector('main');
  let temp = document.querySelector('#success');

  mainPage.appendChild(temp.content.cloneNode(true));

  let successCode = mainPage.querySelector('.success');

  successCode.addEventListener('click', () => {
    successCode.remove();
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      successCode.remove();
    }
  });

};

export { errorPost, successPost };
