import React, { useMemo } from "react";
import { CompanyList } from "../presentations/CompanyList";
import styles from "./index.module.scss";
import useCompanySearchList from "./useCompanySearchList";
import { SearchPannel } from "../presentations/SearchPannel";
import { Typography } from "@mui/material";

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

  const corporateData = useMemo(() => {
    return data && data["hojin-infos"];
  }, [data]);

  return (
    <div className={styles.container}>
      <SearchPannel />
      {corporateData ? (
        <CompanyList data={corporateData} />
      ) : (
        <Typography>データが取得できませんでした。</Typography>
      )}
    </div>
  );
};
