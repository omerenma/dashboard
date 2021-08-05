import React from "react";
import {
  DashboardIcon,
  DashboardSettingIcon,
  Setting,
  ErrorIcon,
  HelpCenter,
  BankIcon,
  CountryIcon,
  HMOS,
  PFAS,
  Calender,
  Locolu,
  UserIcon,
} from "./icons/icons";

export const listItem = [
  // { name: "Dashboard", icon: <DashboardIcon /> },
  {
    name: "Configuration",
    icon: <Setting />,
    children: [
      {
        name: "Banks",
        icon: <BankIcon />,
        link: "/dashboard/configuration/banks",
      },
      {
        name: "Country",
        icon: <CountryIcon />,
        link: "/dashboard/configuration/country",
      },
      { name: "HMOS", icon: <HMOS />, link: "/dashboard/configuration/hmos" },
      { name: "PFAS", icon: <PFAS />, link: "/dashboard/configuration/pfas" },
      {
        name: "Date format",
        icon: <Calender />,
        link: "/dashboard/configuration/dateformat",
      },
      {
        name: "Locolu",
        icon: <Locolu />,
        link: "/dashboard/configuration/locolu",
      },
    ],
  },
  { name: "Error log", icon: <ErrorIcon /> },
  { name: "Help center", icon: <HelpCenter /> },
  {
    name: "Settings",
    icon: <Setting />,
    children: [{ name: "Users", icon: <UserIcon /> }],
  },
];
