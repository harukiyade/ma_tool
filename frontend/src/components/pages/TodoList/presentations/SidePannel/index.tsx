import React from "react";
import { Box, Divider, List } from "@mui/material";
import styles from "./index.module.scss";
import { ListItem } from "../ListItem";

const sidePannelSx = {
  width: 200,
  borderRadius: 2,
  bgcolor: "background.paper",
};

export const SidePannel = () => {
  return (
    <Box sx={sidePannelSx} className={styles.sidePannel}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem text="リスト件数" />
          <ListItem text="リード獲得数" />
          <ListItem text="商談ヨミ管理" />
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem text="リスト件数" />
          <ListItem text="リード獲得数" />
          <ListItem text="商談ヨミ管理" />
        </List>
      </nav>
    </Box>
  );
};
