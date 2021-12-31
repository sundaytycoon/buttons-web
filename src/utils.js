export const throttle = (next, delay = 200) => {
  let timeout = null;

  return function () {
    if (!timeout) {
      const callback = () => {
        next.apply(this, arguments);
        timeout = null;
      };
      timeout = window.setTimeout(callback, delay);
    }
  };
};

export const debounce = (next, delay = 200) => {
  let timeout = null;

  return function () {
    const callback = () => next.apply(this, arguments);
    clearTimeout(timeout);
    timeout = window.setTimeout(callback, delay);
  };
};
