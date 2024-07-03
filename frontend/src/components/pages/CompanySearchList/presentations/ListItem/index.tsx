import {
  Divider,
  IconButton,
  ListItem as MUIListItem,
  Typography,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import React, { FC, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./index.module.scss";
import { CorporateDetail } from "@/api/corporate/ResTypes";
import { Icon } from "@/components/parts/Icon";
import { Snackbar } from "@/components/parts/Snackbar";
import { URL_VALUES } from "@/libs/constants/url";

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
        message={"詳細ページへのリンクをコピーしました"}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};
