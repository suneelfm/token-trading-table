"use client";
import RoundedButton from "@/components/atoms/RoundedButton";
import DropdownDialog from "@/components/molecules/DropdownDialog";
import InputFilterButton from "@/components/molecules/InputFilterButton";
import { COLUMNS } from "@/constants/columns";
import { FILTERS } from "@/constants/filters";
import { MOCK_DATA } from "@/constants/mockData";
import {
  AccountBalanceWalletOutlined,
  AlignVerticalCenterOutlined,
  BakeryDining,
  BookmarkRemoveOutlined,
  ContentCopyOutlined,
  EmojiEvents,
  ExpandMore,
  Face3,
  FormatListBulletedOutlined,
  GpsFixed,
  HelpOutlineOutlined,
  KeyboardAltOutlined,
  KeyboardArrowUp,
  Lightbulb,
  ManageAccountsOutlined,
  SearchOutlined,
  SettingsOutlined,
  SupervisorAccountOutlined,
  TuneOutlined,
  VolumeUpOutlined,
  Widgets,
} from "@mui/icons-material";
import { Avatar, Collapse, Grid, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export default function Pulse() {
  const [openSettingsCollapse, setOpenSettingsCollapse] = useState(true);
  return (
    <Grid className="h-full w-full">
      <Grid container alignItems={"center"} mb={2}>
        <Grid size={{ xs: 9, md: 4 }} className="flex">
          <Typography
            display={{ xs: "none", sm: "block" }}
            fontSize={"18px"}
            pr={1}
          >
            Pulse
          </Typography>
          {FILTERS.map(({ id, image, label }) => (
            <RoundedButton key={id} className="ml-[5px]">
              <Image
                className="mx-[5px]"
                alt={label}
                width={16}
                height={16}
                src={image}
              />
            </RoundedButton>
          ))}
        </Grid>
        <Grid
          size={8}
          display={{ xs: "none", md: "flex" }}
          className="justify-end"
        >
          <RoundedButton className="px-[5px] mx-[5px]">
            <HelpOutlineOutlined sx={{ fontSize: "18px" }} />
          </RoundedButton>
          <DropdownDialog
            fill="#22242d"
            value={
              <Grid className="flex px-[10px]">
                <FormatListBulletedOutlined
                  sx={{ fontSize: "18px", mr: "5px" }}
                />
                Display
                <ExpandMore className="ml-[6px]" sx={{ fontSize: "18px" }} />
              </Grid>
            }
          >
            <Grid></Grid>
          </DropdownDialog>
          <RoundedButton className="px-[5px] mx-[5px]">
            <BookmarkRemoveOutlined sx={{ fontSize: "18px" }} />
          </RoundedButton>
          <RoundedButton className="px-[5px] mx-[5px]">
            <KeyboardAltOutlined sx={{ fontSize: "18px" }} />
          </RoundedButton>
          <RoundedButton className="px-[5px] mx-[5px]">
            <VolumeUpOutlined sx={{ fontSize: "18px" }} />
          </RoundedButton>
          <RoundedButton className="px-[5px] mx-[5px]">
            <GpsFixed sx={{ fontSize: "18px" }} />
          </RoundedButton>
          <DropdownDialog
            value={
              <Grid className="flex px-[10px]">
                <AccountBalanceWalletOutlined
                  sx={{ fontSize: "18px", mr: "5px" }}
                />
                {1}
                <Image
                  className="mr-[5px] ml-[10px]"
                  alt="Solana"
                  width={16}
                  height={16}
                  src={"https://axiom.trade/images/sol-fill.svg"}
                />
                {0}
                <ExpandMore className="ml-[6px]" sx={{ fontSize: "18px" }} />
              </Grid>
            }
          >
            <Grid></Grid>
          </DropdownDialog>
        </Grid>
        <Grid
          display={{ xs: "flex", md: "none" }}
          justifyContent={"flex-end"}
          size={3}
        >
          <RoundedButton
            onClick={() => setOpenSettingsCollapse(!openSettingsCollapse)}
          >
            {openSettingsCollapse ? (
              <KeyboardArrowUp className="mx-[4px]" sx={{ fontSize: "18px" }} />
            ) : (
              <Grid className="flex px-[10px]">
                P1
                <SettingsOutlined
                  className="ml-[6px]"
                  sx={{ fontSize: "18px" }}
                />
              </Grid>
            )}
          </RoundedButton>
        </Grid>
      </Grid>
      <Collapse
        sx={{ display: { xs: "flex", md: "none" }, pb: 2 }}
        in={openSettingsCollapse}
        unmountOnExit
      >
        <Grid container>
          <Grid size={6} className="flex items-center mb-[14px]">
            <RoundedButton fill="#22242d" className="mr-[10px]">
              <Grid className="flex px-[10px]">
                <FormatListBulletedOutlined
                  sx={{ fontSize: "18px", mr: "5px" }}
                />
                Display
                <ExpandMore className="ml-[6px]" sx={{ fontSize: "18px" }} />
              </Grid>
            </RoundedButton>
            <RoundedButton className="px-[5px] mx-[10px]">
              <BookmarkRemoveOutlined sx={{ fontSize: "18px" }} />
            </RoundedButton>
            <RoundedButton className="px-[5px] mx-[10px]">
              <GpsFixed sx={{ fontSize: "18px" }} />
            </RoundedButton>
          </Grid>
          <Grid size={6} className="flex justify-end mb-[14px]">
            <RoundedButton fill="#22242d">
              <Grid className="flex px-[10px]">
                <TuneOutlined sx={{ fontSize: "18px", mr: "5px" }} />
                Filter
                <ExpandMore className="ml-[6px]" sx={{ fontSize: "18px" }} />
              </Grid>
            </RoundedButton>
          </Grid>
          <Grid size={4}>
            <RoundedButton>
              <Grid className="flex px-[10px]">
                <AccountBalanceWalletOutlined
                  sx={{ fontSize: "18px", mr: "5px" }}
                />
                {1}
                <Image
                  className="mr-[5px] ml-[10px]"
                  alt="Solana"
                  width={16}
                  height={16}
                  src={"https://axiom.trade/images/sol-fill.svg"}
                />
                {0}
                <ExpandMore className="ml-[6px]" sx={{ fontSize: "18px" }} />
              </Grid>
            </RoundedButton>
          </Grid>
          <Grid size={8} className="flex justify-end">
            <InputFilterButton />
          </Grid>
        </Grid>
      </Collapse>
      <Grid
        container
        height={{
          xs: `calc(100% - ${openSettingsCollapse ? "130px" : "43px"})`,
          md: "calc(100% - 43px)",
        }}
        className="border border-[#22242d] rounded-[4px] bg-[#101114]"
      >
        {COLUMNS.map(({ id, label }, i) => (
          <Grid
            key={id}
            size={{ xs: 12, md: 4 }}
            className={`h-full ${i > 0 ? "border-l border-[#22242d]" : ""}`}
            display={i > 0 ? { xs: "none", md: "block" } : "block"}
          >
            <Grid
              container
              className="h-[45px] border-b border-[#22242d] items-center"
            >
              <Grid size={{ xs: 10, md: 4 }} pl={1} className="text-[15px]">
                {label}
              </Grid>
              <Grid
                size={{ xs: 2, md: 8 }}
                className="flex justify-end items-center"
              >
                <Grid display={{ xs: "none", md: "block" }}>
                  <InputFilterButton inputClasses="w-[20px]" />
                </Grid>
                <TuneOutlined className="mx-[10px]" sx={{ fontSize: "18px" }} />
              </Grid>
            </Grid>
            <Grid height={"calc(100% - 45px)"} overflow={"auto"}>
              {MOCK_DATA[id].map(
                ({
                  id,
                  name,
                  image,
                  description,
                  marketCap,
                  time,
                  holders,
                  proTraders,
                  KOLs,
                  migration,
                  created,
                  volume,
                }) => (
                  <Tooltip
                    key={id}
                    title={
                      <span className="text-[#f25461]">{`Bonding: ${99.5}%`}</span>
                    }
                    placement="top"
                  >
                    <Grid
                      container
                      className="border-b border-[#22242d] relative pl-[85px] cursor-pointer hover:bg-[#22242d99]"
                      py={1}
                      pr={2}
                    >
                      <Avatar
                        variant="rounded"
                        sx={{
                          height: "65px",
                          width: "65px",
                          position: "absolute",
                        }}
                        className="top-[8px] left-[8px]"
                        src={image}
                      >
                        {name.slice(0, 1).toUpperCase()}
                      </Avatar>
                      <Grid size={8} className="text-[14px] flex font-[600]">
                        <div className="max-w-[100px] sm:max-w-[100px] lg:max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap mr-[8px] text-[#fcfcfc]">
                          {name}
                        </div>
                        <Tooltip title={description} placement="top">
                          <div className="max-w-[calc(100% - 100px)] sm:max-w-[calc(100% - 100px)] lg:max-w-[calc(100% - 50px)] overflow-hidden text-ellipsis whitespace-nowrap text-[#777a8c] pr-[20px] relative cursor-pointer hover:text-[#526fff]">
                            {description}
                            <ContentCopyOutlined
                              className="right-[0px] top-[3px]"
                              sx={{ fontSize: "14px", position: "absolute" }}
                            />
                          </div>
                        </Tooltip>
                      </Grid>
                      <Grid
                        size={4}
                        className="flex justify-end items-center text-[10px] text-[#777a8c]"
                      >
                        <Tooltip title="Market Cap" placement="top">
                          <span>
                            MC
                            <span className="ml-[5px] text-[#52c5ff] text-[15px] font-[600]">
                              {marketCap}
                            </span>
                          </span>
                        </Tooltip>
                      </Grid>
                      <Grid size={10} flexWrap={"nowrap"}>
                        <span className="text-[#12af80] text-[15px]">
                          {time}
                        </span>
                        <SearchOutlined
                          className="mx-[5px] hover:text-[#526fff]"
                          sx={{ fontSize: "18px" }}
                        />
                        <Tooltip title="Holders" placement="top">
                          <span className="mx-[2px] text-[12px]">
                            <SupervisorAccountOutlined
                              sx={{ fontSize: "20px", color: "#777a8c" }}
                            />
                            {holders}
                          </span>
                        </Tooltip>
                        <Tooltip title="Pro Traders" placement="top">
                          <span className="mx-[2px] text-[12px]">
                            <AlignVerticalCenterOutlined
                              sx={{ fontSize: "18px", color: "#777a8c" }}
                            />
                            {proTraders}
                          </span>
                        </Tooltip>
                        <Tooltip title="KOLs" placement="top">
                          <span className="mx-[2px] text-[12px]">
                            <EmojiEvents
                              sx={{ fontSize: "16px", color: "#777a8c" }}
                            />
                            {KOLs}
                          </span>
                        </Tooltip>
                        <Tooltip
                          title={
                            <>
                              <div>Dev Migrations / Created</div>
                              <div>click to open in Solscan</div>
                            </>
                          }
                          placement="top"
                        >
                          <span className="mx-[2px] text-[12px]">
                            <BakeryDining
                              sx={{
                                fontSize: "20px",
                                color: migration > 0 ? "#dcc13c" : "#777a8c",
                              }}
                            />
                            {migration}/{created}
                          </span>
                        </Tooltip>
                      </Grid>
                      <Grid
                        size={2}
                        className="flex justify-end items-center text-[10px] text-[#777a8c]"
                      >
                        <Tooltip title="Volume" placement="top">
                          <span>
                            V
                            <span className="ml-[5px] text-[#fff] text-[15px] font-[600]">
                              {volume}
                            </span>
                          </span>
                        </Tooltip>
                      </Grid>
                      <Grid size={12} mt={1} flexWrap={"nowrap"}>
                        <RoundedButton className="mx-[4px] text-[#f25461]">
                          <span className="px-[5px]">
                            <ManageAccountsOutlined
                              sx={{ fontSize: "15px", mr: "5px" }}
                            />
                            89%
                          </span>
                        </RoundedButton>
                        <RoundedButton className="mx-[4px] text-[#12af80]">
                          <span className="px-[5px]">
                            <Lightbulb sx={{ fontSize: "15px", mr: "5px" }} />
                            89%
                          </span>
                        </RoundedButton>
                        <Tooltip title="Snipers Holdings">
                          <RoundedButton className="mx-[4px] text-[#12af80]">
                            <span className="px-[5px]">
                              <GpsFixed sx={{ fontSize: "15px", mr: "5px" }} />
                              89%
                            </span>
                          </RoundedButton>
                        </Tooltip>
                        <Tooltip title="Insiders Holding">
                          <RoundedButton className="mx-[4px] text-[#f25461]">
                            <span className="px-[5px]">
                              <Face3 sx={{ fontSize: "15px", mr: "5px" }} />
                              89%
                            </span>
                          </RoundedButton>
                        </Tooltip>
                        <Tooltip title="Bundle Holding">
                          <RoundedButton className="mx-[4px] text-[#12af80]">
                            <span className="px-[5px]">
                              <Widgets sx={{ fontSize: "15px", mr: "5px" }} />
                              89%
                            </span>
                          </RoundedButton>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </Tooltip>
                )
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
