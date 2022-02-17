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

const getZIndex = () => {
  const BANNER = 3;
  const TITLEBAR = 4;
  const SIDE_MENU = TITLEBAR + 1;

  return { BANNER, TITLEBAR, SIDE_MENU };
};
export const Z_INDEX = getZIndex();

export default { HEIGHT, MEDIA_BREAK, Z_INDEX };
