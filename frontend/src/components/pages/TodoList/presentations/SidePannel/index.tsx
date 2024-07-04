import { Box, Divider, List } from "@mui/material";
import React from "react";
import { ListItem } from "../ListItem";
import styles from "./index.module.scss";
import { sidePannel } from "./sxStyles";

export const SidePannel = () => {
  return (
    <Box component="aside" sx={sidePannel} className={styles.sidePannel}>
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
