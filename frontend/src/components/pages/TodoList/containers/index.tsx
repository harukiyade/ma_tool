import { Box, Typography } from "@mui/material";
import React from "react";
import { MainList } from "../presentations/MainList";
import { SidePannel } from "../presentations/SidePannel";
import styles from "./index.module.scss";

/** MUIBoxのプロパティ指定 */
const BoxSx = {
  width: 760,
  borderRadius: 2,
  bgcolor: "background.paper",
};

export const TodoList = () => {
  return (
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
  );
};
