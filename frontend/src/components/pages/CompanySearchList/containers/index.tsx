import React from "react";
import { CompanyList } from "../presentations/CompanyList";
import styles from "./index.module.scss";
import { ThemeProvider, Typography } from "@mui/material";
import { defaultTheme } from "@/components/themes";
import useCompanySearchList from "./useCompanySearchList";

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
  const { data, isLoading, isError } = useCompanySearchList("商事");
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
        <div>会社情報取得テスト：</div>
        {data?.["hojin-infos"]?.map((company: any) => (
          <div key={company.id}>
            <h2>{company.name}</h2>
            <p>住所: {company.location}</p>
            {/* 他のデータも適宜表示 */}
          </div>
        ))}
        <CompanyList />
      </div>
    </ThemeProvider>
  );
};
