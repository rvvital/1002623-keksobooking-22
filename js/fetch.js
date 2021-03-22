
const getData = (onSuccess, onError) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((posters) => {
      onSuccess(posters);
    })
    .catch(() => {
      onError();
    });
}

const sendData = (data, onSuccess, onError) => {

  fetch('https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: data,
    },
  )
    .then(() => {
      onSuccess();

    })
    .catch(() => {
      onError();
    });
};

export { getData, sendData };
