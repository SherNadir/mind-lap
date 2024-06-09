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
    id: "self-discovery",
    name: "Self Discovery",
    href: "/self-discovery",
    icon: <GoalsIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
  {
    id: "career-finder",
    name: "Career Finder",
    href: "/career-finder",
    icon: <SettingsIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
  {
    id: "ask-ai",
    name: "Ask AI",
    href: "/ask-ai",
    icon: <TeamsIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
  {
    id: "help",
    name: "Help",
    href: "/help",
    icon: <InfoIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
];
