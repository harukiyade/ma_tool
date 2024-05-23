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

const innerBoxSx = {
  borderRadius: 2,
  bgcolor: "background.paper",
  border: "2px solid",
  borderColor: "background.default",
};

export const MainList = () => {
  return (
    <Box sx={innerBoxSx} className={styles.innerBoxContainer}>
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
