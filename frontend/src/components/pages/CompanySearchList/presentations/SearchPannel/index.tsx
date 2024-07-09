import { Box, Divider, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import { Button } from "@/components/parts/Button";
import { Icon } from "@/components/parts/Icon";
import { Select } from "@/components/parts/Select";
import { TextField } from "@/components/parts/TextField";
import { buttonSxOutlinedText, textFieldSx } from "@/components/themes/styleSx";
import { SearchParamType } from "../../containers/formSchema";
import { CompanySearchOverlay } from "../CompanySearchOverlay";
import { businessTypes, prefectures } from "./constants";
import styles from "./index.module.scss";
import { ddSx } from "./styleSx";

const sidePannelSx = {
  borderRadius: 2,
  bgcolor: "background.paper",
};

export const SearchPannel: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); //会社検索オーバーレイの開閉

  const { control, getValues, setValue, handleSubmit, trigger } =
    useFormContext<SearchParamType>();

  const onSubmit: SubmitHandler<SearchParamType> = (data) => {
    setValue("name", data.name);
    setValue("companyId", data.companyId);
    setValue("prefecture", data.prefecture);
    setValue("businessType", data.businessType);
    trigger();
  };

  return (
    <>
      <aside className={styles.container}>
        <div className={styles.inputWrapper}>
          <Button
            variant="contained"
            size="small"
            onClick={() => setIsOpen(true)}
          >
            <Typography variant="button">検索条件を追加</Typography>
          </Button>
        </div>
        <Box sx={sidePannelSx} className={styles.box}>
          <div className={styles.titleWrapper}>
            <Typography variant="body2" fontWeight="bold" color="GrayText">
              現在の検索条件
            </Typography>
            <Button
              variant="outlined"
              size="small"
              fullWidth={false}
              sx={buttonSxOutlinedText}
            >
              <Icon icon="bookmark" fontSize="small" />
              条件保存
            </Button>
          </div>
          <div className={styles.conditionWrapper}>
            <dl className={styles.condition}>
              <Typography component="dt">売上高</Typography>
              <dd className={styles.conditionDataWrapper}>
                <Typography
                  variant="caption"
                  sx={ddSx}
                  className={styles.conditionData}
                >
                  1億～5億
                </Typography>
                <Typography
                  variant="caption"
                  sx={ddSx}
                  className={styles.conditionData}
                >
                  5億～10億
                </Typography>
                <Typography
                  variant="caption"
                  sx={ddSx}
                  className={styles.conditionData}
                >
                  50億～100億
                </Typography>
              </dd>
            </dl>
            <dl className={styles.condition}>
              <Typography component="dt">正社員数</Typography>
              <dd className={styles.conditionDataWrapper}>
                <Typography
                  variant="caption"
                  sx={ddSx}
                  className={styles.conditionData}
                >
                  100人～200人
                </Typography>
              </dd>
            </dl>
            <dl className={styles.condition}>
              <Typography component="dt">設立年数</Typography>
              <dd className={styles.conditionDataWrapper}>
                <Typography
                  variant="caption"
                  sx={ddSx}
                  className={styles.conditionData}
                >
                  5年～10年
                </Typography>
              </dd>
            </dl>
            <dl className={styles.condition}>
              <Typography component="dt">資本金</Typography>
              <dd className={styles.conditionDataWrapper}>
                <Typography
                  variant="caption"
                  sx={ddSx}
                  className={styles.conditionData}
                >
                  5000万～3億
                </Typography>
              </dd>
            </dl>
          </div>
          <Divider />
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
                    <Select
                      {...field}
                      label="業界・業種を入力"
                      value={
                        getValues("businessType") === "未選択"
                          ? ""
                          : getValues("businessType")
                      }
                      options={businessTypes}
                      size="small"
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
                    <Select
                      {...field}
                      label="都道府県を入力"
                      value={
                        getValues("prefecture") === "未選択"
                          ? ""
                          : getValues("prefecture")
                      }
                      options={prefectures}
                      size="small"
                    />
                  )}
                />
              </div>
            </div>
            <Button variant="contained" type="submit">
              検索
            </Button>
          </form>
        </Box>
      </aside>
      <CompanySearchOverlay
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        title="検索条件を追加"
      />
    </>
  );
};
