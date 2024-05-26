import React from "react";
import {
  Divider,
  IconButton,
  ListItem as MUIListItem,
  Typography,
} from "@mui/material";
import { Icon } from "@/components/parts/Icon";
import styles from "./index.module.scss";
import { CorporateDetail } from "@/api/corporate/ResTypes";

type Props = {
  company: CorporateDetail;
};

export const ListItem = ({ company }: Props) => {
  const { name, location } = company;

  return (
    <>
      <MUIListItem className={styles.container}>
        <div className={styles.mainInfo}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color: "text.primary" }}
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="dd"
            sx={{ color: "text.primary" }}
          >
            {location}
          </Typography>
        </div>
        <div className={styles.icons}>
          <IconButton>
            <Icon icon="newTab" />
          </IconButton>
        </div>
      </MUIListItem>
      <Divider />
    </>
  );
};
