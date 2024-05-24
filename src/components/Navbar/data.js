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
    name: "Home",
    href: "/",
    icon: <HomeIcon className="w-5 h-5" aria-hidden="true" />,
    current: true,
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <CareersIcon className="w-5 h-5" aria-hidden="true" />,
    current: false,
  },
  {
    name: "Goals",
    href: "/goals",
    icon: <GoalsIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
  {
    name: "Preference",
    href: "/preference",
    icon: <SettingsIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
  {
    name: "Mindlap Team",
    href: "/team",
    icon: <TeamsIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
  {
    name: "Help",
    href: "/help",
    icon: <InfoIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
];
