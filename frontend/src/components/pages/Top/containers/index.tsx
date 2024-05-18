"use client";
import React, { useState } from "react";
import { Box, Typography, AppBar, Tabs, Tab } from "@mui/material";
import { TabContentFrame } from "@/components/parts/TabContentFrame";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./index.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff200",
      light: "#d6e6f2",
    },
    secondary: {
      main: "#303841",
    },
  },
});

export default function Top() {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  /** headerのタブ名リスト */
  const navList: { id: string; label: string }[] = [
    { id: "0", label: "AIセールス" },
    { id: "1", label: "セールスシグナル" },
    { id: "2", label: "ターゲティング" },
    { id: "3", label: "リスト" },
    { id: "4", label: "アプローチ" },
    { id: "5", label: "分析" },
  ];

  return (
    <>
      <Box
        sx={{ flexGrow: 1, width: "100%", position: "fixed", zIndex: "100" }}
      >
        <ThemeProvider theme={theme}>
          <AppBar position="static" className={styles.appBar}>
            <div className={styles.toolBar}>
              <Typography color="secondary" variant="h6" component="a" href="/">
                MA Tool
              </Typography>
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
                      label={listItem.label}
                      id={`tabId-${listItem.id}`}
                      aria-controls={`tabpanel-${listItem.id}`}
                    />
                  );
                })}
              </Tabs>
            </div>
          </AppBar>
        </ThemeProvider>
      </Box>
      <section className={styles.container}>
        <TabContentFrame value={tabValue} index={0}>
          AIセールスのページ
        </TabContentFrame>
        <TabContentFrame value={tabValue} index={1}>
          セールスシグナルのページ
        </TabContentFrame>
        <TabContentFrame value={tabValue} index={2}>
          ターゲティングのページ
        </TabContentFrame>
        <TabContentFrame value={tabValue} index={3}>
          リストのページ
        </TabContentFrame>
        <TabContentFrame value={tabValue} index={4}>
          アプローチのページ
        </TabContentFrame>
        <TabContentFrame value={tabValue} index={5}>
          分析のページ
        </TabContentFrame>
      </section>
    </>
  );
}
