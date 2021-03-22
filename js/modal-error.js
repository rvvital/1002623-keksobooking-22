const errorPost = function () {
  let mainPage = document.querySelector('main');
  let temp = document.querySelector('#error');

  mainPage.appendChild(temp.content.cloneNode(true));

  let errorModule = mainPage.querySelector('.error__button');
  let errorCode = mainPage.querySelector('.error');

  errorModule.addEventListener('click', () => {
    errorCode.remove();
    document.removeEventListener('keydown', onErrorEscClick);

  });

  errorCode.addEventListener('click', () => {
    errorCode.remove();
    document.removeEventListener('keydown', onErrorEscClick);
  });

  const onErrorEscClick = (evt) => {
    if (evt.key === 'Escape') {
      errorCode.remove();
      document.removeEventListener('keydown', onErrorEscClick);
    }
  }

  document.addEventListener('keydown', onErrorEscClick);
};




const successPost = () => {
  let mainPage = document.querySelector('main');
  let successMassage = document.querySelector('#success');

  mainPage.appendChild(successMassage.content.cloneNode(true));

  let successCode = mainPage.querySelector('.success');

  successCode.addEventListener('click', () => {
    successCode.remove();
    document.removeEventListener('keydown', onSuccessEscClick);

  });

  const onSuccessEscClick = (evt) => {
    if (evt.key === 'Escape') {
      successCode.remove();
      document.removeEventListener('keydown', onSuccessEscClick);
    }
  }

  document.addEventListener('keydown', onSuccessEscClick);
};



export { errorPost, successPost };
