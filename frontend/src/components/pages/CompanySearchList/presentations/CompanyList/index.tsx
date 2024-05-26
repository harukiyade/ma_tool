import React, { useState } from "react";
import {
  Divider,
  List as MUIList,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { ListItem } from "../ListItem";
import styles from "./index.module.scss";
import { Select } from "@/components/parts/Select";
import { CorporateDetailList } from "@/api/corporate/ResTypes";

type Props = {
  data: CorporateDetailList;
};

const searchOptions = [
  "更新日新しい順",
  "更新日古い順",
  "資本金多い順",
  "資本金少ない順",
  "自己資本比率高い順",
  "自己資本比率低い順",
  "創立年数新しい順",
  "創立年数古い順",
];

export const CompanyList = ({ data }: Props) => {
  const [option, setOption] = useState<string>("");

  const handleOption = (e: SelectChangeEvent) => {
    setOption(e.target.value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.searchOps}>
        <p className={styles.resultLength}>
          <Typography component="p" variant="h2" fontWeight="bold">
            {data.length}
          </Typography>
          <Typography component="p" variant="h4">
            件
          </Typography>
        </p>
        <div className={styles.input}>
          <Select
            label={"並び替え"}
            value={option}
            options={searchOptions}
            onChange={() => handleOption}
            size="small"
          />
        </div>
      </div>
      <Divider sx={{ borderColor: "primary.dark" }} />
      <MUIList>
        {data.map((company) => {
          return <ListItem key={company.corporate_number} company={company} />;
        })}
      </MUIList>
    </section>
  );
};
