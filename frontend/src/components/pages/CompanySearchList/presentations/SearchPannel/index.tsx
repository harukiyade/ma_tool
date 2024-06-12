import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { TextField } from "@/components/parts/TextField";
import { Button } from "@/components/parts/Button";
import styles from "./index.module.scss";
import { Controller, useFormContext } from "react-hook-form";
import { textFieldSx } from "@/components/themes/styleSx";
import { SearchParamType } from "../../containers/formSchema";

const sidePannelSx = {
  borderRadius: 2,
  bgcolor: "background.paper",
};

export const SearchPannel = () => {
  const { control, getValues, setValue, trigger } =
    useFormContext<SearchParamType>();

  const handleBlur = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue("name", value);
    // フォームの検証をトリガー
    await trigger("name");
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <Button variant="contained" size="small">
          <Typography variant="button">検索条件を追加</Typography>
        </Button>
      </div>
      <Box component="aside" sx={sidePannelSx} className={styles.box}>
        <Typography variant="body2" fontWeight="bold">
          以下の条件で絞り込み中
        </Typography>
        <form className={styles.form}>
          <div className={styles.searchWrapper}>
            <div className={styles.option}>
              <Typography component="p">会社名</Typography>
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="会社名を入力"
                    value={getValues("name")}
                    size="small"
                    onBlur={() => handleBlur}
                    sx={textFieldSx}
                  />
                )}
              />
            </div>
          </div>
          <div className={styles.searchWrapper}>
            <div className={styles.option}>
              <Typography component="p">法人番号</Typography>
              <Controller
                control={control}
                name="companyId"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="法人番号を入力"
                    value={getValues("companyId")}
                    size="small"
                    onBlur={() => handleBlur}
                    sx={textFieldSx}
                  />
                )}
              />
            </div>
          </div>
          <div className={styles.searchWrapper}>
            <div className={styles.option}>
              <Typography component="p">業界・業種</Typography>
              <Controller
                control={control}
                name="businessType"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="業界・業種を入力"
                    value={getValues("businessType")}
                    size="small"
                    onBlur={() => handleBlur}
                    sx={textFieldSx}
                  />
                )}
              />
            </div>
          </div>
          <div className={styles.searchWrapper}>
            <div className={styles.option}>
              <Typography component="p">都道府県</Typography>
              <Controller
                control={control}
                name="prefecture"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="都道府県を入力"
                    value={getValues("prefecture")}
                    size="small"
                    onBlur={() => handleBlur}
                    sx={textFieldSx}
                  />
                )}
              />
            </div>
          </div>
          <Button variant="contained">検索</Button>
        </form>
      </Box>
    </div>
  );
};
