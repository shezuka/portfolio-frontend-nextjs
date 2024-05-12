import { ReactNode } from "react";

type SocialMediaButtonProps = {
  href: string;
  iconClass: string;
  bgColor: string;
  hoverBgColor: string;
  children: ReactNode;
  displayText?: boolean;
};

const SocialMediaButton = ({
  href,
  iconClass,
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
        <i className={`${iconClass}`}></i>
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
      <i className={`${iconClass} mr-2`}></i>
      {children}
    </a>
  );
};

export default SocialMediaButton;
