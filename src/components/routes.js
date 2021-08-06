import DefaultLayout from "./layout/DefaultLayout";
import Banks from "./pages/Banks";
import Country from "./pages/Country";
import DateFormat from "./pages/Dateformat";
import ErrorLog from "./pages/ErrorLog";
import HelpCenter from "./pages/HelpCenter";
import HMOS from "./pages/HMOS";
import Localu from "./pages/LOCALU";
import PFAS from "./pages/PFAS";
import Users from "./pages/Users";

const routes = [
  // {
  //   path: "/settings",
  //   // exact: true,
  //   name: "Settings",
  //   component: Users,
  // },
  {
    path: "/dashboard/configuration/banks",
    name: "Banks",
    component: Banks,
  },
  {
    path: "/dashboard/configuration/country",
    name: "Country",
    component: Country,
  },
  {
    path: "/dashboard/configuration/datefomart",
    name: "DataFormat",
    component: DateFormat,
  },
  {
    path: "/dashboard/configuration/errorlog",
    name: "ErrorLog",
    component: ErrorLog,
  },
  {
    path: "/dashboard/configuration/hmos",
    name: "HMOS",
    component: HMOS,
  },

  {
    path: "/dashboard/configuration/localu",
    name: "Localu",
    component: Localu,
  },
  {
    path: "/dashboard/configuration/pfas",
    name: "PFAS",
    component: PFAS,
  },

  {
    path: "/dashboard/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/dashboard/error-log",
    name: "Error Log",
    component: ErrorLog,
  },
  {
    path: "/dashboard/configuration/help-center",
    name: "Help Center",
    component: HelpCenter,
  },
];

export default routes;
