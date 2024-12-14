import React from "react";
import Button from "./button";
import { Alert, Snackbar } from "@mui/material";

interface SaveOvertimeProps {
  handleClose: () => void;
  isOpen: boolean;
  overtime: number;
  showSnackBar: () => void;
}

const saveOvertime = ({
  handleClose,
  isOpen,
  overtime,
  showSnackBar,
}: SaveOvertimeProps) => {
  return (
    <div className="text-center">
      <Button
        className="m-2"
        type="submit"
        onClick={() => {
          localStorage.setItem("js-study-overtime", overtime.toString());
          showSnackBar();
        }}
      >
        変更を保存
      </Button>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          現在の残業時間が保存されました！
        </Alert>
      </Snackbar>
    </div>
  );
};

export default saveOvertime;
