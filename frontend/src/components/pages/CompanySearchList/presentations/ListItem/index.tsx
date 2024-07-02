import React, { FC, useState } from "react";
import {
  Divider,
  IconButton,
  ListItem as MUIListItem,
  Typography,
  Tooltip,
  Snackbar,
} from "@mui/material";
import { Icon } from "@/components/parts/Icon";
import styles from "./index.module.scss";
import { CorporateDetail } from "@/api/corporate/ResTypes";
import Link from "next/link";
import { URL_VALUES } from "@/libs/constants/url";
import { CopyToClipboard } from "react-copy-to-clipboard";

type Props = {
  company: CorporateDetail;
};

export const ListItem: FC<Props> = ({ company }) => {
  const { name, location } = company;
  const [isOpen, setIsOpen] = useState(false); //snackbar開閉管理

  /** 詳細ページへのリンク */
  const detailPageLink = `${URL_VALUES.company}/${company.corporateNumber}`;

  /** 詳細ページへのリンク + ドメイン */
  const linkToDetailPage =
    process.env.NEXT_PUBLIC_FRONTEND_URL + detailPageLink;

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpen(false);
  };

  // snackbarのUI
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Icon fontSize="small" icon="close" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <MUIListItem className={styles.container}>
        <div className={styles.mainInfo}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color: "text.primary" }}
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="dd"
            sx={{ color: "text.primary" }}
          >
            {location}
          </Typography>
        </div>
        <div className={styles.icons}>
          <Link href={detailPageLink} target="_blank" rel="noopener noreferrer">
            <IconButton>
              <Icon icon="newTab" />
            </IconButton>
          </Link>
          <CopyToClipboard text={linkToDetailPage}>
            <Tooltip title="リンクをコピー">
              <IconButton onClick={() => setIsOpen(true)}>
                <Icon icon="copy" />
              </IconButton>
            </Tooltip>
          </CopyToClipboard>
        </div>
      </MUIListItem>
      <Divider />
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message="詳細ページへのリンクをコピーしました"
        action={action}
      />
    </>
  );
};
