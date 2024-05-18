"use client";
import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./index.module.scss";
import { Button } from "@/components/parts/Button";
import Link from "next/link";

export const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "100%", position: "fixed", zIndex: "100" }}>
      <AppBar position="static">
        <Toolbar className={styles.headerMenu}>
          <Typography color="inherit" variant="h6" component="a" href="/">
            MA Tool
          </Typography>

          <div className={styles.menuItems}>
            <Button color="inherit" variant="text">
              <Link href="/" className={styles.link}>
                AIセールス
              </Link>
            </Button>
            <Button color="inherit" variant="text">
              <Link href="/" className={styles.link}>
                セールスシグナル
              </Link>
            </Button>
            <Button color="inherit" variant="text">
              <Link href="/register" className={styles.link}>
                ターゲティング
              </Link>
            </Button>
            <Button color="inherit" variant="text">
              <Link href="/posts" className={styles.link}>
                リスト
              </Link>
            </Button>
            <Button color="inherit" variant="text">
              <Link href="/study-log" className={styles.link}>
                アプローチ
              </Link>
            </Button>
            <Button color="inherit" variant="text">
              <Link href="/study-log" className={styles.link}>
                分析
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
