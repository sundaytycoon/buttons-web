export const throttle = (next, delay = 200) => {
  let timeout = null;

  return function () {
    const args = arguments;

    if (!timeout) {
      const callback = () => {
        next.apply(this, [args]);
        clearTimeout(timeout);
      };
      timeout = window.setTimeout(callback, delay);
    }
  };
};

export const debounce = (next, delay = 200) => {
  let timeout = null;

  return function () {
    const args = arguments;

    const callback = () => next.apply(this, [args]);
    clearTimeout(timeout);
    timeout = window.setTimeout(callback, delay);
  };
};
