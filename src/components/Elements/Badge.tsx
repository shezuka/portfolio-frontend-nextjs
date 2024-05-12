import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  style?: "primary" | "secondary" | "green" | "red";
  opacity?: number;
};

const Badge = ({ children, style, opacity }: BadgeProps) => {
  const className = [
    "inline-block px-3 py-1 text-sm font-semibold rounded-full transition-opacity duration-200",
  ];

  if (style === "secondary") {
    className.push("bg-gray-300 text-gray-700");
  } else if (style === "green") {
    className.push("bg-green-600 text-gray-100");
  } else if (style === "red") {
    className.push("bg-red-600 text-gray-200");
  } else {
    // primary by default
    className.push("bg-blue-600 text-gray-100");
  }

  if (typeof opacity === "number") {
    className.push(`opacity-${opacity}`);
  } else {
    className.push("opacity-100");
  }

  return <span className={className.join(" ")}>{children}</span>;
};

export default Badge;
