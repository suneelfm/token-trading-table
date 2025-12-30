import React from "react";
import RoundedButton from "../atoms/RoundedButton";
import { Grid } from "@mui/material";
import { BoltOutlined } from "@mui/icons-material";
import Image from "next/image";

type InputFilterButtonProps = {
  inputClasses?: string;
};
export default function InputFilterButton(props: InputFilterButtonProps) {
  return (
    <RoundedButton>
      <Grid className="flex px-[10px] h-full items-center">
        <BoltOutlined sx={{ fontSize: "18px", mr: "5px" }} />
        <input className={`${props.inputClasses} outline-none`} />
        <Image
          className="mr-[5px] ml-[10px]"
          alt="Solana"
          width={16}
          height={16}
          src={"https://axiom.trade/images/sol-fill.svg"}
        />
        <Grid height={"100%"} borderLeft={"1px solid #22242d"} />
        <span className="px-[4px] py-[2px] mx-[2px] rounded hover:bg-[#22242d99] text-[10px]">
          P1
        </span>
        <span className="px-[4px] py-[2px] mx-[2px] rounded hover:bg-[#22242d99] text-[10px]">
          P2
        </span>
        <span className="px-[4px] py-[2px] mx-[2px] rounded hover:bg-[#22242d99] text-[10px]">
          P3
        </span>
      </Grid>
    </RoundedButton>
  );
}
