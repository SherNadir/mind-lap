import Image from "next/image";
import profileLines from "../../../public/images/profileLines.png";
import Link from "next/link";

export const TeamCard = ({ member }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start px-4 rounded-lg gap-6 md:gap-12 w-full">
      <div className="relative">
        <div className="relative w-72 h-72 max-w-[282px] max-h-[282px] rounded-2xl overflow-hidden border-4 border-success-100">
          <Image
            src={member.image}
            alt={member.name}
            fill="layout"
            className="object-cover"
          />
        </div>
        <Image
          src={profileLines}
          alt="lines"
          height={70}
          width={70}
          className="object-cover z-10 absolute top-0 left-[-50px]"
        />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg md:text-2xl font-bold text-primary">
          {member.name}
        </h3>
        <p className="text-dark-300 text-lg font-medium	">{member.role}</p>
        <p className="mt-2 text-dark-300 text-base md:text-lg font-normal">
          {member.description}
        </p>
        <div className="flex justify-center sm:justify-start space-x-4 mt-8 md:mt-12 ">
          {member?.socials?.map((icon, index) => (
            <Link
              key={index}
              href={icon.link}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary-200 bg-primary text-white"
            >
              {icon.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
