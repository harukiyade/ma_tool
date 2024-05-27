"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";
import {
  AppBar,
  Box,
  Tab,
  Tabs,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { tabTheme } from "@/components/themes";
import { Icon } from "@/components/parts/Icon";
import { TabContentFrame } from "@/components/parts/TabContentFrame";
import { Sourcing } from "../presentations/Sourcing";
import { AntisocialCheck } from "../presentations/AntisocialCheck";
import { Staff } from "../presentations/Staff";
import { Documents } from "../presentations/Documents";

type Props = {
  id: string;
};

export const CompanyDetail = ({ id }: Props) => {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const navList: {
    id: string;
    label: string;
    // icon: React.ReactElement;
  }[] = [
    {
      id: "1",
      label: "ソーシング制限",
      //   icon: <Icon icon="list" />,
    },
    {
      id: "2",
      label: "反社チェック",
      //   icon: <Icon icon="search" />,
    },
    {
      id: "3",
      label: "自社担当者",
      //   icon: <Icon icon="sales" />,
    },
    {
      id: "4",
      label: "資料・契約書",
      //   icon: <Icon icon="sales" />,
    },
  ];

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          position: "fixed",
          zIndex: "100",
        }}
      >
        <AppBar
          variant="outlined"
          position="static"
          className={styles.appBar}
          sx={{ bgcolor: "background.default" }}
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
        企業ID: {id}
        <TabContentFrame index={0} value={tabValue}>
          <Sourcing />
        </TabContentFrame>
        <TabContentFrame index={1} value={tabValue}>
          <AntisocialCheck />
        </TabContentFrame>
        <TabContentFrame index={2} value={tabValue}>
          <Staff />
        </TabContentFrame>
        <TabContentFrame index={3} value={tabValue}>
          <Documents />
        </TabContentFrame>
      </div>
    </div>
  );
};
