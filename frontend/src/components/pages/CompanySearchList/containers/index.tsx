"use client";
import React, { useMemo } from "react";
import { CompanyList } from "../presentations/CompanyList";
import styles from "./index.module.scss";
import useCompanySearchList from "./useCompanySearchList";
import { SearchPannel } from "../presentations/SearchPannel";
import { Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchParamType, searchForm } from "./formSchema";
import { sampleData } from "./sampleData";

export const CompanySearchList = () => {
  /** 絞り込み検索のform管理 */
  const methods = useForm<SearchParamType>({
    resolver: zodResolver(searchForm),
    defaultValues: {
      name: "パーソル",
      companyId: "1234",
      businessType: "IT",
      prefecture: "東京",
    },
  });
  const { getValues } = methods;

  /** APIからのデータ取得 */
  // TODO: trigger parentみたいに任意のタイミングで検索を走らせたい。(初期表示時に空で検索が走ることを避けたい)
  const { data, isError } = useCompanySearchList({
    name: getValues("name"),
    corporate_number: getValues("companyId"),
    corporate_type: getValues("businessType"),
    prefecture: getValues("prefecture"),
  });

  return (
    <div className={styles.container}>
      <FormProvider {...methods}>
        <SearchPannel />
      </FormProvider>
      <main className={styles.dataDispWrapper}>
        <CompanyList data={sampleData} />
        {data ? (
          <>{JSON.stringify(data)}</>
        ) : (
          <Typography>データが取得できませんでした。</Typography>
        )}
      </main>
    </div>
  );
};
