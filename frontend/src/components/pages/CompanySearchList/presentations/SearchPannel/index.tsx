import { Box, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import { Button } from "@/components/parts/Button";
import { TextField } from "@/components/parts/TextField";
import { textFieldSx } from "@/components/themes/styleSx";
import { SearchParamType } from "../../containers/formSchema";
import { CompanySearchOverlay } from "../CompanySearchOverlay";
import styles from "./index.module.scss";

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
          <Typography variant="body2" fontWeight="bold">
            以下の条件で絞り込み中
          </Typography>
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
                    <TextField
                      {...field}
                      label="業界・業種を入力"
                      value={getValues("businessType")}
                      size="small"
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
                      sx={textFieldSx}
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
