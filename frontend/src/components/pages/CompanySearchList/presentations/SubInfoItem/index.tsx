import { Typography } from "@mui/material";
import React from "react";
import styles from "./index.module.scss";

type Props = {
  title: string;
  data: string | number;
  dataText?: string;
};

export const SubInfoItem = ({ title, data, dataText }: Props) => {
  return (
    <div className={styles.data}>
      <Typography
        variant="body2"
        component="dt"
        fontWeight="bold"
        sx={{ color: "text.secondary" }}
      >
        {title}：
      </Typography>
      <Typography variant="body2" component="dd" sx={{ color: "text.primary" }}>
        {data}
        {dataText}
      </Typography>
    </div>
  );
};
