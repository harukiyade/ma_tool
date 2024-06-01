import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import styles from "./index.module.scss";
import { innerBox } from "./sxStyles";

export const MainList = () => {
  return (
    <Box sx={innerBox} className={styles.innerBoxContainer}>
      <Typography variant="h2">リード獲得数</Typography>
      <Divider />
      <List>
        <ListItem secondaryAction="1件" divider>
          <ListItemText primary="Inbox" />
        </ListItem>

        <ListItem secondaryAction="1件" divider>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem secondaryAction="1件" divider>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem secondaryAction="1件" divider>
          <ListItemText primary="Inbox" />
        </ListItem>
      </List>
    </Box>
  );
};
