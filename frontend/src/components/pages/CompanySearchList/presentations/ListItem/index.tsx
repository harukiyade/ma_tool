import React from "react";
import { Company } from "../../containers";
import { Divider, ListItem as MUIListItem, Typography } from "@mui/material";
import { Icon } from "@/components/parts/Icon";
import { SubInfoItem } from "../SubInfoItem";
import styles from "./index.module.scss";

type Props = {
  company: Company;
};

export const ListItem = ({ company }: Props) => {
  const {
    name,
    id,
    industry,
    address,
    establishmentYear,
    representativeName,
    capital,
  } = company;

  return (
    <>
      <MUIListItem className={styles.container}>
        <div className={styles.mainInfo}>
          <Typography
            variant="h2"
            paragraph
            fontWeight="bold"
            sx={{ color: "text.primary" }}
          >
            {name}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
            企業ID：{id}
          </Typography>
        </div>
        <div className={styles.icons}>
          <Icon icon="copy" />
        </div>
        <dl className={styles.subInfoList}>
          <SubInfoItem title="業種" data={industry ?? "-"} />
          <SubInfoItem title="住所" data={address ?? "-"} />
          <SubInfoItem
            title="設立年度"
            data={establishmentYear ?? "-"}
            dataText="年"
          />
        </dl>
        <dl className={styles.subInfoList}>
          <SubInfoItem title="代表者名" data={representativeName ?? "-"} />
          <SubInfoItem title="資本金等" data={capital ?? "-"} dataText="円" />
        </dl>
      </MUIListItem>
      <Divider />
    </>
  );
};
