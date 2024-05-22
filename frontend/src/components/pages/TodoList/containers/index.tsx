import React from "react";
import styles from "./index.module.scss";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { defaultTheme } from "@/components/themes";
import { SidePannel } from "../presentations/SidePannel";

/** MUIBoxのプロパティ指定 */
const BoxSx = {
  width: 760,
  height: 500,
  borderRadius: 2,
  bgcolor: "background.paper",
};

const innerBoxSx = {
  borderRadius: 2,
  bgcolor: "background.paper",
  border: "2px solid",
  borderColor: "background.default",
};

export const TodoList = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={styles.container}>
        <SidePannel />
        <div>
          <Box sx={BoxSx} className={styles.boxContainer}>
            <Typography variant="h1">リスト件数： 9870件</Typography>
            <Box sx={innerBoxSx} className={styles.innerBoxContainer}>
              入れ子
            </Box>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
};
