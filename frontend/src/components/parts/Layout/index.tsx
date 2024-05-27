"use client";
import React, { FC } from "react";
import styles from "./index.module.scss";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "@/components/themes";
import Header from "../Header";

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <div className={styles.container}>{children}</div>
    </ThemeProvider>
  );
};
