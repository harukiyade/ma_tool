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

// TODO: 消す
const sampleData = [
  {
    corporate_number: "1010001084833",
    postal_code: "1000005",
    location: "東京都千代田区丸の内２丁目４番１号",
    name: "株式会社パーソル総合研究所",
    status: "閉鎖",
    number_of_activity: "0",
    update_date: "2017-01-25T00:00:00+09:00",
  },
  {
    corporate_number: "1010001121801",
    postal_code: "1040053",
    location: "東京都中央区晴海１丁目８番５－２８０３号",
    name: "パーソルホールディングス株式会社",
    status: "-",
    number_of_activity: "0",
    update_date: "2020-02-13T00:00:00+09:00",
  },
];

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
        <>{JSON.stringify(sampleData)}</>
        {data ? (
          <>{JSON.stringify(data)}</>
        ) : (
          <Typography>データが取得できませんでした。</Typography>
        )}
      </main>
    </div>
  );
};
