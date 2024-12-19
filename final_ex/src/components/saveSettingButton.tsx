import React from "react";
import Button from "./button";
import { Alert, Snackbar } from "@mui/material";

interface SaveSettingButtonProps {
  handleClose: () => void;
  isOpen: boolean;
  onClick: () => void;
}

const SaveSettingButton = ({
  handleClose,
  isOpen,
  onClick,
}: SaveSettingButtonProps) => {
  return (
    <>
      <Button className="my-2 mx-auto" type="submit" onClick={onClick}>
        変更を保存
      </Button>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          設定が保存されました！
        </Alert>
      </Snackbar>
    </>
  );
};

export default SaveSettingButton;
