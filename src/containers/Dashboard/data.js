import {
  CareersIcon,
  GoalsIcon,
  HomeIcon,
  InfoIcon,
  Logo,
  SettingsIcon,
  TeamsIcon,
} from "@/svgs/icons";

export const navigation = [
  {
    id: "home",
    name: "Home",
    href: "/",
    icon: <HomeIcon className="w-5 h-5" aria-hidden="true" />,
    current: true,
  },
  {
    id: "dashboard",
    name: "Dashboard",
    href: "/dashboard",
    icon: <SettingsIcon className="w-5 h-5" aria-hidden="true" />,
    current: false,
  },
  {
    id: "goals",
    name: "Goals",
    href: "/goals",
    icon: <SettingsIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
  {
    id: "preference",
    name: "Preference",
    href: "/preference",
    icon: <SettingsIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
  {
    id: "team",
    name: "CareerMatch Team",
    href: "/team",
    icon: <TeamsIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
  {
    id: "help",
    name: "Help",
    href: "/help",
    icon: <SettingsIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
];
