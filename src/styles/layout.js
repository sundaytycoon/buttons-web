export const HEIGHT = {
  BANNER: {
    MOBILE: 92,
    DESKTOP: 74,
  },
  TITLEBAR: {
    MOBILE: 56,
    DESKTOP: 74,
  },
  SUB_TITLEBAR: 48,
};

export const MEDIA_BREAK = {
  TABLET: 768,
  LAPTOP: 992,
};

export const Z_INDEX = new (function () {
  this.BANNER = 3;
  this.TITLEBAR = 4;
  this.SIDE_MENU = this.TITLEBAR + 1;
})();
