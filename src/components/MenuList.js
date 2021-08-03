import React from "react";
import {
  Setting,
  ErrorIcon,
  HelpCenter,
  BankIcon,
  CountryIcon,
  HMOS,
  PFAS,
  Calender,
  Locolu,
} from "./icons/icons";

export const listItem = [
  {
    name: "Configuration",
    icon: <Setting />,
    children: [
      { name: "Banks", icon: <BankIcon />, link: "/bank" },
      { name: "Country", icon: <CountryIcon />, link: "/country" },
      { name: "HMOS", icon: <HMOS />, link: "/hmos" },
      { name: "PFAS", icon: <PFAS />, link: "/pfas" },
      { name: "Date format", icon: <Calender />, link: "/dateformat" },
      { name: "Locolu", icon: <Locolu />, link: "/locolu" },
    ],
  },
  { name: "Error log", icon: <ErrorIcon /> },
  { name: "Help center", icon: <HelpCenter /> },
  { name: "Settings", icon: <Setting />, children: [] },
];
