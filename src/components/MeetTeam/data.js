import { Linkedin } from "@/svgs/Linkedin";
import ceoImage from "../../../public/images/ceoImage.png";
import femaleTeam from "../../../public/images/femaleTeam.jpg";
import { MailIcon } from "@/svgs/MailIcon";
import { Tiktok } from "@/svgs/Tiktok";
const TwitterIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 17 14" fill="none">
      <path
        d="M16.2275 0.929629C15.4775 1.29713 14.7425 1.44638 13.9775 1.67213C13.1368 0.723379 11.8903 0.670879 10.6925 1.11938C9.49479 1.56788 8.71029 2.66438 8.72754 3.92213V4.67213C6.29379 4.73438 4.12629 3.62588 2.72754 1.67213C2.72754 1.67213 -0.408961 7.24688 5.72754 9.92213C4.32354 10.8574 2.92329 11.4881 1.22754 11.4221C3.70854 12.7744 6.41229 13.2394 8.75304 12.5599C11.438 11.7799 13.6445 9.76763 14.4913 6.75338C14.7439 5.83663 14.8693 4.88952 14.864 3.93863C14.8625 3.75188 15.9965 1.85963 16.2275 0.928879V0.929629Z"
        stroke="white"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const teamMembers = [
  {
    image: ceoImage,
    name: "Samir Weber",
    role: "CEO & Owner Mindelap",
    description:
      "I am Nuri Memeti, specialized in AI research in education, and passionately dedicated to enhancing career guidance for children and students. With my background in Artificial Intelligence, I contribute innovative technologies to this project, developing an interactive concept that assists young people in discovering and testing their future career paths. My passion lies in merging education with advanced technology to nurture talents and interests in young people.",
    socials: [
      { icon: <TwitterIcon />, link: "#" },
      {
        icon: <Linkedin height="22" width="22" />,
        link: "#",
      },
      {
        icon: <MailIcon height="22" width="22" />,
        link: "#",
      },
      {
        icon: <Tiktok height="22" width="22" className={"text-white"} />,
        link: "#s",
      },
    ],
  },
];
// export const teamMemberTwo = {
//   image: femaleTeam,
//   name: "Nuri Memeti",
//   role: "AI Research in Education",
//   description:
//     "I am Nuri Memeti, specialized in AI research in education, and passionately dedicated to enhancing career guidance for children and students. With my background in Artificial Intelligence, I contribute innovative technologies to this project, developing an interactive concept that assists young people in discovering and testing their future career paths. My passion lies in merging education with advanced technology to nurture talents and interests in young people.",
//   socials: [
//     { icon: <TwitterIcon />, link: "#" },
//     {
//       icon: <Linkedin height="22" width="22" />,
//       link: "#",
//     },
//     {
//       icon: <MailIcon height="22" width="22" />,
//       link: "#",
//     },
//     {
//       icon: <Tiktok height="22" width="22" className={"text-white"} />,
//       link: "#s",
//     },
//   ],
// };
