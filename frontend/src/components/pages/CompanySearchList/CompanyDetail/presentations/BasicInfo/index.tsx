import React, { useState } from "react";
import styles from "./index.module.scss";
import { Box, Typography } from "@mui/material";
import { TextField } from "@/components/parts/TextField";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import {
  buttonSxContained,
  buttonSxOutlined,
  textFieldSecondarySx,
} from "@/components/themes/styleSx";
import { Button } from "@/components/parts/Button";
import {
  AdditionalInfoFormType,
  ExtraInfoFormType,
} from "../../containers/formSchema";
import { AdditionalInfoInputOverlay } from "../AdditionalInfoInputOverlay";
import { box } from "./sxStyles";

type DataDisplayType = {
  title: string;
  data: string;
}[];
export type AdditionalDataDisplayType = {
  title: string;
  data: string | undefined;
  formName: keyof AdditionalInfoFormType;
}[];

export const BasicInfo = () => {
  const [showAdditionalInput, setShowAdditionalInput] = useState(false);
  const [showExtraInput, setShowExtraInput] = useState(false);

  const {
    control: controlExtra,
    getValues: getValuesExtra,
    handleSubmit: handleSubmitExtra,
  } = useFormContext<ExtraInfoFormType>();

  const additionalInfoMethods = useFormContext<AdditionalInfoFormType>();

  const onSubmitExtraInfo: SubmitHandler<ExtraInfoFormType> = (data) => {
    console.log("備考：", data);
  };

  const onSubmitAdditionalInfo: SubmitHandler<AdditionalInfoFormType> = (
    data
  ) => {
    console.log("追加情報：", data);
    setShowAdditionalInput(false);
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

  const additionalData: AdditionalDataDisplayType = [
    {
      title: "代表者",
      data: additionalInfoMethods.getValues("name"),
      formName: "name",
    },
    {
      title: "代表者郵便番号",
      data: additionalInfoMethods.getValues("zipCode"),
      formName: "zipCode",
    },
    {
      title: "代表者住所",
      data: additionalInfoMethods.getValues("address"),
      formName: "address",
    },
    {
      title: "代表者誕生日",
      data: additionalInfoMethods.getValues("birthday"),
      formName: "birthday",
    },
    {
      title: "株主",
      data: additionalInfoMethods.getValues("shareholder"),
      formName: "shareholder",
    },
    {
      title: "業種-中",
      data: additionalInfoMethods.getValues("businessM"),
      formName: "businessM",
    },
    {
      title: "業種-小",
      data: additionalInfoMethods.getValues("businessS"),
      formName: "businessS",
    },
    {
      title: "業種-細",
      data: additionalInfoMethods.getValues("businessXS"),
      formName: "businessXS",
    },
  ];

  // TODO: 業種の情報はプルダウンにしておく(フロントでもつかDBにするかは検討)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Typography variant="h2">基本情報</Typography>
        <Box sx={box} className={styles.basicInfoBox} component="section">
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
        <div className={styles.addButton}>
          <Typography variant="h2">追加情報</Typography>
          <Button
            size="small"
            variant="outlined"
            onClick={() => setShowAdditionalInput(true)}
            sx={buttonSxOutlined}
          >
            編集
          </Button>
        </div>
        <AdditionalInfoInputOverlay
          isOpen={showAdditionalInput}
          handleClose={() => setShowAdditionalInput(false)}
          onSubmit={onSubmitAdditionalInfo}
          methods={additionalInfoMethods}
          formOptions={additionalData}
        />
        <Box sx={box} className={styles.additionalInfoBox} component="section">
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
            onClick={() => setShowExtraInput(true)}
            sx={buttonSxOutlined}
          >
            編集
          </Button>
        </div>
        <Box sx={box} className={styles.otherInfoBox} component="section">
          <dl className={styles.dataList}>{getValuesExtra("info")}</dl>
        </Box>
        {showExtraInput && (
          <form
            onSubmit={handleSubmitExtra(onSubmitExtraInfo)}
            className={styles.inputForm}
          >
            <Controller
              control={controlExtra}
              name="info"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="情報を入力"
                  value={getValuesExtra("info")}
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
                onClick={() => setShowExtraInput(false)}
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
