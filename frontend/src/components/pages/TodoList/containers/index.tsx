import React from "react";
import styles from "./index.module.scss";
import { Box, ThemeProvider } from "@mui/material";
import { defaultTheme } from "@/components/themes";

/** MUIBoxのプロパティ指定 */
const boxSx = {
  width: 760,
  height: 1000,
  borderRadius: 2,
  bgcolor: "primary.light",
};

export const TodoList = () => {
  return (
    <div className={styles.container}>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={boxSx}>TODOリストのページ</Box>
      </ThemeProvider>
    </div>
  );
};
