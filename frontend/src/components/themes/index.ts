import { createTheme } from "@mui/material";

/** MUIのカスタムthemeを定義 */
export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff200", //yellow
      light: "#d6e6f2", //lightblue
    },
    secondary: {
      main: "#303841", //blackNavy
      light: "#f5f5f5", //white
    },
  },
});
