"use client";
import { Avatar, Badge, Grid, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import Icon from "../atoms/Icon";
import { TABS } from "@/constants/tabs";
import TabItem from "../atoms/TabItem";
import RoundedButton from "../atoms/RoundedButton";
import {
  AccountBalanceWalletOutlined,
  ExpandMore,
  ManageAccountsOutlined,
  Notifications,
  SearchRounded,
  StarBorderPurple500,
} from "@mui/icons-material";
import DropdownDialog from "../molecules/DropdownDialog";
import Image from "next/image";
import { Filter, FILTERS } from "@/constants/filters";
import { usePathname, useRouter } from "next/navigation";
import WalletModel from "../molecules/WalletModel";

export default function Header() {
  const [filter, setFilter] = useState<Filter>(FILTERS[0]);
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Grid
      container
      height={{ xs: "40px", sm: "58px" }}
      paddingLeft={{ xs: "11px", sm: "14px", md: "22px" }}
      flexWrap={"nowrap"}
      className="items-center border-b border-b-[#22242d] whitespace-nowrap"
    >
      <button className="flex items-center">
        <Icon name="logo" />
        <Grid display={{ xs: "none", lg: "block" }} pr={1}>
          <Icon name="logoText" />
        </Grid>
      </button>
      <Grid display={{ xs: "none", sm: "flex" }} px={"8px"} overflow={"hidden"}>
        {TABS.map(({ id, label, route }) => (
          <TabItem
            key={id}
            isActive={route === pathname}
            onClick={() => router.push(route)}
          >
            {label}
          </TabItem>
        ))}
      </Grid>
      <Grid
        px={"8px"}
        minWidth={{ xs: "97%", sm: "520px", lg: "750px" }}
        className="flex justify-end"
      >
        <Grid display={{ xs: "none", sm: "flex" }}>
          <RoundedButton className="mx-[10px]">
            <div className="flex items-center px-[8px]">
              <SearchRounded sx={{ fontSize: "20px" }} />
              <Typography
                display={{ xs: "none", lg: "flex" }}
                sx={{ fontSize: "11px", color: "#777a8c", ml: "5px" }}
              >
                Search by token or CA...
                <span className="rounded-full border border-[#22242d] px-[10px] ml-[5px]">
                  /
                </span>
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
          <RoundedButton fill="#526fff" className="mx-[10px]">
            <span className="px-[8px]">Deposit</span>
          </RoundedButton>
          <RoundedButton className="mx-[10px]" fill="#22242d">
            <span className="px-[4px]">
              <StarBorderPurple500 sx={{ fontSize: "20px" }} />
            </span>
          </RoundedButton>
          <RoundedButton className="mx-[10px]" fill="#22242d">
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
          <WalletModel filter={filter} />
        </DropdownDialog>
        <Grid display={{ xs: "block", sm: "none" }}>
          <RoundedButton className="mx-[10px]" fill="#22242d">
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
        <RoundedButton className="mx-[10px]" fill="#22242d">
          <span className="px-[4px]">
            <ManageAccountsOutlined sx={{ fontSize: "20px" }} />
          </span>
        </RoundedButton>
      </Grid>
    </Grid>
  );
}
