const getImgUrl = (path) => require(`@/assets/${path}`) ?? "";

function debounce(callback, wait) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
}

export { getImgUrl, debounce };
