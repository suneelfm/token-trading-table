"use client";
import React, { ReactNode, useState } from "react";
import RoundedButton from "../atoms/RoundedButton";
import { Menu } from "@mui/material";

type DropdownDialogProps = {
  value: ReactNode;
  fill?: "#526fff" | "#22242d";
  children?: ReactNode;
};
export default function DropdownDialog(props: DropdownDialogProps) {
  const { value, children, fill } = props;
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);
  return (
    <>
      <RoundedButton
        fill={fill}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        className="mx-[10px]"
      >
        {value}
      </RoundedButton>
      {children && (
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          sx={{
            "& .MuiMenu-list": {
              bgcolor: "#18181a",
              padding: 0,
              border: "1px solid #323542",
            },
            "& .MuiPaper-root": {
              marginTop: "2px",
            },
          }}
        >
          {children}
        </Menu>
      )}
    </>
  );
}
