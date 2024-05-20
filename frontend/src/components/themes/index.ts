import { createTheme } from "@mui/material";

/**
 * MUIのpalette
 * https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette
 */

/** MUIのカスタムthemeを定義 */
export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#fff200", //yellow
    },
    secondary: {
      main: "#d6e6f2", //lightblue
    },
    text: {
      primary: "#303841", //blackNavy
    },
    background: {
      default: "#f5f5f5", //white
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
      main: "#303841",
    },
  },
});
