import React from "react";
import styles from "./index.module.scss";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { defaultTheme } from "@/components/themes";
import { SidePannel } from "../presentations/SidePannel";
import { MainList } from "../presentations/MainList";

/** MUIBoxのプロパティ指定 */
const BoxSx = {
  width: 760,
  height: 500,
  borderRadius: 2,
  bgcolor: "background.paper",
};

export const TodoList = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={styles.container}>
        <SidePannel />
        <div>
          <Box component="main" sx={BoxSx} className={styles.boxContainer}>
            <Typography variant="h1">リスト件数： 9870件</Typography>
            <MainList />
            <MainList />
            <MainList />
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
};
