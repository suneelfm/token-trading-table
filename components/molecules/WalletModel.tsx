import { ContentCopyRounded, SyncAltRounded } from "@mui/icons-material";
import { Grid, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import RoundedButton from "../atoms/RoundedButton";
import { Filter } from "@/constants/filters";

type WalletModelProps = {
  filter: Filter;
};
export default function WalletModel(props: WalletModelProps) {
  const { filter } = props;
  return (
    <>
      <Grid container px={2} py={1} borderBottom={"1px solid #32354280"}>
        <Grid size={4}>
          <Typography color="#c8c9d1" variant="caption">
            Total Value
          </Typography>
          <Typography color="#c8c9d1" variant="h6">
            ${0}
          </Typography>
        </Grid>
        <Grid size={8} className="flex justify-end">
          <Tooltip title="Copy primary SOL address" placement="top">
            <div className="text-[12px] text-[#c8c9d1] hover:bg-[#323542] hover:text-[#fff] h-fit px-[4px] py-[2px] rounded-[4px] cursor-pointer">
              <ContentCopyRounded sx={{ fontSize: "15px" }} /> Solana
            </div>
          </Tooltip>
          <Tooltip title="Copy perps address" placement="top">
            <div className="text-[12px] text-[#c8c9d1] hover:bg-[#323542] hover:text-[#fff] h-fit px-[4px] py-[2px] rounded-[4px] cursor-pointer ml-[5px]">
              <ContentCopyRounded sx={{ fontSize: "15px" }} /> Perps
            </div>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        px={2}
        py={1}
        borderBottom={"1px solid #32354280"}
        className="hover:bg-[#323542] cursor-pointer"
      >
        <div className="flex text-[white]">
          <Image alt="Solana" width={16} height={16} src={filter?.image} />
          {0}
        </div>
        <SyncAltRounded sx={{ color: "#c8c9d1", fontSize: "18px" }} />
        <div className="flex text-[white]">
          <Image
            className="mx-[5px]"
            alt="Solana"
            width={16}
            height={16}
            src={
              "https://axiom.trade/images/usdc-perps.svg?dpl=dpl_DGHGbrq9X3HZanPrCgtgzyRg1vWh"
            }
          />
          {0}
        </div>
      </Grid>
      <Grid px={1} py={2}>
        <RoundedButton className="mx-[10px]" fill="#526fff">
          <div className="px-[30px]">Deposit</div>
        </RoundedButton>
        <RoundedButton className="mx-[10px]" fill="#22242d">
          <div className="px-[30px]">Withdraw</div>
        </RoundedButton>
      </Grid>
    </>
  );
}
