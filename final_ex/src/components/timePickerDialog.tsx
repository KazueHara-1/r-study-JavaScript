import React from "react";
import { DateTime } from "luxon";
import {
  LocalizationProvider,
  PickerChangeHandlerContext,
  TimeValidationError,
} from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { TimePicker } from "@mui/x-date-pickers";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "./button";

interface TimePickerDialogProps {
  defaultValue?: DateTime<true>;
  onClose: () => void;
  onChange?:
    | ((
        value: DateTime<boolean> | null,
        context: PickerChangeHandlerContext<TimeValidationError>
      ) => void)
    | undefined;
  open: boolean;
}

const TimePickerDialog = ({
  defaultValue,
  onClose,
  onChange,
  open,
}: TimePickerDialogProps) => {
  return (
    <>
      <Dialog onClose={onClose} open={open}>
        <DialogTitle>業務開始時間</DialogTitle>
        <div className="m-4">
          <LocalizationProvider dateAdapter={AdapterLuxon}>
            <TimePicker
              ampm={false}
              onChange={onChange}
              defaultValue={defaultValue}
            />
          </LocalizationProvider>
          <br />
          <Button className="mt-2 ml-auto block" onClick={onClose}>
            OK
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default TimePickerDialog;
