"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CompanyList } from "../presentations/CompanyList";
import { SearchPannel } from "../presentations/SearchPannel";
import { SearchParamType, searchForm } from "./formSchema";
import styles from "./index.module.scss";
import useCompanySearchList from "./useCompanySearchList";

export const CompanySearchList = () => {
  /** 絞り込み検索のform管理 */
  const methods = useForm<SearchParamType>({
    resolver: zodResolver(searchForm),
    defaultValues: {
      name: "",
      companyId: "",
      corporateType: "",
      prefecture: "",
    },
  });
  const { getValues } = methods;

  /** APIからのデータ取得 */
  const { data, isError, isLoading, handleSearch } = useCompanySearchList({
    name: getValues("name"),
    corporateNumber: getValues("companyId"),
    corporateType: getValues("corporateType"),
    prefecture: getValues("prefecture"),
  });

  return (
    <div className={styles.container}>
      <FormProvider {...methods}>
        <SearchPannel handleSearch={handleSearch} />
      </FormProvider>
      <main className={styles.dataDispWrapper}>
        {isLoading && <div>読み込み中</div>}
        {isError ? (
          <div>エラーが発生しました。</div>
        ) : data ? (
          <CompanyList data={data} />
        ) : (
          <Typography>データが取得できませんでした。</Typography>
        )}
      </main>
    </div>
  );
};
