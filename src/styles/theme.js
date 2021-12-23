const theme = {
  base: {
    white: 'rgb(255, 255, 255)',
  },

  bg: {
    banner: 'rgb(125, 85, 255)',
  },

  color: {
    white: 'rgb(255, 255, 255)',
    black: 'rgb(0, 0, 0)',
    whiteGray: 'rgb(215, 220, 225)',
    purple: 'rgb(125, 85, 255)',

    primary: 'rgb(57, 224, 155)',
    secondary: 'rgb(40, 191, 123)',
    tertiary: 'rgb(46, 211, 186)',
    quaternary: 'rgb(68, 194, 215)',
    quinary: 'rgb(90, 162, 220)',
    senary: 'rgb(112, 141, 224)',
    septenary: 'rgb(138, 134, 229)',
  },

  size: {
    icon: 24,
  },

  width: {
    icon: '24px',

    mobileDevice: '375px',
  },

  height: {
    banner: '74px',
    titlebar: '74px',

    icon: '24px',

    mobileDevice: '812px',
  },

  spacing: (space) => `${space * 8}px`,

  combine: (...args) =>
    `${args.reduce((prev, next) => prev + parseInt(next), 0)}px`,
};

export default theme;
