import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type SocialMediaButtonProps = {
  href: string;
  icon: IconProp;
  bgColor: string;
  hoverBgColor: string;
  children: ReactNode;
  displayText?: boolean;
};

const SocialMediaButton = ({
  href,
  icon,
  bgColor,
  hoverBgColor,
  children,
  displayText,
}: SocialMediaButtonProps) => {
  if (!displayText) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`py-2 px-3 rounded-full text-white bg-${bgColor} hover:bg-${hoverBgColor} transition duration-30`}
      >
        <FontAwesomeIcon icon={icon} />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-${bgColor} hover:bg-${hoverBgColor} transition duration-300`}
    >
      <FontAwesomeIcon icon={icon} />
      {children}
    </a>
  );
};

export default SocialMediaButton;
