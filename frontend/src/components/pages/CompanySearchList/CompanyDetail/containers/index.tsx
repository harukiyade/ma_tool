"use client";
import {
  AppBar,
  Box,
  Tab,
  Tabs,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { FormProvider } from "react-hook-form";
import { Icon } from "@/components/parts/Icon";
import { TabContentFrame } from "@/components/parts/TabContentFrame";
import { tabTheme } from "@/components/themes";
import { AntisocialCheck } from "../presentations/AntisocialCheck";
import { BasicInfo } from "../presentations/BasicInfo";
import { Documents } from "../presentations/Documents";
import { Sourcing } from "../presentations/Sourcing";
import { Staff } from "../presentations/Staff";
import styles from "./index.module.scss";
import { appBar, headerBox } from "./sxStyles";
import { useFormHandler } from "./useFormHandler";

type Props = {
  id: string;
};

export const CompanyDetail = ({ id }: Props) => {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const { extraInfoFormMethods, additionalInfoFormMethods } = useFormHandler();

  const navList: {
    id: string;
    label: string;
  }[] = [
    {
      id: "1",
      label: "基本情報",
    },
    {
      id: "2",
      label: "ソーシング制限",
    },
    {
      id: "3",
      label: "反社チェック",
    },
    {
      id: "4",
      label: "自社担当者",
    },
    {
      id: "5",
      label: "資料・契約書",
    },
  ];

  // TODO: ちゃんとしたflg管理に直す
  // type SourcingType = "forbidden" | "available";
  const sourcing: string = "available";

  return (
    <>
      <div className={styles.titleWrapper}>
        <div>
          <Typography variant="h1" fontWeight="bold">
            サンプル株式会社
          </Typography>
          <Typography variant="caption" color="text.secondary">
            法人番号: {id}
          </Typography>
        </div>
        <div className={styles.sourceFlg}>
          {sourcing === "forbidden" ? (
            <>
              <Icon icon="doNot" color="error" />
              <Typography variant="overline">アポ禁止</Typography>
            </>
          ) : sourcing === "available" ? (
            <>
              <Icon icon="check" color="success" />
              <Typography variant="overline">アポ可能</Typography>
            </>
          ) : (
            <>
              <Icon icon="question" />
              <Typography variant="overline">ソーシング制限情報なし</Typography>
            </>
          )}
        </div>
      </div>
      <Box sx={headerBox}>
        <AppBar
          variant="outlined"
          position="static"
          className={styles.appBar}
          sx={appBar}
        >
          <div className={styles.toolBar}>
            <ThemeProvider theme={tabTheme}>
              <Tabs
                value={tabValue}
                onChange={handleChange}
                aria-label="basic tabs example"
                textColor="secondary"
                indicatorColor="secondary"
                className={styles.tabs}
              >
                {navList.map((listItem) => {
                  return (
                    <Tab
                      key={listItem.id}
                      iconPosition="start"
                      label={listItem.label}
                      id={`tabId-${listItem.id}`}
                      aria-controls={`tabpanel-${listItem.id}`}
                    />
                  );
                })}
              </Tabs>
            </ThemeProvider>
          </div>
        </AppBar>
      </Box>
      <div className={styles.wrapper}>
        <TabContentFrame index={0} value={tabValue}>
          <FormProvider {...extraInfoFormMethods}>
            <FormProvider {...additionalInfoFormMethods}>
              <BasicInfo />
            </FormProvider>
          </FormProvider>
        </TabContentFrame>
        <TabContentFrame index={1} value={tabValue}>
          <Sourcing />
        </TabContentFrame>
        <TabContentFrame index={2} value={tabValue}>
          <AntisocialCheck />
        </TabContentFrame>
        <TabContentFrame index={3} value={tabValue}>
          <Staff />
        </TabContentFrame>
        <TabContentFrame index={4} value={tabValue}>
          <Documents />
        </TabContentFrame>
      </div>
    </>
  );
};
