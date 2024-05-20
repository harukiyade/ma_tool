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
import { TextField } from "@/components/parts/TextField";

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

const tagOptions = ["業種", "設立年度", "資本金等"];

const textFieldSx = {
  "& .MuiInputLabel-root.Mui-focused": {
    color: "primary.dark", // フォーカス時のラベル色
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "primary.dark", // フォーカス時のアウトライン色
    },
  },
};

export const CompanyList = () => {
  const [tag, setTag] = useState<string>("");
  const [keyWord, setKeyWord] = useState<string>("");
  const [option, setOption] = useState<string>("");

  const handleTag = (e: SelectChangeEvent) => {
    setTag(e.target.value);
  };

  const handleKeyWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
  };

  const handleOption = (e: SelectChangeEvent) => {
    setOption(e.target.value);
  };

  return (
    <section>
      <ThemeProvider theme={defaultTheme}>
        <p>該当件数{companyData.length}件</p>
        <div className={styles.searchOps}>
          <div className={styles.input}>
            {/* TODO: multiSelectで業界とか選べるように */}
            <Select
              label={"タグで絞り込み"}
              value={tag}
              options={tagOptions}
              onChange={() => handleTag}
              size="small"
            />
          </div>
          <div className={styles.input}>
            <TextField
              label="キーワードで検索"
              value={keyWord}
              onChange={() => handleKeyWord}
              size="small"
              sx={textFieldSx}
            />
          </div>
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
          {companyData.map((company) => {
            return <ListItem key={company.id} company={company} />;
          })}
        </MUIList>
      </ThemeProvider>
    </section>
  );
};
