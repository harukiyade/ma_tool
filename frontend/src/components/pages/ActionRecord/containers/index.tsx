import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Fab,
  Paper,
  ThemeProvider,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import AddIcon from "@mui/icons-material/Add";
import { defaultTheme } from "@/components/themes";
import { ActionCard } from "../presentations/ActionCard";
import styles from "./index.module.scss";

const fabSx = {
  position: "fixed",
  bottom: 80,
  right: 44,
  bgcolor: "secondary.main",
  color: "background.paper",
  "&:hover": {
    backgroundColor: "secondary.dark", // ホバー時の背景色
  },
};

const bottomNavSx = {
  "&.Mui-selected": {
    color: "secondary.main", // フォーカス（選択）時の色
  },
};

export const ActionRecord = () => {
  const [navValue, setNavValue] = useState(0);

  const contentSample =
    "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.";

  return (
    <ThemeProvider theme={defaultTheme}>
      <section className={styles.wrapper}>
        <div>
          <ActionCard
            title="Shrimp and Chorizo Paella"
            date="September 14, 2016"
            content={contentSample}
          />
        </div>
        <div>
          <ActionCard
            title="Shrimp and Chorizo Paella"
            date="September 14, 2016"
            content={contentSample}
          />
        </div>
        <div className={styles.right}>
          <ActionCard
            title="Shrimp and Chorizo Paella"
            date="September 14, 2016"
            content={contentSample}
          />
        </div>
        <div>
          <ActionCard
            title="Shrimp and Chorizo Paella"
            date="September 14, 2016"
            content={contentSample}
          />
        </div>
        <div className={styles.right}>
          <ActionCard
            title="Shrimp and Chorizo Paella"
            date="September 14, 2016"
            content={contentSample}
          />
        </div>
      </section>
      <footer>
        <Fab sx={fabSx} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={navValue}
            onChange={(event, newnavValue) => {
              setNavValue(newnavValue);
            }}
          >
            <BottomNavigationAction
              sx={bottomNavSx}
              label="Recents"
              icon={<RestoreIcon />}
            />
            <BottomNavigationAction
              sx={bottomNavSx}
              label="Favorites"
              icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
              sx={bottomNavSx}
              label="Archive"
              icon={<ArchiveIcon />}
            />
          </BottomNavigation>
        </Paper>
      </footer>
    </ThemeProvider>
  );
};
