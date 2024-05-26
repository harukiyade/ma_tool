"use client";
import React, { FC } from "react";
import styles from "./index.module.scss";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "@/components/themes";

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={styles.container}>{children}</div>
    </ThemeProvider>
  );
};
