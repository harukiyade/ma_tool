import React from "react";
import styles from "./index.module.scss";
import { Box, Typography } from "@mui/material";
import { TextField } from "@/components/parts/TextField";
import { Controller, useForm } from "react-hook-form";
import { textFieldSx } from "@/components/themes/styleSx";

export const BasicInfo = () => {
  const { control, getValues, setValue } = useForm();

  const basicDataTitles = [
    "代表者",
    "URL",
    "電話番号",
    "会社郵便番号",
    "会社住所",
    "代表者郵便番号",
    "代表者住所",
    "代表者誕生日",
    "営業種目",
    "設立",
    "株主",
    "取締役",
  ];

  const businessDataTitles = ["業種-大", "業種-中", "業種-小", "業種-細"];
  // "備考"

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Typography variant="h2">基本情報</Typography>
        <Box
          sx={{ borderRadius: 2, bgcolor: "background.paper" }}
          className={styles.basicInfoBox}
          component="section"
        >
          <dl className={styles.dataList}>
            {basicDataTitles.map((title) => {
              return (
                <div key={title}>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    component="dt"
                  >
                    {title}
                  </Typography>
                  <Typography variant="h5" component="dd">
                    sample
                  </Typography>
                </div>
              );
            })}
          </dl>
        </Box>
      </div>
      <div className={styles.wrapper}>
        <Typography variant="h2">業種</Typography>
        <Box
          sx={{ borderRadius: 2, bgcolor: "background.paper" }}
          className={styles.businessInfoBox}
          component="section"
        >
          <dl className={styles.dataList}>
            {businessDataTitles.map((title) => {
              return (
                <div key={title}>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    component="dt"
                  >
                    {title}
                  </Typography>
                  <Typography variant="h5" component="dd">
                    sample
                  </Typography>
                </div>
              );
            })}
          </dl>
        </Box>
      </div>
      <div className={styles.wrapper}>
        <Typography variant="h2">備考</Typography>
        <Box
          sx={{ borderRadius: 2, bgcolor: "background.paper" }}
          className={styles.businessInfoBox}
          component="section"
        >
          <dl className={styles.dataList}>備考欄で記入した内容を反映？</dl>
        </Box>
        <Controller
          control={control}
          name="memo"
          render={({ field }) => (
            <TextField
              {...field}
              label="情報を入力"
              value={getValues("memo")}
              size="small"
              sx={textFieldSx}
            />
          )}
        />
      </div>
    </div>
  );
};
