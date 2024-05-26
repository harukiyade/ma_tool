import React from "react";
import { Company } from "../../containers";
import {
  Divider,
  IconButton,
  ListItem as MUIListItem,
  Typography,
} from "@mui/material";
import { Icon } from "@/components/parts/Icon";
import styles from "./index.module.scss";

type Props = {
  company: Company;
};

export const ListItem = ({ company }: Props) => {
  const { name, address } = company;

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
            {address}
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
