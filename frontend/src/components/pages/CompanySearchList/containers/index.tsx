import React from "react";
import { CompanyList } from "../presentations/CompanyList";
import styles from "./index.module.scss";
import { ThemeProvider, Typography } from "@mui/material";
import { defaultTheme } from "@/components/themes";

export type Company = {
  name: string;
  id: string;
  industry?: string;
  address?: string;
  establishmentYear?: number;
  representativeName?: string;
  capital?: number;
};

export const CompanySearchList = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={styles.container}>
        <Typography
          variant="h1"
          fontWeight="bold"
          sx={{ color: "text.primary" }}
        >
          会社一覧のページ
        </Typography>
        <CompanyList />
      </div>
    </ThemeProvider>
  );
};
