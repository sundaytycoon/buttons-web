const theme = {
  base: {
    white: '#FFFFFF',
    black: '#000000',
    whiteGray: '#D7DCE1',
  },

  bg: {
    banner: '#7D55FF',
    titlebar: '#FFFFFF',
    subTitlebar: '#EBEEF1',
    sideMenu: '#FFFFFF',
  },

  border: {
    sideMenu: '#C4C4C4',
  },

  // TODO: 각 component별로 묶어서 관리하는게 나아보임.. 맞춰서 수정할 것
  sideMenu: {
    bg: '#FFFFFF',
    border: '#C4C4C4',
    active: '#7551E9',
  },

  button: {
    primary: '#7551E9',
    secondary: '#39E09B',
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
