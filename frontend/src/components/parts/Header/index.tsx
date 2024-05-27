import React, { useState } from "react";
import { Icon } from "../Icon";
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  ThemeProvider,
  Tooltip,
  Typography,
} from "@mui/material";
import styles from "./index.module.scss";
import { tabTheme } from "@/components/themes";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";

export default function Header() {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  /** headerのタブ名リスト */
  const navList: {
    id: string;
    label: string;
    icon: React.ReactElement;
    url: string;
  }[] = [
    {
      id: "1",
      label: "リスト",
      icon: <Icon icon="list" />,
      url: "/approach",
    },
    {
      id: "2",
      label: "会社一覧",
      icon: <Icon icon="search" />,
      url: "/company",
    },
    {
      id: "3",
      label: "行動履歴",
      icon: <Icon icon="sales" />,
      url: "/history",
    },
    { id: "4", label: "日報", icon: <Icon icon="sales" />, url: "/reports" },
  ];

  return (
    <Box sx={{ flexGrow: 1, width: "100%", position: "fixed", zIndex: "100" }}>
      <AppBar position="static" className={styles.appBar}>
        <div className={styles.toolBar}>
          <Typography color="text.primary" variant="h6" component="a" href="/">
            MA Tool
          </Typography>
          <ThemeProvider theme={tabTheme}>
            <Tabs
              value={tabValue}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="primary"
              indicatorColor="primary"
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
          </ThemeProvider>
          <AccountMenu />
        </div>
      </AppBar>
    </Box>
  );
}

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
