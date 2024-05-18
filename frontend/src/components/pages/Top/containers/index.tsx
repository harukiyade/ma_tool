"use client";
import React, { useState } from "react";
import { Box, Typography, AppBar, Tabs, Tab } from "@mui/material";
import { TabContentFrame } from "@/components/parts/TabContentFrame";
import { ThemeProvider } from "@mui/material/styles";
import styles from "./index.module.scss";
import { Icon } from "@/components/parts/Icon";
import { TodoList } from "../../TodoList/containers";
import { theme } from "@/components/themes";

export default function Top() {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  /** headerのタブ名リスト */
  const navList: { id: string; label: string; icon: React.ReactElement }[] = [
    {
      id: "1",
      label: "TODOリスト",
      icon: <Icon icon="list" />,
    },
    { id: "2", label: "会社一覧", icon: <Icon icon="search" /> },
    { id: "3", label: "行動履歴", icon: <Icon icon="sales" /> },
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
                      icon={listItem.icon}
                      iconPosition="start"
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
          <TodoList />
        </TabContentFrame>
        <TabContentFrame value={tabValue} index={1}>
          会社一覧のページ
        </TabContentFrame>
        <TabContentFrame value={tabValue} index={2}>
          行動履歴のページ
        </TabContentFrame>
      </section>
    </>
  );
}
