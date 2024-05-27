import { createTheme } from "@mui/material";

// const COLOR_PALETTE = {
//   yellow: "#fff200",
//   lightBlue: "#d6e6f2",
//   blackNavy: "#303841",
//   white: "#f5f5f5",
// };
// ここを変更したらvariables.scssも変更する
const COLOR_PALETTE = {
  yellow: "#FFD24C",
  lightBlue: "#92B4EC",
  blackNavy: "#303841",
  white: "#FFFFFF",
  backGround: "#f5f5f5",
};

/**
 * MUIのpalette
 * https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette
 */

/** MUIのカスタムthemeを定義 */
export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: COLOR_PALETTE.yellow,
    },
    secondary: {
      main: COLOR_PALETTE.lightBlue,
    },
    text: {
      primary: COLOR_PALETTE.blackNavy,
    },
    background: {
      default: COLOR_PALETTE.backGround,
    },
  },
  typography: {
    h1: {
      fontSize: 24,
    },
    h2: {
      fontSize: 20,
    },
    h3: {
      fontSize: 18,
    },
    h4: {
      fontSize: 16,
    },
    h5: {
      fontSize: 14,
    },
    h6: {
      fontSize: 12,
    },
    subtitle1: {
      fontSize: 12,
    },
    subtitle2: {
      fontSize: 12,
    },
    body1: {
      fontSize: 12,
    },
    body2: {
      fontSize: 12,
    },
  },
});

export const tabTheme = createTheme({
  palette: {
    primary: {
      main: COLOR_PALETTE.blackNavy,
    },
    secondary: {
      main: COLOR_PALETTE.lightBlue,
    },
  },
});
