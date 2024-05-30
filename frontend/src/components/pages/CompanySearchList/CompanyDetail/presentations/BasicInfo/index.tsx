import React, { useState } from "react";
import styles from "./index.module.scss";
import { Box, Typography } from "@mui/material";
import { TextField } from "@/components/parts/TextField";
import { Controller, useForm } from "react-hook-form";
import {
  buttonSxContained,
  buttonSxOutlined,
  textFieldSecondarySx,
} from "@/components/themes/styleSx";
import { Button } from "@/components/parts/Button";

type DataDisplayType = { title: string; data: string }[];

export const BasicInfo = () => {
  const [showInput, setShowInput] = useState(false);

  /** TODO: 追加情報と備考それぞれでuseFormを定義する */
  const { control, getValues, setValue } = useForm();

  /** TODO: SubmitHandler追加 */
  const onSubmit = (data: string) => {
    console.log("備考：", data);
  };

  const basicData: DataDisplayType = [
    { title: "URL", data: "sample" },
    { title: "電話番号", data: "sample" },
    { title: "会社郵便番号", data: "sample" },
    { title: "会社住所", data: "sample" },
    { title: "営業種目", data: "sample" },
    { title: "設立", data: "sample" },
    { title: "取締役", data: "sample" },
    { title: "業種-大", data: "sample" },
  ];

  const additionalData: DataDisplayType = [
    { title: "代表者", data: "" },
    { title: "代表者郵便番号", data: "" },
    { title: "代表者住所", data: "" },
    { title: "代表者誕生日", data: "" },
    { title: "株主", data: "" },
    { title: "業種-中", data: "" },
    { title: "業種-小", data: "" },
    { title: "業種-細", data: "" },
  ];

  // TODO: 業種の情報はプルダウンにしておく(フロントでもつかDBにするかは検討)

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
            {basicData.map((data) => {
              return (
                <div key={data.title}>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    component="dt"
                  >
                    {data.title}
                  </Typography>
                  <Typography variant="h5" component="dd">
                    {data.data}
                  </Typography>
                </div>
              );
            })}
          </dl>
        </Box>
      </div>
      <div className={styles.wrapper}>
        <Typography variant="h2">追加情報</Typography>
        <Box
          sx={{ borderRadius: 2, bgcolor: "background.paper" }}
          className={styles.additionalInfoBox}
          component="section"
        >
          <dl className={styles.dataList}>
            {additionalData.map((data) => {
              return (
                <div key={data.title}>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    component="dt"
                  >
                    {data.title}
                  </Typography>
                  <Typography variant="h5" component="dd">
                    {data.data || "データなし"}
                  </Typography>
                </div>
              );
            })}
          </dl>
        </Box>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.addButton}>
          <Typography variant="h2">備考</Typography>
          <Button
            size="small"
            variant="outlined"
            onClick={() => setShowInput(true)}
            sx={buttonSxOutlined}
          >
            編集
          </Button>
        </div>
        <Box
          sx={{ borderRadius: 2, bgcolor: "background.paper" }}
          className={styles.otherInfoBox}
          component="section"
        >
          <dl className={styles.dataList}>{getValues("memo")}</dl>
        </Box>
        {showInput && (
          <form onSubmit={() => onSubmit} className={styles.inputForm}>
            <Controller
              control={control}
              name="memo"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="情報を入力"
                  value={getValues("memo")}
                  size="small"
                  sx={textFieldSecondarySx}
                />
              )}
            />
            <div className={styles.button}>
              <Button
                variant="contained"
                sx={buttonSxContained}
                type="submit"
                onClick={() => setShowInput(false)}
              >
                決定
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
