import React, { useEffect, useMemo } from "react";
import { CompanyList } from "../presentations/CompanyList";
import styles from "./index.module.scss";
import useCompanySearchList from "./useCompanySearchList";
import { SearchPannel } from "../presentations/SearchPannel";
import { Typography } from "@mui/material";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchForm } from "./formSchema";

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
  /** 絞り込み検索のform管理 */
  const methods = useForm({
    resolver: zodResolver(searchForm),
    defaultValues: { name: "" },
  });
  const { getValues } = methods;

  /** APIからのデータ取得 */
  const { data, isLoading, isError } = useCompanySearchList({
    name: getValues("name"),
  });

  const corporateData = useMemo(() => {
    return data && data["hojin-infos"];
  }, [data]);

  return (
    <div className={styles.container}>
      <FormProvider {...methods}>
        <SearchPannel />
      </FormProvider>
      {corporateData ? (
        <CompanyList data={corporateData} />
      ) : (
        <Typography>データが取得できませんでした。</Typography>
      )}
    </div>
  );
};
