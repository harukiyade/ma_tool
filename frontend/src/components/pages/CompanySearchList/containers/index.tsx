import React from "react";
import { CompanyList } from "../presentations/CompanyList";
import styles from "./index.module.scss";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "@/components/themes";
import useCompanySearchList from "./useCompanySearchList";
import { SearchPannel } from "../presentations/SearchPannel";

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
  const { data, isLoading, isError } = useCompanySearchList({
    name: "パーソル",
  });
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={styles.container}>
        <SearchPannel />
        <CompanyList />
      </div>
    </ThemeProvider>
  );
};
