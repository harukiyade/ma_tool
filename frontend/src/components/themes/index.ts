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
});

export const tabTheme = createTheme({
  palette: {
    primary: {
      main: "#303841",
    },
  },
});
