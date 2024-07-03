"use client";
import AddIcon from "@mui/icons-material/Add";
import ArchiveIcon from "@mui/icons-material/Archive";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RestoreIcon from "@mui/icons-material/Restore";
import {
  BottomNavigation,
  BottomNavigationAction,
  Fab,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { ActionCard } from "../presentations/ActionCard";
import styles from "./index.module.scss";
import { bottomNav, fab, paper } from "./sxStyles";

export const ActionRecord = () => {
  const [navValue, setNavValue] = useState(0);

  const contentSample =
    "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.";

  return (
    <>
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
        <Fab sx={fab} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Paper sx={paper} elevation={3}>
          <BottomNavigation
            showLabels
            value={navValue}
            onChange={(event, newnavValue) => {
              setNavValue(newnavValue);
            }}
          >
            <BottomNavigationAction
              sx={bottomNav}
              label="Recents"
              icon={<RestoreIcon />}
            />
            <BottomNavigationAction
              sx={bottomNav}
              label="Favorites"
              icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
              sx={bottomNav}
              label="Archive"
              icon={<ArchiveIcon />}
            />
          </BottomNavigation>
        </Paper>
      </footer>
    </>
  );
};
