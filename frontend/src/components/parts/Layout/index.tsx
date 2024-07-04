"use client";
import { ThemeProvider } from "@mui/material";
import React, { FC } from "react";
import { defaultTheme } from "@/components/themes";
import Header from "../Header";
import styles from "./index.module.scss";

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
