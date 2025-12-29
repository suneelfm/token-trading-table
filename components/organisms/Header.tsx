"use client";
import {
  Avatar,
  Badge,
  Grid,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Icon from "../atoms/Icon";
import { TABS } from "@/constants/tabs";
import TabItem from "../atoms/TabItem";
import RoundedButton from "../atoms/RoundedButton";
import {
  AccountBalanceWalletOutlined,
  ContentCopyRounded,
  ExpandMore,
  ManageAccounts,
  ManageAccountsOutlined,
  Notifications,
  SearchRounded,
  StarBorderPurple500,
  SyncAltRounded,
} from "@mui/icons-material";
import DropdownDialog from "../molecules/DropdownDialog";
import Image from "next/image";
import { FILTERS } from "@/constants/filters";

export default function Header() {
  const [filter, setFilter] = useState(FILTERS[0]);
  return (
    <Grid
      container
      height={{ xs: "40px", sm: "58px" }}
      paddingLeft={{ xs: "11px", sm: "14px", md: "22px" }}
      flexWrap={"nowrap"}
      className="flex items-center border-b border-b-[#22242d] whitespace-nowrap"
    >
      <button className="flex items-center">
        <Icon name="logo" />
        <Grid display={{ xs: "none", lg: "block" }} pr={1}>
          <Icon name="logoText" />
        </Grid>
      </button>
      <Grid display={{ xs: "none", sm: "flex" }} px={"8px"} overflow={"hidden"}>
        {TABS.map(({ id, label }) => (
          <TabItem key={id}>{label}</TabItem>
        ))}
      </Grid>
      <Grid
        px={"8px"}
        minWidth={{ xs: "100%", sm: "520px", lg: "750px" }}
        className="flex justify-end"
      >
        <Grid display={{ xs: "none", sm: "flex" }}>
          <RoundedButton>
            <div className="flex items-center px-[8px]">
              <SearchRounded sx={{ fontSize: "20px" }} />
              <Typography
                display={{ xs: "none", lg: "flex" }}
                sx={{ fontSize: "11px", color: "#777a8c", ml: "5px" }}
              >
                Search by token or CA...
                <div className="rounded-full border border-[#22242d] px-[10px] ml-[5px]">
                  /
                </div>
              </Typography>
            </div>
          </RoundedButton>
          <DropdownDialog
            value={
              <div className="flex items-center px-[8px]">
                <Image
                  className="mr-[5px]"
                  alt="Solana"
                  width={16}
                  height={16}
                  src={filter?.image}
                />
                {filter?.id}
                <ExpandMore className="ml-[4px]" />
              </div>
            }
          >
            {FILTERS.map((fil) => (
              <MenuItem
                key={fil.id}
                sx={{
                  color: "#c8c9d1",
                  fontSize: "13px",
                  fontWeight: "600",
                  bgcolor: filter?.id === fil.id ? "#32354266" : "",
                  borderRadius: "4px",
                  minWidth: "130px",
                  padding: "10px",
                  margin: "4px",
                  "&:hover": {
                    bgcolor: "#323542",
                  },
                }}
                onClick={() => setFilter(fil)}
              >
                <Image
                  className="mr-[5px]"
                  alt="Solana"
                  width={16}
                  height={16}
                  src={fil.image}
                />
                {fil.label}
              </MenuItem>
            ))}
          </DropdownDialog>
          <RoundedButton fill="#526fff">
            <span className="px-[8px]">Deposit</span>
          </RoundedButton>
          <RoundedButton fill="#22242d">
            <span className="px-[4px]">
              <StarBorderPurple500 sx={{ fontSize: "20px" }} />
            </span>
          </RoundedButton>
          <RoundedButton fill="#22242d">
            <span className="px-[4px]">
              <Notifications sx={{ fontSize: "20px" }} />
            </span>
          </RoundedButton>
        </Grid>
        <DropdownDialog
          fill="#22242d"
          value={
            <div className="flex items-center px-[8px]">
              <AccountBalanceWalletOutlined sx={{ fontSize: "18px" }} />
              <Grid
                display={{ xs: "flex", sm: "none", lg: "flex" }}
                ml="8px"
                className="border-r border-[#323542] pr-[8px] mr-[2px]"
              >
                <Image
                  className="mr-[5px]"
                  alt="Solana"
                  width={16}
                  height={16}
                  src={filter?.image}
                />
                {0}
              </Grid>
              <Grid display={{ xs: "flex", sm: "none", lg: "flex" }}>
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
              </Grid>

              <ExpandMore className="ml-[6px]" sx={{ fontSize: "18px" }} />
            </div>
          }
        >
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
            <RoundedButton fill="#526fff">
              <div className="px-[30px]">Deposit</div>
            </RoundedButton>
            <RoundedButton fill="#22242d">
              <div className="px-[30px]">Withdraw</div>
            </RoundedButton>
          </Grid>
        </DropdownDialog>
        <Grid display={{ xs: "block", sm: "none" }}>
          <RoundedButton fill="#22242d">
            <span className="px-[4px]">
              <SearchRounded sx={{ fontSize: "20px" }} />
            </span>
          </RoundedButton>
        </Grid>
        <Badge
          overlap="circular"
          variant="dot"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#12af80",
              outline: "3px solid #06070b",
            },
          }}
        >
          <Avatar
            src="./avatar.svg"
            sx={{ height: "28px", width: "28px" }}
          ></Avatar>
        </Badge>
        <RoundedButton fill="#22242d">
          <span className="px-[4px]">
            <ManageAccountsOutlined sx={{ fontSize: "20px" }} />
          </span>
        </RoundedButton>
      </Grid>
    </Grid>
  );
}
