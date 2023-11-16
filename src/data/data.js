import MapScreen from "../features/autobulance/screens/MapScreen";
import CalenderScreen from "../features/autobulance/screens/CalenderScreen";
import PaiementScreen from "../features/autobulance/screens/PaiementScreen";
import SettingsScreen from "../features/autobulance/screens/SettingsScreen";

const screens = [
  {
    name: "map",
    id: 0,
    component: <MapScreen />,
    icon: "home",
  },
  {
    name: "calendar",
    id: 1,
    component: <CalenderScreen />,
    icon: "calendar-outline",
  },
  {
    name: "wallet",
    id: 2,
    component: <PaiementScreen />,
    icon: "wallet-outline",
  },
  {
    name: "settings",
    id: 3,
    component: <SettingsScreen />,
    icon: "settings-outline",
  },
];
const carBreakdowns = [
  {
    label: "Defaul",
    id: -1,
    value: "default",
  },
  {
    label: "Flat Tire",
    id: 0,
    value: "flat_tire",
  },
  {
    label: "Dead Battery",
    id: 1,
    value: "dead_battery",
  },
  {
    label: "Engine Problem",
    id: 2,
    value: "engine_problem",
  },
  {
    label: "Out of Gas",
    id: 3,
    value: "out_of_gas",
  },
  {
    label: "Overheating",
    id: 4,
    value: "overheating",
  },
  {
    label: "Locked Keys in Car",
    id: 5,
    value: "locked_keys",
  },
  {
    label: "Other",
    id: 6,
    value: "other",
  },

  // Ajoutez d'autres pannes de voiture ici
];
export { screens, carBreakdowns };
