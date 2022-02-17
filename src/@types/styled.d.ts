import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    base: {
      white: string;
      black: string;
      whiteGray: string;
    };

    bg: {
      banner: string;
      titlebar: string;
      subTitlebar: string;
      sideMenu: string;
    };

    border: {
      sideMenu: string;
    };
  }
}
