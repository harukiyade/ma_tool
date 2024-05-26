import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./index.module.scss";
import { TextField } from "@/components/parts/TextField";
import { Button } from "@/components/parts/Button";

const sidePannelSx = {
  borderRadius: 2,
  bgcolor: "background.paper",
};

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

export const SearchPannel = () => {
  const [keyWord, setKeyWord] = useState<string>("");

  const handleKeyWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <Button variant="contained" size="small">
          <Typography variant="button">検索条件を追加</Typography>
        </Button>
      </div>
      <Box component="aside" sx={sidePannelSx} className={styles.box}>
        <Typography variant="body2" fontWeight="bold">
          以下の条件で絞り込み中
        </Typography>
        <div className={styles.searchWrapper}>
          <div className={styles.option}>
            <Typography component="p">会社名</Typography>
            <TextField
              label="会社名を入力"
              value={keyWord}
              onChange={() => handleKeyWord}
              size="small"
              sx={textFieldSx}
            />
          </div>
          <div className={styles.option}>
            <Typography component="p">会社名</Typography>
            <TextField
              label="会社名を入力"
              value={keyWord}
              onChange={() => handleKeyWord}
              size="small"
              sx={textFieldSx}
            />
          </div>
          <div className={styles.option}>
            <Typography component="p">会社名</Typography>
            <TextField
              label="会社名を入力"
              value={keyWord}
              onChange={() => handleKeyWord}
              size="small"
              sx={textFieldSx}
            />
          </div>
          <div className={styles.option}>
            <Typography component="p">会社名</Typography>
            <TextField
              label="会社名を入力"
              value={keyWord}
              onChange={() => handleKeyWord}
              size="small"
              sx={textFieldSx}
            />
          </div>
        </div>
      </Box>
    </div>
  );
};
