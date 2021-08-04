import DefaultLayout from "./layout/DefaultLayout";
import Banks from "./pages/Banks";
import Country from "./pages/Country";
import DateFormat from "./pages/DATEFORMAT";
import ErrorLog from "./pages/ErrorLog";
import HelpCenter from "./pages/HelpCenter";
import HMOS from "./pages/HMOS";
import Localu from "./pages/LOCALU";
import PFAS from "./pages/PFAS";
import Users from "./pages/Users";

const routes = [
  {
    path: "/dashboard",
    exact: true,
    name: "Home",
    component: DefaultLayout,
  },
  {
    path: "/configuration/banks",
    name: "Banks",
    component: Banks,
  },
  {
    path: "/configuration/country",
    name: "Country",
    component: Country,
  },
  {
    path: "/configuration/date-fomart",
    name: "DataFormat",
    component: DateFormat,
  },
  {
    path: "/configuration/errorlog",
    name: "ErrorLog",
    component: ErrorLog,
  },
  {
    path: "/configuration/help-center",
    name: "Help Center",
    component: HelpCenter,
  },
  {
    path: "/configuration/hmos",
    name: "HMOS",
    component: HMOS,
  },

  {
    path: "/configuration/localu",
    name: "Localu",
    component: Localu,
  },
  {
    path: "/configuration/pfas",
    name: "PFAS",
    component: PFAS,
  },

  {
    path: "/configuration/users",
    name: "Users",
    component: Users,
  },
];

export default routes;
