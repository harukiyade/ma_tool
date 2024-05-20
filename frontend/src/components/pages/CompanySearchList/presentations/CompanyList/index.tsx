import React, { useState } from "react";
import {
  Divider,
  List as MUIList,
  SelectChangeEvent,
  ThemeProvider,
} from "@mui/material";
import { ListItem } from "../ListItem";
import { companyData } from "../../containers/sampleData";
import { defaultTheme } from "@/components/themes";
import styles from "./index.module.scss";
import { Select } from "@/components/parts/Select";

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

export const CompanyList = () => {
  const [option, setOption] = useState<string>("");
  const handleChange = (e: SelectChangeEvent) => {
    setOption(e.target.value);
  };
  return (
    <section>
      <ThemeProvider theme={defaultTheme}>
        <div>
          <p>該当件数{companyData.length}件</p>
          <p>絞り込み{option}</p>
          <div className={styles.selector}>
            <Select
              label={"search"}
              value={option}
              options={searchOptions}
              onChange={() => handleChange}
              size="small"
            />
          </div>
        </div>
        <Divider sx={{ borderColor: "primary.dark" }} />
        <MUIList>
          {companyData.map((company) => {
            return <ListItem key={company.id} company={company} />;
          })}
        </MUIList>
      </ThemeProvider>
    </section>
  );
};
